import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import ToWatchView from '../views/ToWatchView.vue';
import WatchedView from '../views/WatchedView.vue';
import MovieView from '../views/MovieView.vue';

const routes = [
  {
    name: 'main',
    path: '/',
    component: MainView,
    meta: {
      title: 'Search',
    },
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
    meta: {
      title: 'Movie',
    },
  },
  // {
  //   path: '/:any(.*)',
  //   component: AppE404,
  //   meta: {
  //     title: 'error 404',
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = `Movie Queue - ${to.meta.title ?? ''} page`;
  next();
});

export default router;
