<template>
    <div>
        <section class="blogDetails__top__content"></section>

        <section class="blogDetails__mid__content center">
            <div class="blogDetails__mid__content__right">
                <h1 class="blogDetails__mid__content__right__header">Let’s Get Solution for Building Construction Work
                </h1>
                <component :is="changeTabs"></component>
                <img class="blogDetails__mid__content__right__img" src="../assets/blogDetaisImg1.png" alt="photo">
                <div class="blogDetails__mid__content__right__datelinks">
                    <p class="blogDetails__mid__content__right__datelinks__date">26 December,2022</p>
                    <ul class="blogDetails__mid__content__right__datelinks__links">
                        <li><a href="#">Interior</a></li>
                        <li><a href="main.html">Home</a></li>
                        <li><a href="#">Decore</a></li>
                    </ul>
                </div>
                <p class="blogDetails__mid__content__right__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
                    vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of
                    Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or
                    randomised words which don't look even slightly believable. Embarrassing hidden in the middle of
                    text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
                </p>
                <div class="blogDetails__mid__content__right__quotes">
                    <h1 class="blogDetails__mid__content__right__quotes__header">“</h1>
                    <p class="blogDetails__mid__content__right__quotes__text">The details are not the details. They make
                        the design.</p>
                </div>

            </div>
            <div class="blogDetails__mid__content__left">
                <h3 class="blogDetails__mid__content__left__header">Tags</h3>

                <div class="blogDetails__mid__content__left__buttons">
                    <button class="blogDetails__mid__content__left__button" @click="currentTab = nameButton"
                        v-for="nameButton in nameButtons" :key="nameButton.id">{{ nameButton }}</button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import changeBedroom from './changeBedroom.vue';
import changeBuilding from './changeBuilding.vue';
import changeArchitecture from './changeArchitecture.vue';
import changeKitchenPlanning from './changeKitchenPlanning.vue';
import changeKitchen from './changeKitchen.vue';

export default {
    name: 'BlogDetailsComp',
    components: {
        changeBedroom,
        changeBuilding,
        changeArchitecture,
        changeKitchenPlanning,
        changeKitchen

    },

    data() {
        return {
            nameButtons: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'KitchenPlanning', 'Bedroom'],
            currentTab: 'none'

        };
    },

    mounted() {

    },

    methods: {

    },
    computed: {
        changeTabs() {
            return `change${this.currentTab}`
        }
    },
};
</script>

<style lang="scss" scoped>
.blogDetails__top__content {
    background: url('../assets/blogDetais_background.jpg'), lightgray 50% / cover no-repeat;
    height: 351px;
    margin-bottom: 100px;
}

.blogDetails__mid__content {
    display: flex;
    gap: 40px;
}

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

.blogDetails__mid__content__left {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__header {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 31.25px */
        letter-spacing: 0.5px;
    }

    &__buttons {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    &__button {

        padding: 9px 30px;

        border-radius: 10px;
        background: #F4F0EC;
        color: #292F36;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 22.5px */
        letter-spacing: 0.36px;

        &:hover {
            color: #FFF;
            background: #292F36;
            ;
            transition: background 0.2s;
        }

    }
}
</style>