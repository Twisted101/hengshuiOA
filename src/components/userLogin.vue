<template>
  <div>
    <div class="header">衡水网安支队文件流转平台</div>
    <div class="content">
      <div class="banner"></div>
      <div class="description">
        建立一个系统的、统一的、整合的办公管理平台，统一标准进而规范日常工作习惯，提高办案的执行力,提升日常效率。规范业务表转化、模块化并加快业务流转的速度，真正做到“流程统一、责权分明、管理高效。
      </div>
      <div class="loginBox">
        <input type="text" placeholder="请输入警号" v-model="username">
        <input type="text" placeholder="请输入密码" v-model="password">
        <button v-on:click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserLogin",
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    login: function() {
      let _this = this
      // if (this.username == "" || this.password == "") {
      //   return
      // }
      let _postData = {
        jh: this.username,
        password: this.password
      }
      let a = {
        jh: "111111",
        password: "e10adc3949ba59abbe56e057f20f883e"
      }
      $.ajax({
        type: "POST",
        url: "http://127.0.0.1:8284/admin/login",
        data: a,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: function(response) {
          if (response.msg === "OK") {
            _this.$store.state.loginState = JSON.parse(response)
            setCookie("loginMsg", JSON.stringify(response.data))
            _this.$router.push({ path: "/" })
          }
          $.ajax({
            type: "GET",
            url: "/user/getSessionUser",
            dataType: "json",
            success: function(response) {
              console.log(response)
              _this.$store.state.loginMsg = JSON.parse(response)
            },
            error: function() {}
          })
        },
        error: function() {
          _this.$store.state.loginState = {
            status: 200,
            msg: "登陆成功"
          }
          _this.$store.state.loginMsg = {
            adminUser: {
              id: "0b2bd78f03214a0591a1b1eb48e442f2",
              jh: "222222",
              sfzh: "320211198811241632",
              xm: "执法监督员",
              sjhm: "11111111111",
              password: null
            },
            adminDep: {
              id: "404404f1e25",
              depcode: "320201010000",
              depname: "区县1派出所1",
              depfullname: "区县1派出所1",
              parentcode: "0"
            },
            adminRole: [
              {
                id: "1ab9edc12ec043c68b995a629bdd86c1",
                code: "zfjdy",
                name: "执法监督员"
              }
            ],
            adminAuth: [
              {
                id: "90c4c6dccba94eefb1d10b7b1dd6b002",
                code: "auth_approve_first",
                name: "初审"
              }
            ],
            adminApp: [
              {
                id: "520a42eb370549878fb055d845d3a01b",
                appcode: "jsgl",
                appname: "角色管理",
                appurl: null,
                ordernum: 6,
                status: "1"
              },
              {
                id: "f9dc96f14a2c4c868479d23156b7a130",
                appcode: "zzjgrygl",
                appname: "组织机构/人员管理",
                appurl: null,
                ordernum: 8,
                status: "1"
              },
              {
                id: "8eb242948b724f588f0d9c8770b1dbe7",
                appcode: "ajlx",
                appname: "案件类型",
                appurl: null,
                ordernum: 9,
                status: "1"
              },
              {
                id: "ba1a9af7bfe946f29b600f8887016a0f",
                appcode: "zxxd",
                appname: "专项行动",
                appurl: null,
                ordernum: 10,
                status: "1"
              }
            ],
            sessionId: "AE2F59C3D471EA92B574BFEAC64C6139",
            schedules: ["wazd_jdr_sh"],
            waMember: false
          }
          setCookie("loginMsg", JSON.stringify(_this.$store.state.loginMsg))
          setCookie("loginState", JSON.stringify(_this.$store.state.loginState))
          _this.$router.push({ path: "/" })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 100px;
  margin-top: 20px;
  margin-left: 32px;
  font-size: 36px;
  color: #1948cf;
  font-weight: bold;
}
.banner {
  background: url("./../assets/login.jpg") no-repeat center;
  background-color: aliceblue;
}
</style>
