<template>
    <div>
        <p>Вы разрабатываете приложение для интернет-магазина и у вас есть компонент Vue под названием "ProductDetails".
            Компонент отображает детали о конкретном продукте, включая его название, цену и статус доступности.

            Внутри компонента "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о продукте.
            Объект должен иметь свойства "name" (название продукта), "price" (цена продукта) и "available" (флаг,
            указывающий на доступность продукта).

            Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать форматированную цену
            продукта со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку "$99.99".

            В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и статус доступности.

            Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock".</p>
        <div v-if="product.available">
            <h3>{{ product.name }}</h3>
            <p>Available</p>
            <p>Price:{{ formattedPrice }}</p>
        </div>
        <div v-else>
            <h3>{{ product.name }}</h3>
            <p>Out of stock</p>
            <p>Price:{{ "0" }}</p>
        </div>


    </div>
</template>

<script>
export default {
    name: 'ProductDetails',

    data() {

        return {
            product:
            {
                id: 1,
                name: 'Phone 14',
                price: 99.99,
                available: true
            },

        };
    },
    computed: {
        formattedPrice() {
            return '$' + this.product.price
        },
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped></style>