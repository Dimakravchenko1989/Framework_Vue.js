<template>
    <div>
        <HeaderComp />
        <ProjectDetailsComp />
        <FooterComp />
    </div>
</template>

<script>
import FooterComp from '../components/FooterComp.vue';
import HeaderComp from '../components/HeaderComp.vue';
import ProjectDetailsComp from '../components/ProjectDetailsComp.vue';

export default {
    name: 'ProjectDetailsPage',
    components: { HeaderComp, FooterComp, ProjectDetailsComp }
};
</script>

<style lang="scss" scoped></style>