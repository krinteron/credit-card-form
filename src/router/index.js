import { createRouter, createWebHistory } from 'vue-router';
import CardFormView from '../views/CardFormView.vue';
import SuccessView from '../views/SuccessView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: CardFormView,
  },
  {
    path: '/success',
    name: 'success',
    component: SuccessView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
