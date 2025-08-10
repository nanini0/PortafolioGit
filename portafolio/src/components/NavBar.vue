<template>
<nav class="nav">
    <div class="nav-container">
      <img :src="logo" class="nav-logo"></img>
      <ul class="menu">
        <li class="menu-item"><a href="#"><router-link class="nav-link" active-class="active" to="/">Inicio</router-link></a></li>
        <li class="menu-item"><a href="#"><router-link class="nav-link" active-class="active" to="/about">Sobre Mi</router-link></a></li>
        <li class="menu-item"><a href="#"><router-link class="nav-link" active-class="active" to="/Project">Projectos</router-link></a></li>
        <li class="menu-item"><a href="#"><router-link class="nav-link" active-class="active" to="/contacto">Contacto</router-link></a></li>
      </ul>
    </div>
</nav>
      
</template>

<script setup>
 import logo from '../imagenes/icono-nav/166645134.jpg'
</script>

<style  scoped>

.nav-logo {
    height: 60px; /* Ajusta según necesites */
    width: auto;
}
.nav-logo {
    margin-left: 20px;
}
.nav-logo {
    width: 50px;
    height: 50px;
    border-radius: 50%; /* Para hacerla circular */
    object-fit: cover;
}
.nav {
  background: linear-gradient(135deg, #8d9c9e 0%, #2d91c0 100%);
  position: fixed;
  top: 0;          /* Lo pega a la parte superior */
  left: 0;         /* Lo pega al borde izquierdo */
  width: 100%;     /* Ocupa todo el ancho */
  z-index: 1000;
  padding: 1rem 2rem;
 
}

.nav-container {
  display: flex;
  justify-content: space-between; /* Separa logo y menú */
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.menu-item a {
  color: #EFF6FF; /* Azul claro para texto */
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
}

.menu-item a:hover {
  background-color: #3B82F6; /* Azul más claro al hover */
  color: white;
}

/* Efecto para el ítem activo */
.menu-item a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: #3B82F6;
  transition: width 0.3s ease;
}

.menu-item a:hover::after {
  width: 70%;
}


</style>