import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/",
      hidden: true
    },
    {
      name: "index",
      path: "/",
      redirect: "/index",
      component: () => import("./views/index/index.vue"),
      chunkName: "views/payAftergo",
      children: [
        {
          name: "index",
          path: "/index",
          component: () => import("./views/index/index.vue"),
          chunkName: "views/hello",
          meta: {
            name: "",
            index: 1,
            title: "",
            auth: true
          }
        }
      ],
      hidden: true
    }, {
          name: "hello",
          path: "/hello",
          meta: {
              index: 2,
              title: "",
              auth: true
          },
          component: () => import("./views/hello/hello.vue")
      }
  ]
});
