<script setup>
import NavBar from './components/NavBar.vue';




</script>

<template>
  
  <div>
    <NavBar/>
    <router-view></router-view>
    
  </div>
 
</template>

<style scoped>
  body{
   min-height: 100vh;
   background: linear-gradient(135deg, #8d9c9e 0%, #2d91c0 100%);
  margin-top: 60px; /* Mismo valor que la altura del navbar */
  min-height: calc(100vh - 60px); /* Ajuste para el alto total */
}
</style>
