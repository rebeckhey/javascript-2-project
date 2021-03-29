<template>
  
      
    <div class=" card col-md-4 p-3">
        
    <h5 class="card-title">{{item.name}}</h5> 
    <p class="card-text ">{{item.price}}:-</p>
    
    <router-link :to="'products/details/'+ item._id"><img class="pic hoverable" :src="item.img" alt=""></router-link>
    <router-link :to="'products/details/' + item._id"><button type="button" class="mt-4 btn btn-outline-secondary">show details</button></router-link>
    </div>

</template>

<script>
export default {
props:['item']
}
</script>

<style>
.pic{
    width: 100%;
    height: 15vw;
    object-fit: cover;
}

</style>