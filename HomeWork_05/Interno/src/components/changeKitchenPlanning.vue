<template>
    <div>
        <h1 class="blogDetails__mid__content__right__header">!Kitchen Planning! Design sprints are great</h1>
        <p class="blogDetails__mid__content__right__text">There are many variations of passages of
            Lorem Ipsum available, but the majority have suffered.Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
            vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of
            Lorem Ipsum available, but the majority have suffered.</p>
        <ul class="blogDetails__mid__content__right__points">
            <ol class="blogDetails__mid__content__right__text"> <span
                    class="blogDetails__mid__content__right__points__text">1.</span>Contrary to popular
                belief.There are many
                variations of passages of Lorem Ipsum available, but
                the majority have suffered.</ol>

        </ul>
    </div>
</template>

<script>
export default {
    name: 'changeKitchenPlanning',

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
.blogDetails__mid__content__right {
    display: flex;
    flex-direction: column;
    gap: 52px;
    width: 800px;

    &__header {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1px;
    }

    &__img {
        border-radius: 50px;
    }

    &__datelinks {
        display: flex;
        align-items: center;

        &__date {
            color: #4D5053;
            font-family: Jost;
            font-size: 16px;
            margin-right: 409px;
        }

        &__links li {
            display: inline-block;

            &::before {
                content: '/';
                margin-left: 5px;
                margin-right: 5px;
                color: #7f7f7f;
            }

            &:first-child::before {
                content: '';
            }

            &>a {
                text-decoration: none;
                color: #4D5053;
                font-family: Jost;
                font-size: 16px;

            }
        }
    }

    &__text {
        color: #4D5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
    }

    &__quotes {
        border-radius: 50px;
        background: #F4F0EC;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 50px;
        padding-bottom: 130px;


        &__header {
            color: #CDA274;
            text-align: center;
            font-family: DM Serif Display;
            font-size: 200px;
            font-style: italic;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 4px;
            transform: rotate(180deg)
        }

        &__text {

            color: #CDA274;
            text-align: center;
            font-family: DM Serif Display;
            font-size: 25px;
            font-style: italic;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0.5px;
            width: 400px;
        }
    }

    &__points ol {
        margin-bottom: 32px;
    }

    &__points__text {
        color: #CDA274;
        font-family: DM Serif Display;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0.4px;
    }
}
</style>