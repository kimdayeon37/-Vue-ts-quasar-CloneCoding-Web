import HomeViewVue from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from "../layouts/MainLayout.vue";
import InstagramView from "../views/InstagramView.vue";
import YoutubeView from "../views/YoutubeView.vue";
import AppleView from "../views/AppleView.vue";

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
          path: "instagram",
          component: InstagramView,
        },
        {
          path: "youtube",
          component: YoutubeView,
        },
        {
          path: "apple",
          component: AppleView,
        }
      ]
    }
  ]
})

export default router
