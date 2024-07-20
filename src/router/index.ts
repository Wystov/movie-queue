import { createRouter, createWebHistory } from 'vue-router';
import App404View from '@/views/App404View.vue';
import MainView from '../views/MainView.vue';
import ToWatchView from '../views/ToWatchView.vue';
import WatchedView from '../views/WatchedView.vue';
import MovieView from '../views/MovieView.vue';

const routes = [
  {
    name: 'main',
    path: '/',
    component: MainView,
  },
  {
    name: 'to-watch',
    path: '/to-watch',
    component: ToWatchView,
    meta: {
      title: 'To watch',
    },
  },
  {
    name: 'watched',
    path: '/watched',
    component: WatchedView,
    meta: {
      title: 'Watched',
    },
  },
  {
    name: 'movie',
    path: '/movie/:id',
    component: MovieView,
  },
  {
    path: '/:any(.*)',
    component: App404View,
    meta: {
      title: '404',
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, _, next) => {
  const title = `Movie Queue${to.meta.title ? ` - ${to.meta.title}` : ''}`;
  document.title = title;
  next();
});

export default router;
