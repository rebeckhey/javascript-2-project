<template>
  <nav class="navbar sticky-top navbar-light bg-light">
    <div class="container">
      <router-link class="gradient-custom logo" to="/" exact
        >Skincare<span>.com</span>
      </router-link>
      <router-link class="home navbar-link gradient-custom" to="/" exact
        >Home</router-link
      >
      <router-link class="about navbar-link gradient-custom" to="/about" exact
        >about</router-link
      >
      <router-link
        class="products navbar-link gradient-custom"
        to="/products"
        exact
        >Products</router-link
      >

      <!-- Default dropleft button -->
      <div class="dropleft">
        <a 
          href="#"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
         
        >
          <i class="fas fa-shopping-cart gradient-custom cart" 
            ><span class="badge rounded-pill badge-notification">1</span></i
          >
        </a>
        <div class="p-4 dropdown-menu whitearea" >
         
          <h2 class="shoppingcart gradient-custom text-center">SHOPPINGCART</h2>

          <shopCartCard />
          
       
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import shopCartCard from "../views/shopCartCard";
export default {
  components: {
    shopCartCard,
  },
 methods:{
 
 }
};
</script>

<style>
.logo {
  font-family: "Lobster", cursive;
  font-size: 2.3rem;
}
.logo span {
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
.navbar-link {
  font-family: "Lobster", cursive;
  font-size: 1.5rem;
}
.home.router-link-exact-active,
.about.router-link-exact-active,
.products.router-link-exact-active,
.cart.router-link-exact-active {
  background-image: linear-gradient(45deg, #d89be4, #2b026b);
  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.cart {
  font-size: 1.6rem;
}
.cart span {
  font-size: 1rem;
}
.cartlink:hover {
  opacity: 50%;
}

.whitearea{
  width: max-content !important;
}

</style>