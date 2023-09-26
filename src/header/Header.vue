<template>
  <header class="main-header" style="background-color: #FFFFFF;">
    <div class="logo">
      <img src="logo-small.png" alt="Logo" class="small-logo">
      <h1 style="color: #E61C5D;">Nimbus</h1>
    </div>
    <nav class="nav-links">
      <ul>
        <li><router-link to="/" class="nav-link">Inicio</router-link></li>
        <!-- Agregamos un enlace a InfoPages con el uso de router-link -->
        <li><router-link to="/infopages" class="nav-link">Conócenos</router-link></li>
        <li><router-link to="/service" class="nav-link">Servicios</router-link></li>
      </ul>
    </nav>
    <div class="actions">
      <button class="rounded-button" style="background-color: #E61C5D; color: white;" @click="toggleLoginBox">Login</button>
      <button class="rounded-button" style="background-color: #E61C5D; color: white;">Register</button>
    </div>
    <!-- Recuadro de Login con Transición -->
    <transition name="fade">
      <div v-if="showLoginBox" class="login-box">
        <button class="close-button" @click="closeLoginBox">×</button> <!-- Botón "X" para cerrar -->
        <h2>Login</h2>
        <input type="text" placeholder="Correo" class="login-input">
        <input type="password" placeholder="Contraseña" class="login-input">
        <button class="login-button" @click="login">Ir</button> <!-- Botón "Ir" para iniciar sesión -->
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      linkColor: null,
      showLoginBox: false, // Variable para controlar la visibilidad del recuadro de login
    };
  },
  methods: {
    hoverLink(link) {
      this.linkColor = link;
    },
    leaveLink(link) {
      this.linkColor = null;
    },
    toggleLoginBox() {
      this.showLoginBox = !this.showLoginBox; // Cambia la visibilidad al hacer clic en "Login"
    },
    closeLoginBox() {
      this.showLoginBox = false; // Cierra el recuadro de login al hacer clic en la "X"
    },
    login() {
      // Aquí puedes agregar la lógica de inicio de sesión
      // Por ejemplo, validar el correo y contraseña, y luego redirigir a ServicePage.vue
      // this.$router.push({ name: 'ServicePage' });
      // Redirigir al usuario a User.vue
      this.$router.push({ path: '/user' });
    },
  },
};
</script>

<style scoped>
/* Estilo para el botón "X" */
.close-button {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: #E61C5D;
}
/* Estilos básicos del encabezado */
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: grey;
}

.logo {
  display: flex;
  align-items: center;
}

.small-logo {
  height: 32px;
  width: 32px;
  margin-right: 8px;
}

.nav-links ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  color: black;
  text-decoration: none;
  padding: 0 15px;
}

.nav-link:hover {
  color: #333;  /* Oscurece el color al pasar el ratón */
}

.rounded-button {
  padding: 8px 16px;
  border-radius: 12px;
  background-color: blue;
  color: white;
}

/* Estilo para el recuadro de login con animación de desvanecimiento */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.login-box {
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  position: absolute;
  top: 50px;
  right: 20px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 100; /* Para que aparezca por encima del contenido */
}
.login-input {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.login-button {
  width: 100%;
  padding: 8px;
  background-color: #E61C5D;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
