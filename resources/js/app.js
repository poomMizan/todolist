require('./bootstrap');
import Vue from 'vue';
import App from './components/App';
import router from './router.js';

import Vuex from 'vuex';
Vue.use(Vuex);
const Store = new Vuex.Store({
    state: {
        counter : 0,
        msg : "Hello from vuex !!",
    },
    mutations: {}
});

const app = new Vue({
    
    el : "#app",
    router: router,
    components: { App },
    store: Store,
    // router, 
})/*.$mount("#app")*/;