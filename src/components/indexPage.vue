<template>
  <div>
    <PageHeader class="pageheader"></PageHeader>
    <div class="content">
      <SideNav class="sidenav"></SideNav>
      <keep-alive>
      <router-view class="routerview"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/pageHeader"
import SideNav from "@/components/sidenav"
export default {
  name: "indexPage",
  components: {
    PageHeader,
    SideNav
  },
  data() {
    return {}
  },
  watch: {
    $route(to, from) {
      // console.log(to)
    }
  },
  created: function() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html,
body,
#app {
  position: relative;
  min-width: 768px;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.pageheader {
  background-color: #337ab7;
  height: 45px;
  color: #fff;
  line-height: 45px;
  padding: 0 20px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
}
.content {
  padding-top: 45px;
  height: 100%;
  position: fixed;
  width: 100%;
}
.sidenav {
  height: 100%;
  width: 240px;
  border-right: 1px solid #ccc;
  overflow: auto;
  position: absolute;
  top: 45px;
  left: 0;
  bottom: 0;
}
.sidenav::-webkit-scrollbar {
  width: 0px;
}
.routerview {
  width: auto;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  left: 240px;
  top: 45px;
  right: 0px;
  padding: 0 20px 0 20px;
}
.content-header {
  position: relative;
  height: 50px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
}
.content-header .content-name {
  position: absolute;
  top: 50%;
  padding-left: 16px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.1;
  transform: translateY(-50%);
  border-left: 4px solid #87848d;
}
.modal-backdrop {
  display: none;
}
</style>
