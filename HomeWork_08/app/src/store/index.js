import { createStore } from "vuex";

export default createStore ({
    state: {
        slides: [],
        header: 'Minimal Look Bedrooms',
        text_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
        text_2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'


        // начальное состояние
    },
    mutations: {
        // методы для изменения состояния
        SET_SLIDES(state, slides) {
            state.slides = slides
        }
    },
    actions: {
        // методы для асинхронных операций
        fetchSlides({ commit }) {
            commit('SET_SLIDES', [
                {
                    alt: 'image 1',
                    url: 'Project_Details_Photo.png'
                },
                {
                    alt: 'image 2',
                    url: 'top_photo.png'
                },
                {
                    alt: 'image 3',
                    url: 'Project_Details_Photo.png'
                }
            ])
        }
    }
    ,
    getters: {
        // методы для чтения состояния
        slides(state) {
            return state.slides
        },
        getHeader: (state) => state.header,
        getText: (state) => state.text_1 + state.text_2
       
        
    },
    modules: {
        // модули Vuex для разделения хранилища на под-хранилища
    }
});

