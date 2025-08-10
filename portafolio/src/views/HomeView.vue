<template>
   <body>
   <div class="contenedor" style="display: flex; align-items: center; padding: 100px; gap: 20px;margin-bottom: 100px;">
     
      <div class="Texto-Inicio">
         <p style=" font-weight: bold; font-size: 20px; color: color-mix(in hsl, #87CEEB 70%, #E0F7FA 30%);" class="nombre">HOLA,SOY ALVARO R.</p>
         <h1 style="font-size: 65px; font-weight: bold; font-family: Georgia, serif;">  Soy un Desarrollador</h1>
         <p >Soy un desarrollador, me gusta tanto el Front como el Back. </p>
         <p >....Tambien me gusta hacer contenido sobre diversos temas ya sea Juegos o temas de tegnologias.</p>
      </div>
   </div>
   <div class="img-tech" style="display: flex; align-items: center;  " >
      <img  :src="py"></img>
      <img  :src="js"></img>
      <img  :src="java"></img>
      <img  :src="My"></img>
      <img  :src="HTML"></img>
   </div>

   </body>
</template>

<script setup>
import py from '../imagenes/iconos-tech/piton.png'
import js from '../imagenes/iconos-tech/js.png'
import java from '../imagenes/iconos-tech/java.png'
import ejemplo2 from '../imagenes/ejemplo2.png'
import My from '../imagenes/iconos-tech/mysql.png'
import HTML from '../imagenes/iconos-tech/html5.png'
</script>

<style  scoped>
body{
   min-height: 100vh;
   margin: 0;
  padding: 0;
   background: linear-gradient(135deg, #8d9c9e 0%, #2d91c0 100%);
    font-family: 'Arial', sans-serif;
    padding: 2rem;
}

.Texto-Inicio p {
   font-size: 26px;
}
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.contenedor {
  flex: 1; /* Ocupa todo el espacio disponible */
}

.footer-icons {
  width: 100%;
  padding: 20px 0;
  background: rgba(255, 255, 255, 0.9); /* Fondo blanco semitransparente */
  border-top: 1px solid #eee; /* Borde superior sutil */
}

.img-tech {
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  gap: 30px; /* Espacio entre iconos */
  flex-wrap: wrap; /* Permite que los iconos se envuelvan en pantallas pequeñas */
}

.img-tech img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.img-tech img:hover {
  transform: scale(1.2); /* Efecto hover */
}

@media (max-width: 768px) {
  .img-tech {
    gap: 15px;
    padding: 10px 0;
  }
  
  .contenedor {
    flex-direction: column;
    padding: 20px;
  }
}
</style>