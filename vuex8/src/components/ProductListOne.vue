<template>
<div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
        <li v-for="product in saleProducts">
            <!-- iterowanie po wartosciach z funnkcji saleProductsLocal a nie z var var saleProductsData -->
            <span class="name">{{product.name}}</span>
            <span class="price">$ {{product.price}}</span>            
        </li>
    </ul>
    <button v-on:click="reducePrice(4)">Reduce Price</button>

  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

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
        ...mapGetters([ //trzy kropki - spread operator, funkcja es6
            'saleProducts'
        ])
    },
    methods:{
        ...mapActions([ //trzy kropki - spread operator, funkcja es6
            'reducePrice'
        ])
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
