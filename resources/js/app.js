require('./bootstrap');
import Vue from 'vue';
import App from './components/App';
import router from './router.js';
import Store from './store.js';

const app = new Vue({
    el : "#app",
    router: router,
    components: { App },
    store: Store,
    // router, 
})/*.$mount("#app")*/;