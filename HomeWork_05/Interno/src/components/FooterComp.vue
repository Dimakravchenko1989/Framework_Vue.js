<template>
    <div>
        <footer class="footer__bottom center">
            <div class="Interno">
                <h2 class="footer__bottom__header"><img src="../assets/header_logo.svg" alt="logo">Interno</h2>
                <p class="footer__bottom__text">It is a long established fact that a reader will be distractedv
                    lookings.</p>
            </div>
            <div class="pages">
                <h2 class="pages__contacts__header">Pages</h2>
                <a class="pages__contacts__text" href="#">Home</a>
                <a class="pages__contacts__text" href="">Project</a>
                <a class="pages__contacts__text" href="blog.html">Blog</a>
            </div>
            <div class="contacts">
                <h2 class="pages__contacts__header">Contacts</h2>
                <p class="pages__contacts__text">55 East Birchwood Ave. Brooklyn, New York 11201 contact@interno.com (123)
                    456 - 7890</p>
            </div>

        </footer>

    </div>
</template>

<script>
export default {
    name: 'FooterComp',

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
.footer__bottom {
    display: flex;
    align-items: flex-start;
    gap: 210px;
    padding-top: 96px;

    &__header {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 50px */
    }
}

.pages__contacts__header {
    color: #292F36;

    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
}

.footer__bottom__text {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}

.pages__contacts__text {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 300%;
    /* 66px */
    letter-spacing: 0.22px;
}
</style>