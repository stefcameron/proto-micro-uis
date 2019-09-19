import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';

Vue.config.productionTip = true;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: `#micro-ui-app2`,
    render: h => h(App)
  }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
