import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '/starbucks',
          name: 'starbucks',
          component: () => import('../views/StarbucksView.vue'),
        },
        {
          path: "/instagram",
          name: 'instagram',
          component: () => import('../views/InstaPostView.vue'),
        },
          {
            path: "/instagram/mypage",
            name: 'instamypage',
            component: () => import('../components/instagram/MyPage.vue'),
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
        },
      ]
    }
  ]
})

export default router