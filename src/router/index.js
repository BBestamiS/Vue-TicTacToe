import { createRouter, createWebHistory } from 'vue-router';
import Play from '../views/Play.vue';
import Home from '../views/Home.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
    {
        path:'/play',
        name: 'Play',
        component: Play,
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
