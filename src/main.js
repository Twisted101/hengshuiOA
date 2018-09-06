// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"
import vuex from "vuex"
Vue.use(vuex)
import store from "./store"
import "normalize.css" //浏览器样式初始化
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-table/dist/bootstrap-table.min.css"
import "bootstrap-table/dist/bootstrap-table.min.js"
import "bootstrap-table/src/locale/bootstrap-table-zh-CN"
import "../static/public" //定义的一些公共方法
Vue.config.productionTip = false

//验证是否登录
router.beforeEach(function(to, from, next) {
  let loginState = JSON.parse(getCookie("loginState"))
  let loginMsg = JSON.parse(getCookie("loginMsg"))
  if (to.path == "/login" && (loginState == null || loginState.msg != "登陆成功")) {
    next()
  } else if (to.path == "/login" && loginState.msg == "登陆成功") {
    next("/")
  } else if (loginState == null || loginState.msg != "登陆成功") {
    next("/login")
  } else if (to.path == "/") {
    next("/" + loginMsg.adminApp[0].appcode)
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
})
