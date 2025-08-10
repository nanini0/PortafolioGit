<template>
    <body>
  <!-- Sección Principal -->
  <div class="contenedor-p" style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; display: flex; flex-direction: column; gap: 30px;">
    
    <!-- Bloque Superior: Saludo + Descripción -->
    <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 40px;">
      <!-- Texto -->
      <div style="flex: 1; min-width: 300px;">
        <h1 style="font-size: clamp(28px, 4vw, 42px); font-weight: 800; margin-bottom: 20px; color: black;">
           ¡Hola! Soy Álvaro Robles.
        </h1>
        <p class="descripcion" style="font-size: 18px; line-height: 1.6; color: black">
          Soy un apasionado desarrollador con formación como Analista Programador y una clara visión hacia el desarrollo Full Stack. Mi fascinación por la tecnología no se limita solo a escribir código, sino a comprender cómo cada línea se integra en sistemas que resuelven problemas reales.
        </p>
      </div>
      
      <!-- Imagen  -->
      <div style="flex: 1; min-width: 300px; display: flex; justify-content: center;">
        <img 
          :src="perfil" 
          alt="Foto de Álvaro Robles"
          style="max-width: 350px; border-radius: 50%; "
        >
      </div>
    </div>
    <!--segunda seccion-->
    <di class="contenedor-s " style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; display: flex; flex-direction: column; gap: 30px;">
<div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 40px;">
    <!-- Imagen  -->
      <div style="flex: 1; min-width: 300px; display: flex; justify-content: center;">
        <img 
          :src="transparente1" 
          alt="Foto de Álvaro Robles"
          style="max-width: 500px; border-radius: 50%; "
        >
      </div>
      <!-- Texto -->
      <div style="flex: 1; min-width: 300px;">
        <h1 style="font-size: clamp(28px, 4vw, 42px); font-weight: 800; margin-bottom: 20px; color: white;">
           Mi enfoque 
        </h1>
        <p class="descripcion2" style="font-size: 18px;  margin: 20px; line-height: 1.6; color: black">
Vue.js + Django: Para construir aplicaciones web escalables, donde combino la elegancia de Vue en el frontend con la solidez de Django en el backend.
        </p>
        <p class="descripcion2" style="font-size: 18px; line-height: 1.6; margin: 20px; color:white" >
React + Node.js: Ideal para proyectos que demandan interfaces dinámicas y alto rendimiento, aprovechando el ecosistema de JavaScript.
        </p>
        <p class="descripcion2" style="font-size: 18px; margin: 20px; line-height: 1.6; color: black">
Python + Flask: Cuando necesito desarrollar soluciones rápidas y minimalistas, sin sacrificar funcionalidad.
        </p>
      </div>
      
      
    </div>
        

    </di>

   
    
    
  </div>
</body>
</template>

<script setup>
import perfil from '../imagenes/iconos-tech/fotomia.png'
import transparente1 from '../imagenes/iconos-tech/transparente.png'
</script>

<style  scoped>



</style>