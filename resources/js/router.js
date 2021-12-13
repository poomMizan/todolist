import Vue from 'vue';
import VueRouter from 'vue-router';
import ListView from './components/ListView.vue'

Vue.use(VueRouter)

const routesList = [
  {
    path: '/list',
    name: "List",
    component: ListView,
  },
    {
    path: '/test',
    name: "Test",
    component: () => import('./components/TestRouter.vue'),
  },
  {
    path: '/upload',
    name: "Upload",
    component: () => import('./components/Upload.vue'),
  },
];

const router = new VueRouter({
  mode: "history",
  routes: routesList,
});

export default router;
