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
                <router-link class="header__right__link" to="/">Home</router-link>
                <router-link class="header__right__link" to="/Project">Project</router-link>
                <router-link class="header__right__link" to="/Blog">Blog</router-link>
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
.center {
    padding-left: calc(50% - 570px);
    padding-right: calc(50% - 570px);
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;


    &__left {
        display: inline;

        &__text {
            color: #292F36;
            font-family: "DM Serif Display";
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