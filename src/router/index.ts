import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    // login system admin
    {
        path: "/",
        name: "test",
        component: () => import ("@/views/test.vue")
    }, {
        path: "/:pathMatch(.*)*",
        redirect: "/purchase/general/404"
    },
];

const router = createRouter({history: createWebHashHistory(), routes});

router.beforeEach(() => { // Scroll page to top on every route change
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});

export default router;
