<!-- W tej aplikacji dane przekazywane są przez props; a nie przez mechanizm central store udostępniany dzięki bibliotece vuex -->
<template>
<div id="app">
  <!-- dodanie zagdniezdzonych komponentow -->
  <product-list-one v-bind:products="products"></product-list-one>
  <!-- :products zmienna do ktorej przypisane sa dane z data; po tej nazwie zmiennej dane trafiaja do child componentow -->
  <product-list-two v-bind:products="products"></product-list-two>

  </div>
</template>

<script>

//import componentow
import ProductListOne from './components/ProductListOne';
import ProductListTwo from './components/ProductListTwo';

export default {
  components:{ //rejestracja componentow
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  },
  name: 'app',
  data () {
    return {
            products: [ //nasze dane; uzywane w obu zagniezdzonych komponentach
                {name: 'Banana Skin', price: 20},
                {name: 'Shiny Star', price: 40},
                {name: 'Green Shells', price: 60},
                {name: 'Red Shells', price: 80}
            ]
    }
  }
}
</script>

<style>
body{
    font-family: Ubuntu;
    color: #555;
}

</style>
