    import Vue from 'vue'
    import App from './App.vue'
    import VeeValidate from 'vee-validate';
    import router from './router'
    /* eslint-disable */

    Vue.use(VeeValidate);

    Vue.config.productionTip = false;

    Vue.prototype.$eventHub = new Vue(); // Global event bus
    
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');