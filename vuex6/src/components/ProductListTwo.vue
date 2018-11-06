<template>
<div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
        <li v-for="product in saleProducts">
            <span class="name">{{product.name}}</span>
            <span class="price">$ {{product.price}}</span>            
        </li>
    </ul>
        <button v-on:click="reducePriceMutations">Reduce Price</button>

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
            //store - nazwa wymuszana w main.js
            // state nazwa w środkuj store, nzawa "state" wymuszana w pliku store/store.js;
        },
        saleProducts(){ //uzycie globalnego gettera ze store/store.js
            //mozna uzyc w wielu komponentach
            return this.$store.getters.saleProducts; //nie jako funkcje

        }
    },
    methods:{
        // reducePriceLocal: function(){ //zmiany nie mogą być śledzone przez develop tools:<, a to przeszkadza 
        //     //BEZPOŚREDNIO modyfikuje dnae z głównego store - zmiany w każdym komponencie
        //     // może być mylące bo nie wiadomo, który komponent wpływa globalnie na zmiany
        //     this.$store.state.products.forEach(product => {
        //         //pętla dor each - js dziwna składnia
        //         product.price -= 1;
        //     });
        // },
        
        reducePriceMutations: function(){ //mutacje ze globalnego cetral store
        // call commiting mutations - wywyołanie angażowania mutacji (po polsku źle to brzmi)

        this.$store.commit('reducePrice');
        }
    }

}
</script>

<style scoped>
#product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-two ul{
    padding: 0;
    list-style-type: none;
}
#product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>
