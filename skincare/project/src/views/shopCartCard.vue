<template>
<div>
  <div class="container">
    <div class="row">
      
      <addedItemToCart
        v-for="product in CART"
        :key="product.item.id"
        :product="product"
      />
    </div>
  </div>
<p v-if="CART.length < 1" class="text-center gradient-custom">Your shoppingcart is empty <i class="gradient-custom fas fa-sad-tear"></i></p>
 <div v-else class="d-flex align-items-baseline">
  <router-link class="cartlink btn p-3 gradient-custom" to="/cart" exact>Go to cart</router-link>
  <h4 class="gradient-custom p-3"></h4>

  </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import addedItemToCart from "./addedItemCart";
export default {
  computed: {
    ...mapGetters(["CART"]),
  },
  components: { addedItemToCart },
  
  
 
}
</script>

<style scoped>
p{
  font-size: 1.5rem;
}
</style>