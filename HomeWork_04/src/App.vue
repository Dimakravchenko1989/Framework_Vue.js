<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <BlogComp />
    <BlogDetailsComp />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import BlogComp from './components/BlogComp.vue'
import BlogDetailsComp from './components/blogDetailsComp.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    BlogComp,
    BlogDetailsComp
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