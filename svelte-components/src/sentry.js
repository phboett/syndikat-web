import * as SentrySDK from '@sentry/browser';

const dsn = process.env.SENTRY_DSN;
const sentry = { ...SentrySDK };

window.Sentry = sentry;

if (dsn) {
  SentrySDK.init({
    dsn,
    environment: process.env.SENTRY_ENVIRONMENT,
    sendDefaultPii: false,
    initialScope: {
      tags: { service: 'frontend' },
    },
    beforeSend(event) {
      if (event.request) {
        delete event.request.data;
        delete event.request.cookies;
        delete event.request.headers;
        delete event.request.query_string;
        delete event.request.fragment;
        if (event.request.url) event.request.url = stripQueryString(event.request.url);
      }

      if (event.breadcrumbs) {
        event.breadcrumbs = event.breadcrumbs
          .map(sanitizeBreadcrumb)
          .filter((breadcrumb) => breadcrumb !== null);
      }

      delete event.extra;
      return event;
    },
    beforeBreadcrumb(breadcrumb) {
      if (!['fetch', 'xhr', 'navigation'].includes(breadcrumb.category ?? '')) return null;
      return sanitizeBreadcrumb(breadcrumb);
    },
  });

  sentry.captureException = (error) => {
    if (!(error instanceof Error) || error.name === 'AbortError') return;
    if (typeof error.status === 'number' && error.status < 500) return;
    SentrySDK.captureException(error);
  };
} else {
  sentry.captureException = () => {};
}

function stripQueryString(value) {
  try {
    const url = new URL(value, window.location.origin);
    const pathname = redactSearchPath(url.pathname);
    return value.startsWith('/') ? pathname : `${url.origin}${pathname}`;
  } catch {
    return redactSearchPath(value.split(/[?#]/, 1)[0]);
  }
}

function redactSearchPath(pathname) {
  const segments = pathname.split('/');
  const searchIndex = segments.findIndex((segment) => /^(search|search-stream)$/i.test(segment));
  if (searchIndex >= 0 && searchIndex < segments.length - 1) {
    return `${segments.slice(0, searchIndex + 1).join('/')}/[query]`;
  }

  const productsIndex = segments.findIndex((segment) => segment.toLowerCase() === 'products');
  if (productsIndex >= 0 && productsIndex < segments.length - 2) {
    segments[productsIndex + 2] = '[query]';
    return segments.slice(0, productsIndex + 3).join('/');
  }

  return pathname;
}

function sanitizeBreadcrumb(breadcrumb) {
  const category = breadcrumb.category;
  const data = breadcrumb.data ?? {};

  if (category === 'fetch' || category === 'xhr') {
    const safeData = {};
    for (const key of ['url', 'method', 'status_code']) {
      if (typeof data[key] === 'string' || typeof data[key] === 'number') {
        safeData[key] = key === 'url' ? stripQueryString(data[key]) : data[key];
      }
    }
    return { ...breadcrumb, message: undefined, data: safeData };
  }

  if (category === 'navigation') {
    const safeData = {};
    for (const key of ['from', 'to']) {
      if (typeof data[key] === 'string') safeData[key] = stripQueryString(data[key]);
    }
    return { ...breadcrumb, message: undefined, data: safeData };
  }

  return null;
}
