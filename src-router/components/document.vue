<template>
  <div>
    <div class="twoMenu">
        <router-link :to="{name:'nameDoc'}">姓名文档</router-link>
        <router-link :to="{name:'ageDoc'}">年龄文档</router-link>
        <router-link to="/document/sexDoc">性别文档</router-link>
    </div>
    <router-view class="contentText"></router-view>
  </div>

</template>

<script>
  export default {

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.twoMenu a{
  display: inline-block;
  padding: 0px 40px;
}
  .contentText{
    font-size: 34px;
    padding-top: 40px;
  }
</style>
