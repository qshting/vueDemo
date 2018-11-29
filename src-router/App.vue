<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <ul class="nav">
     <!-- <a href="#/home">首页</a>
      <a href="#/about">关于我们</a>
      <a href="#/document">文档下载</a>-->
      <router-link :to="index">首页</router-link>
      <router-link :to="{path:'/about'}">关于我们</router-link>
      <router-link to="/document">文档下载</router-link>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      index:'/home'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.nav{
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #2b81af;
  color: #fff;
}
.nav a{
  float: left;
  padding: 0px 30px;
  color: #fff;
}
  .is-active{
    background: #000066;
  }
</style>
