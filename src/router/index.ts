import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: (_) => {
      return {path: '/home'};
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/pages/home.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(''),
  routes
});

export default router;
