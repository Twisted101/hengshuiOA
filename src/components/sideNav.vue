<template>
  <div>
    <div>
      <router-link v-for="app in appList" v-bind:to="'/'+app.appcode" tag="li" v-bind:key="app.id">
        {{app.appname}}
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "SideNav",
  data() {
    return {
      appList: []
    }
  },
  created: function() {
    console.log("sideNav Created")
    if (this.$store.state.loginMsg == null || JSON.parse(getCookie("loginMsg")) == null) {
      return
    }
    this.appList = this.$store.state.loginMsg.adminApp || JSON.parse(getCookie("loginMsg")).adminApp
    for (let app of this.appList) {
      this.$set(app, "isSelected", false)
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  padding: 0;
}
li {
  margin: 20px auto;
  list-style: none;
  width: 200px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}
li.router-link-active {
  background-color: #337ab7;
  color: #fff;
}
</style>
