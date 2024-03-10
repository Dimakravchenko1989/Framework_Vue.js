<template>
  <div id="app">
    <HeaderComp />
    <BlogComp />
    <FooterComp />
    <HeaderComp />
    <BlogDetailsComp />
    <FooterComp />
  </div>
</template>

<script>

import BlogComp from './components/BlogComp.vue'
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';
import BlogDetailsComp from './components/blogDetailsComp.vue';

export default {
  name: 'App',
  components: {
    BlogComp,
    BlogDetailsComp,
    HeaderComp,
    FooterComp
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

@import "scss/vars";

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.center {
  padding-left: calc(50% - $widthSite / 2);
  padding-right: calc(50% - $widthSite / 2);
}
</style>