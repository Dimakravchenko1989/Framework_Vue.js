<template>
    <div>
        <HeaderComp />
        <HomeComp />
        <FooterComp />

    </div>
</template>

<script>
import FooterComp from '../components/FooterComp.vue';
import HeaderComp from '../components/HeaderComp.vue';
import HomeComp from '../components/HomeComp.vue';

export default {
    name: 'HomePage',
    components: { HeaderComp, HomeComp, FooterComp }
};
</script>

<style lang="scss" scoped></style>