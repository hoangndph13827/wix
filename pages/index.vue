<template>
  
  <div>
    <header1/>
    <articleVue/>
    <footerVue/>
  </div>
</template>

<script>
import header1 from "../components/header.vue"
import articleVue from "../components/article.vue";
import footerVue from "../components/footer.vue";
import cookie from "vue-cookies-reactive"
import Vue from "vue";
Vue.use(cookie)
// import 
export default {
  components:{
    header1,
    articleVue,
    footerVue
  },
  
 
  name: 'IndexPage'
}
</script>

<style >
*{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  padding:0;
  margin: 0;
}
.container{
        width: 1100px;
        margin: 0 auto 0 auto;
        padding: 50px 30px 50px 30px;
        background-color: rgb(200, 200, 225);
}
.title{
        font-size: 55px;
        font-weight: 50px;
        line-height: 75px;
        margin-bottom: 50px;
}
</style>
