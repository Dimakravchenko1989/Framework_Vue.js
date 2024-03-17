<template>
    <div>
        <div class="design__cards">
            <div class="design__card" v-for="{ id, img, text, header, date, arrow } in cards" :key="id">
            <img class="design__img" :src="img" alt="design">
            <p class="design__text">{{ text }}</p>
            <h2 class="design__card__header">{{ header }}</h2>
            <div class="design__card__bottom">
                <p class="design__card__date">{{ date }}</p>
                <a href="#"><img :src="arrow" alt="arrow"></a>
            </div>
        </div>
        </div>
        

    </div>
</template>

<script>
export default {
    name: 'ChangeLivingArea',

    data() {
        return {
            cards: [
                {
                    id: 1,
                    img: require('../../assets/livingroom1.png'),
                    text: 'Living Area Design',
                    header: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    arrow: require('../../assets/arrow.svg'),
                },
                {
                    id: 2,
                    img: require('../../assets/livingroom1.png'),
                    text: 'Living Area Design',
                    header: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    arrow: require('../../assets/arrow.svg'),
                },
                {
                    id: 3,
                    img: require('../../assets/design3.png'),
                    text: 'Living Area Design',
                    header: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    arrow: require('../../assets/arrow.svg'),
                },
                {
                    id: 4,
                    img: require('../../assets/design4.png'),
                    text: 'Living Area Design',
                    header: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    arrow: require('../../assets/arrow.svg'),
                },
                {
                    id: 5,
                    img: require('../../assets/design5.png'),
                    text: 'Living Area Design',
                    header: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    arrow: require('../../assets/arrow.svg'),
                },
                {
                    id: 6,
                    img: require('../../assets/design6.png'),
                    text: 'Living Area Design',
                    header: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    arrow: require('../../assets/arrow.svg'),
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
.design__cards {
    display: grid;
    grid-template-columns: repeat(2, 400px);
    padding: 0px;
    justify-content: space-evenly;
    align-items: center;
}

</style>