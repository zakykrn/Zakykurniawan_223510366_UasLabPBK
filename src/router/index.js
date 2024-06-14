import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Tugas from '../views/Tugas.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/tugas', component: Tugas },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
