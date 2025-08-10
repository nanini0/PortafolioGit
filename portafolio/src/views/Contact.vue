<template>
   <body>
      <div class="container" style="padding: 100px;">
         <h1 style="font-size: 40px; font-weight: bold;">Contacto.</h1>
         <p>Ponte en contacto conmigo o envíame un correo electrónico directamente  alvaro.robles15091999@gmail.com</p>
         <div>
    <button @click="descargarCV"><a href="/CVAlvarorobles.pdf" download="CVAlvarorobles.pdf" class="btn-download">
      Descargar CV
    </a></button>
    </div>
   </div>
   
   </body>
</template>

<script>
import git from '../imagenes/iconos-tech/github.png'
export default {
  methods: {
    descargarCV() {
      const link = document.createElement('a');
      link.href = '/CVAlvarorobles.pdf';
      link.download = 'CVAlvarorobles.pdf'; // Nombre que tendrá el archivo al descargarse
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
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
</style>