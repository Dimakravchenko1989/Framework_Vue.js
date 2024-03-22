<template>
    <div>
        <HeaderComp />
        <BlogComp />
        <FooterComp />
    </div>
</template>

<script>
import BlogComp from '../components/BlogComp.vue';
import FooterComp from '../components/FooterComp.vue';
import HeaderComp from '../components/HeaderComp.vue';

export default {
    name: 'BlogPage',
    components: { HeaderComp, FooterComp, BlogComp }
};
</script>

<style lang="scss" scoped></style>