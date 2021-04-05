<template>
  <div class="card col-4 p-4 mb-3 gradient-custom">
    <div class="d-flex">
      <h3 class="px-3 size">{{ product.item.name }}</h3>
      <h3 class="px-3 size">{{product.quantity}} x {{ product.item.price }}:-</h3>
      <div class="d-flex align-items-center px-3"><i class="size fas fa-trash-alt" @click.stop=""></i></div>
    </div>
    <img class="rounded cartpic" :src="product.item.img" alt="" />
    <p></p>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods:{
    
  }
}
</script>

<style scoped>
.cartpic {
  width: 100%;
  height: 10vw;
  object-fit: cover;
}
i{
  margin-bottom:8px;
  cursor:pointer
}
.size{
  font-size: 1.3rem;
}
</style>