
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <HeaderComp />
    <ProjectComp />
    <FooterComp />
    <!-- <HeaderComp />
    <BlogComp />
    <FooterComp />
    <HeaderComp />
    <BlogDetailsComp />
    <FooterComp /> -->
  </div>
</template>

<script>

import BlogComp from './components/BlogComp.vue'
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';
import BlogDetailsComp from './components/blogDetailsComp.vue';
import ProjectComp from './components/ProjectComp.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    BlogComp,
    BlogDetailsComp,
    HeaderComp,
    FooterComp,
    ProjectComp
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

