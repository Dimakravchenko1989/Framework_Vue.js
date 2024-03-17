
<template>
  <div id="app">
    <HeaderComp />
    <ProjectDetailsComp />
    <FooterComp />
    <!-- <ProjectComp />
    <HeaderComp />
    <BlogComp />
    <FooterComp />
    <HeaderComp />
    <BlogDetailsComp /> -->
  </div>
</template>

<script>

import BlogComp from './components/BlogComp.vue'
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';
import BlogDetailsComp from './components/blogDetailsComp.vue';
import ProjectComp from './components/ProjectComp.vue';
import ProjectDetailsComp from './components/ProjectDetailsComp.vue';

export default {
  name: 'App',
  components: {

    BlogComp,
    BlogDetailsComp,
    HeaderComp,
    FooterComp,
    ProjectComp,
    ProjectDetailsComp
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

