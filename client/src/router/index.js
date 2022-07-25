import Vue from 'vue'
import VueRouter from 'vue-router'
import Body from '../components/Body.vue';
import BodyBaohiem from '../components/BodyBaohiem.vue';
import dashboard from '../pages/dashboard.vue';
import dashboardbhxh from '../pages/dashboardbhxh.vue';
import Auth from '../pages/authentication/index.vue';
import Profile from '../pages/profiles/profile.vue';
import Feedback from '../pages/profiles/change.vue';
import Feeds from '../pages/profiles/feedbacks.vue';

Vue.use(VueRouter)

const routes = [
    { path: '', redirect: { name: 'default' } },
    {
        path: '/dashboard',
        component: Body,
        children: [{
            path: 'default',
            name: 'default',
            component: dashboard,
            meta: {
                title: 'Hệ thống tra cứu C12 - BHXH Hà Tĩnh',
            }
        }]
    },

    {
        path: '/dashboard-canbobaohiem',
        component: BodyBaohiem,
        children: [{
            path: 'default',
            name: 'default',
            component: dashboardbhxh,
            meta: {
                title: 'Hệ thống tra cứu C12 - BHXH Hà Tĩnh',
            }
        }]
    },

    {
        path: '/settings',
        name: 'settings',
        component: Body,
        children: [{
            path: 'profile',
            name: 'profile',
            component: Profile,
            meta: {
                title: 'Hệ thống tra cứu C12 - BHXH Hà Tĩnh',

            }
        }]
    },

    {
        path: '/feedback',
        name: 'feedback',
        component: Body,
        children: [{
            path: 'change-info',
            name: 'change-info',
            component: Feedback,
            meta: {
                title: 'Hệ thống tra cứu C12 - BHXH Hà Tĩnh',

            }
        }, {
            path: 'feeds',
            name: 'feeds',
            component: Feeds,
            meta: {
                title: 'Hệ thống tra cứu C12 - BHXH Hà Tĩnh',

            }
        }]
    },


    {
        path: '/auth/login',
        name: 'login',
        component: Auth,
        meta: {
            title: 'Hệ thống tra cứu C12 - BHXH Hà Tĩnh',

        }
    },

]


const router = new VueRouter({
    mode: 'hash',
    /* base: process.env.BASE_URL, */
    routes
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/auth/login', '/dashboard/default'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
    // trying to access a restricted page + not logged in
    // redirect to login page
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
    if (authRequired && !loggedIn) {
        next('/auth/login');
    } else {
        next();
    }
});

export default router