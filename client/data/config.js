import Raven from 'raven-js';

const sentry_key = '4426510da5d646668e887b11f3106cf9';
const sentry_app = '223928';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
