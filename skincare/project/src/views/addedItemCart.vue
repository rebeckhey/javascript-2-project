<template>
<div>
  <div class="card p-4 mb-3 gradient-custom">
      
      <div class="d-flex">
       <h3 class="px-3">{{product.item.name}}</h3>
    <h3 class="px-3">{{product.item.price}}:-</h3>
    <h3 class="px-3"></h3>
     </div>
     <img class="rounded cartpic" :src="product.item.img" alt="">
     </div>
  </div>
</template>

<script>
export default {
props:['product']
}
</script>

<style scoped>
.cartpic{
    width: 100%;
    height: 10vw;
    object-fit: cover;
}
</style>