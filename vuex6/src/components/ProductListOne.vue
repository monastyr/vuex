<template>
<div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
        <li v-for="product in saleProductsLocal">
            <!-- iterowanie po wartosciach z funnkcji saleProductsLocal a nie z var var saleProductsData -->
            <span class="name">{{product.name}}</span>
            <span class="price">$ {{product.price}}</span>            
        </li>
    </ul>
    <button v-on:click="reducePriceLocal">Reduce Price</button>
    <!-- metoda reducePriceLocal jest lokalnie zaimplementowana ale modyfikuje dane globalnie w cetral store
    ma to wpływ na wszystkie komponenty; [UWAGA!] zmian nie można śledzić w devtools np w Chormie
    zmienna strict:true w obiekcie Vuex w store/store.js sprawa że konsola rzyga na czerwono błędami; jednak funkcja się wykonuje-->

  </div>
</template>

<script>
export default {
    //odbieranie danych z central store
    //nie potrzebujemy props; ani przekazywania danych z komponentow
    computed:{ //obiekt
        //nie w data; bo tak naprawde nie definiujemy wartosci
        products(){
            //zwraca wartosc
            return this.$store.state.products;
            //store - nazwa naszego storne
            // state nazwa w środkuj store którą sami zdefiniowaliśmy
        },
        saleProductsLocal(){ //tutaj lokalnie zmieniane dla tego komponentu
            //zwraca nowa zmienna, ale nie modyfikuje wartosci z central store
            //nie modyfikujemy danych tylko zmieniamy wartosci do wyswietlania            
            var saleProductsData = this.$store.state.products.map( product =>{ //fat arrow do tworzenia funkcji
                //musimy zwrócić nową wartość, zmapowaną dla nowej zmiennej
                return { //zwraca nowy obiekt
                    //name property i price property ma każdy obiekt saleProducts
                    name: "**" + product.name + "**", //
                    price: product.price /2
                }
            }); //srednik po utworzeniu zmiennej
            return saleProductsData; //trzeba zwrocic, bo zmienna nie jest w data globalna dla instancji

        }
    },
    methods:{
        reducePriceLocal: function(){ //zmiany nie mogą być śledzone przez develop tools:<, a to przeszkadza 
            //BEZPOŚREDNIO modyfikuje dnae z głównego store - zmiany w każdym komponencie
            // może być mylące bo nie wiadomo, który komponent wpływa globalnie na zmiany
            this.$store.state.products.forEach(product => {
                //pętla for each - js dziwna składnia
                product.price -= 1;
            });
        }
        
    //     reducePriceMutations: function(){ //mutacje ze globalnego cetral store
    //     // call commiting mutations - wywyołanie angażowania mutacji (po polsku źle to brzmi)

    //     this.$store.commit('reducePrice');
    //     }
    }

}
</script>

<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}

</style>
