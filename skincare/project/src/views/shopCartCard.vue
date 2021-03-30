<template>
  <div class="d-flex col-12">

    <addedItemToCart v-for="product in CART" :key="product.item.id" :product="product"/>
 
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import addedItemToCart from './addedItemCart'
export default {
computed:{
  ...mapGetters(['CART'])
},
components:{addedItemToCart}
}
</script>

<style>

</style>