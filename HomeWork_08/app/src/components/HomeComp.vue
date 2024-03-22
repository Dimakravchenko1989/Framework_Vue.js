<template>
    <div>
        <main class="center">
            <section class="top__content content__top">
                <h1 class="top__content__header">Let Your Home Be Unique</h1>
                <p class="top__content__text">There are many variations of the passages of lorem Ipsum fromavailable
                    majority</p>
                <button class=" top__content__button"><span class="top__content__button__text">Get Starte</span> <span
                        class="top__content__button__img"><img src="../assets/Vector.svg"
                            alt="top__content__button__img"></span></button>
            </section>
            <section class="mid__content__description">
                <h1 class="mid__content__description__header">Follow Our Projects</h1>
                <p class="mid__content__description__text">It is a long established fact that a reader will be distracted by
                    the of
                    readable content of page lookings at its layouts points.</p>
            </section>
            <section class="mid__content">
                <div class="product__card">
                    <img class="border-top-right-radius" src="../assets/kitchan1.png" alt="kitchan1">
                    <div class="product__card__content">
                        <div class="product__card__content__left">
                            <h3 class="product__card__header">Modern Kitchan</h3>
                            <p class="product__card__text">Decor / Artchitecture</p>
                        </div>
                        <a class="product__card__content__right" href="#"><img src="../assets/arrow.svg" alt="arrow"></a>
                    </div>
                </div>
                <div class="product__card">
                    <img class="border-top-left-radius" src="../assets/kitchan2.png" alt="kitchan1">
                    <div class="product__card__content">
                        <div class="product__card__content__left">
                            <h3 class="product__card__header">Modern Kitchan</h3>
                            <p class="product__card__text">Decor / Artchitecture</p>
                        </div>
                        <a class="product__card__content__right" href="#"><img src="../assets/arrow.svg" alt="arrow"></a>
                    </div>
                </div>
                <div class="product__card">
                    <img class="border-bottom-right-radius" src="../assets/kitchan3.png" alt="kitchan1">
                    <div class="product__card__content">
                        <div class="product__card__content__left">
                            <h3 class="product__card__header">Modern Kitchan</h3>
                            <p class="product__card__text">Decor / Artchitecture</p>
                        </div>
                        <a class="product__card__content__right" href="#"><img src="../assets/arrow.svg" alt="arrow"></a>
                    </div>
                </div>
                <div class="product__card">
                    <img class="border-bottom-left-radius" src="../assets/kitchan4.png" alt="kitchan1">
                    <div class="product__card__content">
                        <div class="product__card__content__left">
                            <h3 class="product__card__header">Modern Kitchan</h3>
                            <p class="product__card__text">Decor / Artchitecture</p>
                        </div>
                        <a class="product__card__content__right" href="#"><img src="../assets/arrow.svg" alt="arrow"></a>
                    </div>
                </div>
            </section>

            <section class="footer__top">
                <div class="footer__top__box">
                    <h1 class="footer__top__box__quantity">12</h1>
                    <p class="footer__top__box__text">Years Of Experiance</p>
                </div>
                <div class="footer__top__box">
                    <h1 class="footer__top__box__quantity">85</h1>
                    <p class="footer__top__box__text">Success Project</p>
                </div>
                <div class="footer__top__box">
                    <h1 class="footer__top__box__quantity">15</h1>
                    <p class="footer__top__box__text">Active Project</p>
                </div>
                <div class="footer__top__box">
                    <h1 class="footer__top__box__quantity">95</h1>
                    <p class="footer__top__box__text">Happy CUstomers</p>
                </div>
            </section>
            <section class="footer__mid__description">
                <h1 class="footer__mid__description__header">Articles & News</h1>
                <p class="footer__mid__description__text">It is a long established fact that a reader will be distracted
                    by the of readable content of a page when lookings at its layouts the points of using.</p>
            </section>
            <section class="footer__mid">
                <div class="design__card">
                    <img class="design__img" src="../assets/design1.png" alt="design1">
                    <p class="design__text">Kitchan Design</p>
                    <h2 class="design__card__header">Let’s Get Solution For Building Construction Work</h2>
                    <div class="design__card__bottom">
                        <p class="design__card__date">26 December,2022</p>
                        <a href="#"><img src="../assets/arrow.svg" alt="arrow"></a>
                    </div>
                </div>
                <div class="design__card">
                    <img class="design__img" src="../assets/design2.png" alt="design1">
                    <p class="design__text">Living Design</p>
                    <h2 class="design__card__header">Low Cost Latest Invented Interior Designing Ideas.</h2>
                    <div class="design__card__bottom">
                        <p class="design__card__date">22 December,2022</p>
                        <a href="#"><img src="../assets/arrow.svg" alt="arrow"></a>
                    </div>
                </div>

                <div class="design__card">
                    <img class="design__img" src="../assets/design3.png" alt="design1">
                    <p class="design__text">Interior Design</p>
                    <h2 class="design__card__header">Best For Any Office & Business Interior Solution</h2>
                    <div class="design__card__bottom">
                        <p class="design__card__date">26 December,2022</p>
                        <a href="#"><img src="../assets/arrow.svg" alt="arrow"></a>
                    </div>
                </div>
            </section>
        </main>

    </div>
