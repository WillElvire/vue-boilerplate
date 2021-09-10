import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useUserStore } from '@/stores/user'

export const routes: Array<RouteRecordRaw> = [

  { path: '/', redirect: { name: 'Landing' } },
  {
    path: '/login',
    component: () => import('@/views/Auth/Login.vue'),
    name: 'login',
  },
  {
    path: '/register',
    component: () => import('@/views/Auth/Register.vue'),
    name: 'register',
  },
  {
    path: '/Landing',
    component: () => import('@/views/Landing.vue'),
    name: 'Landing',
  },
  {
    path: '/survey',
    component: () => import('@/views/Pages/Survey.vue'),
    name: 'survey',
  },
  {
    path: '/pricing',
    component: () => import('@/views/Pages/Pricing.vue'),
    name: 'pricing',
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/NotFound.vue'),
  },
]

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  const userStore = useUserStore()
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth)

  if (requiresAuth && !userStore.isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
