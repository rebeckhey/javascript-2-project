<template>
  <div class="container mt-5">
      <div class="d-flex row" v-if="item"> 
<div class="col-4">
<h1>{{item.name}}</h1>
<h4>{{item.description}}</h4>
<h2>{{item.price}}:-</h2>
<br>
<button class="btn btn-outline-secondary">Add to cart<i class="ps-3 fas fa-cart-plus"></i></button>
</div>
<div class="col-8">
<img class="picture" :src="item.img" alt="">
</div> 
</div>


  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
name:'details',
computed:{
  ...mapGetters(['item'])
},
methods:{
  ...mapActions(['GET_ONE_ITEM'])
},
created(){
  this.GET_ONE_ITEM(this.$route.params.id)
}
}
</script>

<style>
.picture{
      width: 100%;
    /* height: 25vw; */
    object-fit: cover;
}

</style>
