import Vue from "vue"
import Router from "vue-router"
import userLogin from "@/components/userLogin"
import indexPage from "@/components/indexPage"
import jsgl from "@/components/routerview/jsgl"
import zzjgrygl from "@/components/routerview/zzjgrygl"
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: "/login",
      name: "userLogin",
      component: userLogin
    },
    {
      path: "/",
      name: "indexPage",
      component: indexPage,
      children: [
        {
          path: "jsgl",
          name: "jsgl",
          component: jsgl
        },
        {
          path: "zzjgrygl",
          name: "zzjgrygl",
          component: zzjgrygl
        }
      ]
    }
  ]
})
