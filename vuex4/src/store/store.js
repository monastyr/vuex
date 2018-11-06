import Vue from 'vue'; //trzeba importować
import Vuex from 'vuex'; //trzeba importować

Vue.use(Vuex);

//trzeba eksportować intancję bo inaczej jest tylko plikiem, który nic nie robi
export const store1 = new Vuex.Store({ //Store to obiekt z Vuex
    state:{
        products: [
            {name: 'Banana Skin', price: 20},
            {name: 'Shiny Star', price: 40},
            {name: 'Green Shells', price: 60},
            {name: 'Red Shells', price: 80}
        ]
    }
})