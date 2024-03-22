<template>
    <div>
        <main>
            <section class="blog__top__content">
                <div class="blog__top__content__box">
                    <h1 class="blog__top__content__box__header">Articles & News</h1>
                    <p class="blog__top__content__box__text">Home / Blog</p>
                </div>
            </section>
            <section class="blog__mid__content center">
                <h1 class="blog__mid__content__header">Latest Post</h1>
                <div class="blog__mid__content__box">
                    <img class="blog__mid__content__box__img" src="../assets/blog_latest_post.png" alt="photo">
                    <div class="blog__mid__content__box__right">
                        <h1 class="blog__mid__content__box__right__header">Low Cost Latest Invented Interior Designing Ideas
                        </h1>
                        <p class="blog__mid__content__box__right__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu
                            sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not
                            simply random text. It has roots in a piece of classica.</p>
                        <div class="blog__mid__content__box__right__bottom">
                            <p class="blog__mid__content__box__right__bottom__text">26 December,2022</p>
                            <router-link class="pages__contacts__text" to="/blog-details"><img src="../assets/arrow.svg"
                                    alt="arrow"></router-link>
                        </div>

                    </div>

                </div>

            </section>
            <section class="blog__bottom__content center" id="app">
                <h1 class="blog__bottom__content__header">Articles & News</h1>
                <div class="blog__cards">
                    <div class="design__card" v-for="{ id, img, text, header, date, arrow } in cards" :key="id">
                        <img class="design__img" :src="img" alt="design">
                        <p class="design__text">{{ text }}</p>
                        <h2 class="design__card__header">{{ header }}</h2>
                        <div class="design__card__bottom">
                            <p class="design__card__date">{{ date }}</p>
                            <router-link class="pages__contacts__text" to="/blog-details"><img :src="arrow"
                                    alt="arrow"></router-link>
                        </div>
                    </div>
                </div>
                <nav>
                    <ul class="pagination">
                        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52"
                                    fill="none">
                                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                                </svg><span class="pagination__number">01</span></a></li>
                        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52"
                                    fill="none">
                                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                                </svg><span class="pagination__number">02</span></a></li>
                        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52"
                                    fill="none">
                                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                                </svg><span class="pagination__number">03</span></a></li>
                        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52"
                                    fill="none">
                                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                                    <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg></a></li>
                    </ul>
                </nav>
            </section>

        </main>

    </div>
</template>

<script>
export default {
    name: 'BlogComp',

    data() {
        return {
            cards: [
                {
                    id: 1,
                    img: require('../assets/design1.png'),
                    text: 'Kitchan Design',
                    header: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    arrow: require('../assets/arrow.svg'),
                },
                {
                    id: 2,
                    img: require('../assets/design2.png'),
                    text: 'Kitchan Design',
                    header: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    arrow: require('../assets/arrow.svg'),
                },
                {
                    id: 3,
                    img: require('../assets/design3.png'),
                    text: 'Kitchan Design',
                    header: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    arrow: require('../assets/arrow.svg'),
                },
                {
                    id: 4,
                    img: require('../assets/design4.png'),
                    text: 'Kitchan Design',
                    header: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    arrow: require('../assets/arrow.svg'),
                },
                {
                    id: 5,
                    img: require('../assets/design5.png'),
                    text: 'Kitchan Design',
                    header: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    arrow: require('../assets/arrow.svg'),
                },
                {
                    id: 6,
                    img: require('../assets/design6.png'),
                    text: 'Kitchan Design',
                    header: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    arrow: require('../assets/arrow.svg'),
                }]

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

.blog__top__content {
    background: url('../assets/blog_background.jpg')lightgray 50% / cover no-repeat;
    height: 356px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 96px;

    &__box {
        display: flex;
        width: 503px;
        padding: 41px 78px;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        border-radius: 37px 37px 0px 0px;
        background: #FFF;

        &__header {
            color: #292F36;
            font-family: "DM Serif Display";
            font-size: 50px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
        }

        &__text {
            color: #4D5053;
            font-family: "Jost";
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.22px;
        }
    }
}

.blog__mid__content__header {
    margin-bottom: 27px;
    color: #292F36;
    font-family: "DM Serif Display";
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
}

.blog__mid__content__box {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 65px;

    &__img {
        border-radius: 50px;
    }

    &__right {
        display: flex;
        flex-direction: column;
        gap: 30px;

        &__header {
            color: #292F36;
            font-family: "DM Serif Display";
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0.5px;
        }

        &__text {
            color: #4D5053;
            font-family: "Jost";
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.22px;
        }

        &__bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;

            &__text {
                color: #4D5053;
                font-family: "Jost";
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 0.16px;
                text-transform: capitalize;
            }
        }
    }
}



.blog__bottom__content__header {
    margin-top: 100px;
    margin-bottom: 30px;
    color: #292F36;
    font-family: "DM Serif Display";
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
}

.blog__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.design__card {
    position: relative;
    border-radius: 50px;

    &__header {
        width: 270px;
        color: #292F36;
        font-family: "DM Serif Display";
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 31.25px */
        letter-spacing: 0.5px;
    }

    &__bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

.design__img {
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
}

.design__text {
    position: absolute;
    top: 50%;
    left: 10%;
    border-radius: 8px 8px 8px 0px;
    background: #FFF;
}

.pagination {
    margin: 51px auto 100px;
    display: flex;
    width: max-content;
    gap: 20px;
}

.pagination li {
    display: inline;
    position: relative;
}

.pagination__number {
    position: absolute;
    top: 25%;
    left: 30%;
    color: #292F36;
    font-family: "Jost";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    text-transform: capitalize;
}
</style>