<template>
  <div class="products mt-4">
      
       <div class="container">
      
          <div class="row">
        <productsloop v-for="item in items" :key="item.id" :item="item"/>
  </div></div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import productsloop from './productsloop'
export default {
name: 'products',
components:{productsloop},
computed:{
  ...mapGetters(['items'])
},
methods:{
  ...mapActions(['GET_ITEMS'])
},
created(){
  this.GET_ITEMS()
}
}
</script>

<style>

</style>