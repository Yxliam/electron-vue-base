import Vue from "vue";
import Router from "vue-router";

// 按需（懒）加载（vue实现）
const Home = () => import("../views/home/");
const Login = () => import("../views/login/");

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: "/",
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home
    // },
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "*",
      redirect: "/"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});

router.beforeEach((to, from, next) => {
  // 做些什么，通常权限控制就在这里做哦
  next();
});

export default router;
