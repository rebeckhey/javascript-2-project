<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <footerskincare/>
  </div>
</template>

<script>
import navbar from './components/navbar'
import footerskincare from './views/footer'
export default {
  components:{navbar, footerskincare}
}
</script>
<style>

</style>
