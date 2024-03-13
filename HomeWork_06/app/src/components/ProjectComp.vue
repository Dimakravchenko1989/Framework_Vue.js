<template>
    <div>
        <main id="app">
            <section class="project__top__content">
                <div class="project__top__content__box">
                    <h1 class="project__top__content__box__header">Our Project</h1>
                    <p class="project__top__content__box__text">Home / Project</p>
                </div>
            </section>
            <section class="project__mid__content center">
                <div class="project__mid__content__buttons">
                    <button class="project__mid__content__button" @click="currentTab = nameButton"
                        v-for="nameButton in nameButtons" :key="nameButton.id">{{
                            nameButton }}</button>
                </div>
                <component :is="changeTabs"></component>

            </section>
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


        </main>

    </div>
</template>

<script>
import ChangeKitchen from './ProjectComponents/ChangeKitchen.vue';
import ChangeBathroom from './ProjectComponents/ChangeBathroom.vue';
import ChangeBedroom from './ProjectComponents/ChangeBedroom.vue';
import ChangeLivingArea from './ProjectComponents/ChangeLivingArea.vue';
export default {
    name: 'ProjectComp',
    components: {
        ChangeKitchen,
        ChangeBathroom,
        ChangeBedroom,
        ChangeLivingArea
    },

    data() {
        return {
            nameButtons: ['Bathroom', 'Bedroom', 'Kitchen', 'LivingArea'],
            currentTab: 'Bedroom'

        };
    },

    mounted() {

    },

    methods: {

    },
    computed: {
        changeTabs() {
            return `Change${this.currentTab}`
        }
    }
};
</script>

<style lang="scss" scoped>
.center {
    padding-left: calc(50% - 570px);
    padding-right: calc(50% - 570px);
}

.project__top__content {
    background: url('../assets/project_backround.jpg')lightgray 50% / cover no-repeat;
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
            font-family: DM Serif Display;
            font-size: 50px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
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
    }
}

.blog__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    text-transform: capitalize;
}

.project__mid__content__buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 75px;
}

.project__mid__content__button {

    padding: 9px 30px;

    border-radius: 18px;
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
        background: #CDA274;
        ;
        transition: background 0.2s;
    }

}
</style>