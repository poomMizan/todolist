require('./bootstrap');

import Vue from 'vue';
// window.Vue = require('vue');
import App from './components/App';
// import VueRouter from 'vue-router';
// Vue.use(VueRouter);

// const routes = [
//     { path: '/', component: require('./components/App.vue') },
//   ]    
//   const router = new VueRouter({
//     routes 
//   })
import Vuex from 'vuex';
Vue.use(Vuex);
const Store = new Vuex.Store({
    state: {
        counter : 0,
        msg : "Hello from vuex !!",
    },
    mutations: {

    }
});

const app = new Vue({
    el : "#app",
    components: { App },
    store: Store,
    // router, 
})/*.$mount("#app")*/;
