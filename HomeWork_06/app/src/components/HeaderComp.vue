<template>
    <div>
        <header class="header center">
            <nav class="header__left">
                <a class="header__logo" href="main.html">
                    <img src="../assets/header_logo.svg" width="34" height="34" alt="logo">
                    <span class="header__left__text">Interno</span>
                </a>
            </nav>
            <nav class="header__right">
                <a class="header__right__link" href="#">Home</a>
                <a class="header__right__link" href="#">Project</a>
                <a class="header__right__link" href="blog.html">Blog</a>
            </nav>
        </header>

    </div>
</template>

<script>
export default {
    name: 'HeaderComp',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;


    &__left {
        display: inline;

        &__text {
            color: #292F36;
            font-family: DM Serif Display;
            font-size: 40px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
        }
    }

    &__right {
        display: flex;
        align-items: flex-end;
        gap: 40px;

        &__link {
            color: #292F36;
            text-align: center;
            font-family: Jost;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
        }
    }
}
</style>