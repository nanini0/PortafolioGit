<template>
   <body>
    <h1 style=" padding: 100px; font-size: 40px; font-weight: bold;  ">Contactame.</h1>
    <div style="display:flex; place-items: unset;">
   <div class="conoceme">
      <h1 class="animated-title">
        <span class="arrow" style="font-size: 20px; margin: 5px;">→</span> 
    <button @click="descargarCV"><a href="/CVAlvarorobles.pdf" download="CVAlvarorobles.pdf" class="btn-download">
      Descargar CV
    </a></button> 
      </h1>
    </div>
    </div>
      <div class="container" style="  padding: 10px; display: flex;  gap: 20px;">
        <div>
          <h1> Correo</h1> <br></br>
          <p > Para cualquier oportunidad profesional o colaboración, pueden contactarme a través de mi correo electrónico: <br></br><br></br>
            📑alvaro.robles15081999@gmail.com<br></br><br>
              ¡Estaré encantado de conectar!</p>
        </div>
        <div id="wsp" >
          <h1 >Telefono</h1> <br></br>
          <p > 📞 Para contacto directo, llámame o escríbeme al:
                  <a href="https://wa.me/954714573" style="font-weight: bold; color: #25D366;"> +56 9 5471 4573</a> (WhatsApp disponible).</p>
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
.arrow {
  display: inline-block;
  animation: bounce 0.3s infinite alternate;
}

.descarga :hover{
  color: white;
}

@keyframes bounce {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(5px);
  }
}

 .conoceme{
   border: solid black;
   display: flex; 
   align-items: center;
   width: 190px;
   padding: 5px;
}
.conoceme :hover{
  color: white;
}
        body {
            font-family: 'Arial', sans-serif;
            min-height: 100vh;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #8d9c9e 0%, #2d91c0 100%);
            padding: 2rem;
        }

        .container {
            display: flex;
            gap: 20px; /* Espacio entre elementos */
            flex-wrap: wrap; /* Para responsive */
        }

        .container h1 {
            font-family: Georgia, serif;
            text-align: center;
            padding-top: 20px;
            width: 100%; /* Ocupa todo el ancho */
        }

        .container div {
            flex: 1;
            min-width: 250px; /* Ancho mínimo para responsive */
            padding: 20px;
            height: 400px;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
            text-align: initial;
            background: linear-gradient(135deg, #8d9c9e 0%, #2d91c0 100%);
            transition: all 0.3s ease; /* Transición suave */
            border-radius: 8px; /* Bordes redondeados */
        }

        .container p {
            font-family: Georgia, serif;
            text-align: justify;
            hyphens: auto;
            margin: 0;
        }

        /* Efecto hover CORREGIDO (sin opacity en el texto) */
        .container div:hover {
            background-color: rgba(31, 23, 23, 0.8); /* Fondo oscuro con transparencia */
            color: rgb(187, 184, 197);
            transform: translateY(-5px); /* Efecto de elevación */
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        /* Mantener el texto opaco */
        .container div:hover p {
            opacity: 1; /* Texto siempre al 100% */
        }



</style>