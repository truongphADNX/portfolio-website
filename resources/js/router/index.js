import { createRouter, createWebHistory } from "vue-router";
// Admin
import homeAdminIndex from '../components/admin/home/index.vue';
// pages
import homePageIndex from '../components/pages/home/index.vue';
// login
import login from '../components/auth/login.vue';
// page not found
import notFoundPage from '../components/notFound.vue';
const routes = [
    // admin
    {
        path: '/admin/home',
        name: 'adminHome',
        component: homeAdminIndex,
        meta: {
            requiresAuth: true,
        }
    },
    // Pages
    {
        path: '/',
        name:'Home',
        component: homePageIndex,
        meta: {
            requiresAuth: false,
        }
    },
    // login
    {
        path: '/login',
        name: 'Login',
        component: login,
        meta: {
            requiresAuth: false,
        }
    },
    // notFound
    {
        path:'/:pathMatch(.*)*',
        name: 'NotFound',
        component: notFoundPage,
        meta: {
            requiresAuth: false,
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to,form) => {
    if(to.meta.requiresAuth && !localStorage.getItem('token')) {
        return {name: 'Login'}
    }

    if (to.meta.requiresAuth == false && localStorage.getItem('token')) {
        return {name: 'adminHome'}
    }
})

export default router;