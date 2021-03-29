<template>
  
      <nav class="navbar sticky-top navbar-light bg-light">
  <div class="container">
     
    <router-link class="gradient-custom logo" to="/" exact>Skincare<span>.com</span> </router-link>
    <router-link class=" home navbar-link  gradient-custom" to="/" exact>Home</router-link>
    <router-link class="about navbar-link gradient-custom" to="/about" exact>about</router-link>
    <router-link class="products navbar-link gradient-custom " to="/products" exact>Products</router-link>
    <router-link class="cart navbar-link gradient-custom " to="/cart" exact><i class="fas fa-shopping-cart"></i></router-link>
 
  </div>
</nav>
  
</template>

<script>
export default {

}
</script>

<style>
.logo{
    font-family: 'Lobster', cursive;
    font-size: 2.3rem;
    
}
span{
    font-size: 1.5rem;
}
.gradient-custom {
  background-image: linear-gradient(45deg, #e4b09b, #d117b2);
  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-text-fill-color: transparent; 
}
.navbar-link:hover {
  background-image: linear-gradient(45deg, #d89be4, #2b026b);
  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-text-fill-color: transparent; 
}
.navbar-link{
    font-family: 'Lobster', cursive;
    font-size: 1.5rem;
}
.home.router-link-exact-active, .about.router-link-exact-active, .products.router-link-exact-active, .cart.router-link-exact-active {
   background-image: linear-gradient(45deg, #d89be4, #2b026b);
  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-text-fill-color: transparent; 
}
</style>