<template>
  <div class="home d-flex align-items-center ">
    <div class="logo container">
      <h1 class="logotype animated fadeIn slower" >Skincare<span>.com</span></h1>
      
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  
}
</script>

<style scoped>
.home{
  background-image: url('../assets/headerskincare.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  width:100%;
  
}
.logotype{
  font-size: 4.6rem;

  
}
span{
font-size: 3rem;
}

</style>
