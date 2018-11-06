import Vue from 'vue'; //trzeba importować
import Vuex from 'vuex'; //trzeba importować

Vue.use(Vuex);

//trzeba eksportować intancję bo inaczej jest tylko plikiem, który nic nie robi
export const store1 = new Vuex.Store({ //Store to obiekt z Vuex
    strict : true, //zapobiega lokalnym (bezpośrednio w komponentach) modyfikacjom danych bez mutacji
    //funkcje modyfikujace sie wykonuja ale konsola rzyga na czerwono błędami
    state:{
        products: [
            {name: 'Banana Skin', price: 20},
            {name: 'Shiny Star', price: 40},
            {name: 'Green Shells', price: 60},
            {name: 'Red Shells', price: 80}
        ]
    },
    getters:{ //moze byc dowolna liczba getterow, pobieraja dane z state i przekazują do komponentow, kiedy jest taka potrzeba
        //skladnia z fat arrow; nie jak standardowa funkcja
        saleProducts: state=>{ //tutaj globalnie dostepna dla każdego komponentu
            //zwraca nową zmienna, ale nie modyfikuje wartosci z central store
            //nie modyfikujemy danych tylko zmieniamy wartosci do wyswietlania
            var saleProducts = state.products.map( product =>{ // jestesmy w store dlatego nie potrzeba odnosic sie do products przez this.$store.state.products
                //musimy zwrócić nową wartość, zmapowaną dla nowej zmiennej
                return { //zwraca nowy obiekt
                    //name property i price property ma każdy obiekt saleProducts
                    name: "**" + product.name + "**", //
                    price: product.price /2
                }
            }); //srednik po utworzeniu zmiennej
            return saleProducts; //trzeba zwrocic, bo zmienna nie jest w data globalna dla instancji

        }
    },
    mutations:{
        //[UWAGA] mają ograniczenia - nie powinno się w nich wywoływać żadnych asynchronicznych akcji
        //zmiany mogą być śledzone w Vue.js devtools
        reducePrice: (state, payload)=>{
                state.products.forEach(product => {
                    //pętla dor each - js dziwna składnia
                    product.price -= payload;
                });

        }
        
    },
    actions:{//łatwiejsze w debugowaniu
        //payload - parametr z komponentu przekazywany do funkcji akcji
        reducePrice: (context, payload)=>{  //context cos w stylu store; reprezentuje store
            setTimeout(function(){ //symulacja asynchronicznego taska
                context.commit('reducePrice', payload)//wywolujemy mutacje jak juz wykona sie asynchorniczna część, np odpowiedź z serwera z danymi 
            }, 2000); //po 2 sekundach wywołujemy mutacje
            //w devtools łatwiej śledzić - w konsoli dla vue dopiero po wywolaniu mutacj(po 2s a nie od razu po kliknięciu) widać wyłoanie mutacji

        }
    }
})