</template>

<script>
export default {
    name: 'HomeComp',

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

.content__top {
    background: url('../assets/top_photo.png'), lightgray 50% / cover no-repeat;
    background-repeat: no-repeat;
    border-radius: 50px;
    width: 1140px;
    height: 758px;
}

.top__content {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 40px;
    gap: 20px;

    &__header {
        width: 433px;
        color: #292F36;
        font-family: "DM Serif Display";
        font-size: 65px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 81.25px */
    }

    &__text {
        width: 433px;
        color: #4D5053;
        font-family: "Jost";
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 33px */
        letter-spacing: 0.22px;
    }

    &__button {
        border-radius: 18px;
        background: #292F36;
        box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
        display: flex;
        padding: 26px 49px 26px 48px;
        align-items: center;
        gap: 10px;

        &__text {
            color: #FFF;
            text-align: center;
            font-family: "Jost";
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 125%;
            /* 22.5px */
            letter-spacing: 0.36px;
        }

    }
}

.mid__content__description {
    display: flex;
    padding: 90px 200px 90px 200px;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    &__header {
        color: #292F36;
        text-align: center;
        font-family: "DM Serif Display";
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 62.5px */
        letter-spacing: 1px;
    }

    &__text {
        color: #4D5053;

        text-align: center;
        font-family: "Jost";
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 33px */
        letter-spacing: 0.22px;
    }
}

.mid__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.product__card {
    margin-top: 50px;

    &__content {
        display: flex;
        justify-content: space-between;
        margin-top: 25px;
    }

    &__header {
        color: #292F36;
        font-family: "DM Serif Display";
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 31.25px */
        letter-spacing: 0.5px;
    }

    &__text {
        color: #4D5053;
        font-family: "Jost";
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 33px */
        letter-spacing: 0.22px;
    }
}

.border-top-right-radius {
    border-top-right-radius: 50px;
}

.border-top-left-radius {
    border-top-left-radius: 50px;
}

.border-bottom-right-radius {
    border-bottom-right-radius: 50px;
}

.border-bottom-left-radius {
    border-bottom-left-radius: 50px;
}

.footer__top {
    background-color: #F4F0EC;
    height: 457px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 76px;
    margin-top: 100px;

    &__box {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;

        &__quantity {
            color: #CDA274;
            font-family: "DM Serif Display";
            font-size: 85px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            /* 106.25px */
            letter-spacing: 1.7px;
        }

        &__text {
            color: #4D5053;
            font-family: "Jost";
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            /* 33px */
            letter-spacing: 0.22px;
        }
    }
}

.footer__mid__description {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 96px 200px 90px 200px;

    &__header {
        color: #292F36;
        text-align: center;
        font-family: "DM Serif Display";
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 62.5px */
        letter-spacing: 1px;
    }

    &__text {
        color: #4D5053;
        text-align: center;
        font-family: "Jost";
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 33px */
        letter-spacing: 0.22px;
    }
}

.footer__mid {
    display: flex;
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
</style>