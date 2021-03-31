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
 <div v-else>
  <router-link class="cartlink btn" to="/cart" exact>Go to cart</router-link>

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