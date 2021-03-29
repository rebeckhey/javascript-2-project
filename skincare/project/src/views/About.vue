<template>
  <div class="about">
    <div class="container d-flex">
      <div class=" me-5">
    <h1 class="mt-5 text-center brand logo">About Skincare<span class="smaller">.com</span></h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam sunt inventore debitis voluptatibus blanditiis veniam, molestias amet ad, ipsam omnis est temporibus voluptatum. Asperiores, dolor excepturi. Deleniti, aut sequi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis perspiciatis nulla voluptatibus quasi quam perferendis, corporis, ea eius harum, voluptate ipsa. Aspernatur impedit necessitatibus eius ut eligendi optio fuga nam!</p>
    <br>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium reiciendis similique inventore facere. Totam ex odit deserunt doloribus ducimus obcaecati iusto! Ad quis illo aliquam. Veritatis repellat praesentium voluptas! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quos quia nulla atque doloremque velit molestias ad, repudiandae quasi optio voluptate perspiciatis sit error tempore ipsum impedit libero expedita dolore! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quis id alias reiciendis blanditiis quia magnam dignissimos beatae quidem dolore accusantium commodi delectus dolores quos, necessitatibus modi non sapiente illum.</p>
    </div>
    <div>
    <img class="mt-5 serum-img" :src="require('../assets/serumrose3.jpg')" alt="">
    </div>
    </div>
  </div>
</template>
<style scoped>
img {
  border-radius:7px;
}
span{
  font-size: 1.5rem;
}
.brand{
   background-image: linear-gradient(45deg, #e4b09b, #d117b2);
  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-text-fill-color: transparent; 
}
</style>
