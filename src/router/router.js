import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/pages/HomeView.vue'
import AboutView from '@/pages/AboutView.vue'
import ProjectPage from '@/pages/ProjectView.vue'
import Productspage from '@/pages/Productspage.vue'
import ProductPreviewPage from '@/pages/ProductPreviewPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AdminLogin from '@/layouts/AdminLogin.vue'
import login from '@/pages/Login.vue'
import ProfileView from '@/pages/ProfileView.vue'
import AuthMiddleware from './middleware/auth';

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        meta: { requiresAuth: true },
        children: [
        //   { path: '', component: AdminOverview },
        { path: '', component: HomeView },
        { path: 'about', component: AboutView },
        { path: 'my/project', component: ProjectPage },
        { path: 'ProfileView', component: ProfileView },
        { path: 'products', component: Productspage },
        { path: 'product-preview/:slug', component: ProductPreviewPage },
        ], 
      },  
//   { path: '/', component: HomeView },
//   { path: '/about', component: AboutView },
//   { path: '/my/project', component: ProjectPage },
//   { path: '/products', component: Productspage },
  { path: '/login', component: login },
  { path: '/Admin', component: AdminLogin,
    children: [
        { path: '', component: login },
    ],
   },

  { path: '/:pathMatch(.*)*', name: "NotFound", component: NotFoundPage }


]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !AuthMiddleware()) {
    next('/login')  // Redirect to login if not authenticated
  } else {
    next()  // Proceed to route
  }
})

export default router 