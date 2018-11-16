import Vue from "vue";
import Router from "vue-router";

import Demo from "./views/demo/demo.vue";


/**
 * [page]
 */
import Index from "./views/index/index";
import Login from "./views/login/login";
/**
 * [page]
 */
/**
 * [component]
 */
import Dashboard from "./components/dashboard/dashboard";
import Edit from "./components/edit/edit";
/**
 * [component]
 */


Vue.use(Router);
const router = new Router({
    routes: [{
            path: "/index",
            name: "index",
            component: Index,
            meta: {
                title: "后台管理"
            },
            children: [{
                path: '/dashboard',
                name: 'dashboard',
                component: Dashboard
            },{
                path: '/edit',
                name: 'edit',
                component: Edit
            }],
        },
        {
            path: "/",
            name: "login",
            component: Login,
            meta: {
                title: "登陆"
            }
        }
    ]
});
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});
export default router;
