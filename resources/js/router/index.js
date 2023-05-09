import { createRouter, createWebHistory } from "vue-router";
// Admin
import homeAdminIndex from '../components/admin/home/index.vue';
import adminAboutUs from '../components/admin/home/aboutUs.vue';
import adminSevice from '../components/admin/home/service.vue';
import adminSkill from '../components/admin/home/service.vue';
import adminEducation from '../components/admin/home/education.vue';
import adminExperience from '../components/admin/home/experience.vue';
import adminProject from '../components/admin/home/project.vue';
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
            title: 'Home',
            requiresAuth: true,
        }
    },
    {
        path: '/admin/about',
        name: 'adminAbout',
        component: adminAboutUs,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/admin/service',
        name: 'adminService',
        component: adminSevice,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/admin/skill',
        name: 'adminSkill',
        component: adminSkill,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/admin/education',
        name: 'adminEducation',
        component: adminEducation,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/admin/experience',
        name: 'adminExperience',
        component: adminExperience,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/admin/project',
        name: 'adminProject',
        component: adminProject,
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
