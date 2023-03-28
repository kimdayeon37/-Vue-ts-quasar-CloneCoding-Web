import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from "../layouts/MainLayout.vue";
import HomeViewVue from '@/views/HomeView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainLayout,
      children: [
        {
          path: '',
          component: HomeViewVue,
        },
        {
          path: "/instagram",
          name: 'instagram',
          component: () => import('../views/InstagramView.vue'),
        },
          {
            path: "/instagram/post",
            name: 'instapost',
            component: () => import('../views/InstaPostView.vue'),
          },
          {
            path: "/instagram/search",
            name: 'instasearch',
            component: () => import('../components/instagram/SearchPage.vue'),
          },

        {
          path: "/youtube",
          name: 'youtube',
          component: () => import('../views/YoutubeView.vue'),
        },
        {
          path: "/apple",
          name: 'apple',
          component: () => import('../views/AppleView.vue'),
        }
      ]
    }
  ]
})

export default router
