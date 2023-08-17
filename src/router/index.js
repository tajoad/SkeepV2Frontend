import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LaunchPage',
      component: () => import('../views/LaunchPage.vue')
    },
    {
      path: '/aboutme/:id',
      name: 'Aboutme',
      component: () => import('../views/Aboutme.vue'),
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/Signup.vue'),
    },
    {
      path: '/signin',
      name: 'Signin',
      component: () => import('../views/Signin.vue'),
    },
    {
      path: '/myprofile/:id',
      name: 'MyProfile',
      component: () => import('../views/MyProfile.vue'),
    },
    {
      path: '/aboutyou',
      name: 'Aboutyou',
      component: () => import('../views/Aboutyou.vue'),
    },
    {
      path: '/morequestions',
      name: 'MoreQuestions',
      component: () => import('../views/MoreQuestions.vue'),
    },
    {
      path: '/forgotpassword',
      name: 'ForgotPassword',
      component: () => import('../views/ForgotPassword.vue'),
    }
  ]
})

export default router
