import { registerApplication, start } from 'single-spa';

const registerApps = function() {
  registerApplication(
    // SPA app name
    'micro-ui-app1',
    // loading function: must return a promise
    () => import('micro-ui-app1'),
    // activity function
    (location) => location.pathname.startsWith('/micro-ui-app1')
  );

  registerApplication(
    // SPA app name
    'micro-ui-app2',
    // loading function: must return a promise
    () => import('micro-ui-app2'),
    // activity function
    (location) => location.pathname.startsWith('/micro-ui-app2')
  );

  start();
};

export { registerApps };
