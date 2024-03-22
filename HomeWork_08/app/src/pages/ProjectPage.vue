<template>
    <div>
        <HeaderComp />
        <ProjectComp />
        <FooterComp />
    </div>
</template>

<script>
import FooterComp from '../components/FooterComp.vue';
import HeaderComp from '../components/HeaderComp.vue';
import ProjectComp from '../components/ProjectComp.vue';

export default {
    name: 'ProjectPage',
    components: { HeaderComp, FooterComp, ProjectComp }
};
</script>

<style lang="scss" scoped></style>