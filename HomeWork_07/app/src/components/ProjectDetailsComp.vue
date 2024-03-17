<template>
    <div>
        <section class="ProjectDetails__top__content"></section>

        <div class="ProjectDetails__mid__content__box">
            <h1 class="ProjectDetails__mid__content__box__header">{{ getH }}</h1>
            <p class="ProjectDetails__mid__content__box__text">{{ getT_1 }}</p>
            <p class="ProjectDetails__mid__content__box__text">{{ getT_2 }}</p>
        </div>
        <div class="center">
            <img class="image" src="../assets/Project_Details_Photo.png" alt="">
        </div>

    </div>
</template>

<script>
export default {
    name: 'ProjectDetailsComp',

    data() {
        return {

        };
    },

    methods: {
    },

    mounted() {


    },
    computed: {
        getH() {
            return this.$store.getters.getHeader
        },
        getT_1() {
            return this.$store.getters.getText_1
        },
        getT_2() {
            return this.$store.getters.getText_2
        }

    }
};
</script>

<style lang="scss" scoped>
.center {
    padding-left: calc(50% - 570px);
    padding-right: calc(50% - 570px);
}

.ProjectDetails__top__content {
    background: url('../assets/Project_Details_background.jpg'), lightgray 50% / cover no-repeat;
    height: 351px;
    margin-bottom: 100px;
}

.ProjectDetails__mid__content__box {
    display: flex;
    padding-left: calc(50% - 330px);
    padding-right: calc(50% - 570px);
    width: 658px;
    flex-direction: column;
    align-items: start;
    gap: 11px;

    &__header {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 62.5px */
        letter-spacing: 1px;
        
    
    }

    &__text {
        color: #4D5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 33px */
        letter-spacing: 0.22px;
        text-align: start;

       
    }


}

.image {
    border-radius: 50px;
}
</style>