import { createStore } from "vuex";

export default createStore ({
        state: {
            header: 'Minimal Look Bedrooms',
            text_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
            text_2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
            // начальное состояние 
        },
        mutations: {
            // методы для изменения состояния 
        },
        actions: {
            // методы для асинхронных операций 
        }
        ,
        getters: {
            // методы для чтения состояния 
            getHeader: (state) => state.header,
            getText_1: (state) => state.text_1,
            getText_2: (state) => state.text_2
        },
        modules: {
            // модули Vuex для разделения хранилища на под-хранилища 
        }
    });