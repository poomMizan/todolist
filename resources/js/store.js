import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const Store = new Vuex.Store({
    state: {
        counter : 0,
        msg : "Hello from vuex !!",
    },
    mutations: {}
});

export default Store;