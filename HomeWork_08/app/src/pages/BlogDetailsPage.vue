<template>
    <div>
        <HeaderComp />
        <BlogDetailsComp />
        <FooterComp />
    </div>
</template>

<script>
import FooterComp from '../components/FooterComp.vue';
import HeaderComp from '../components/HeaderComp.vue';
import BlogDetailsComp from '../components/blogDetailsComp.vue';


export default {
    name: 'BlogDetailsPage',
    components: { HeaderComp, FooterComp, BlogDetailsComp }
};
</script>

<style lang="scss" scoped></style>