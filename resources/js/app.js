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

const app = new Vue({
    el : "#app",
    components: { App },
    // router, 
})/*.$mount("#app")*/;
