<template>
  <div class="card col-4 p-4 mb-3 gradient-custom">
    <div class="d-flex">
      <h3 class="px-3">{{ product.item.name }}</h3>
      <h3 class="px-3">{{ product.item.price }}:-</h3>
      <div class="d-flex align-items-center px-3"><i class="fas fa-trash-alt"></i></div>
    </div>
    <img class="rounded cartpic" :src="product.item.img" alt="" />
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
.cartpic {
  width: 100%;
  height: 10vw;
  object-fit: cover;
}
i{
  font-size: 1.3rem;
  margin-bottom:8px;
  cursor:pointer
}
</style>