<template>
  <footer class="main-footer">
    <div class="company-name">
      <h2>Stratusphere</h2>
    </div>
    <div class="menu">
      <ul>
        <!-- Cambia el enlace a AboutUs.vue -->
        <li><router-link to="/aboutus" class="footer-link">About</router-link></li>
        <li><a href="#" class="footer-link">Company</a></li>
        <li><a href="#" class="footer-link">Support</a></li>
      </ul>
    </div>
    <div class="subscription">
      <input
        type="email"
        placeholder="Enter your email"
        class="email-input"
        v-model="email"
      />
      <button class="rounded-button" @click="subscribe">Subscribe</button>
    </div>
    <!-- Notificación de éxito -->
    <div class="success-notification" v-if="showSuccess">
      Success! You are subscribed.
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      email: '',
      showSuccess: false, // Variable para controlar la visibilidad de la notificación
    };
  },
  methods: {
    subscribe() {
      // Aquí puedes agregar la lógica para suscribir al usuario
      // Por ejemplo, validar el correo y realizar la suscripción
      // Luego, muestra la notificación de éxito
      this.showSuccess = true;
      // Limpia el campo de correo después de la suscripción si es necesario
      this.email = '';
      // Puedes ajustar la duración de la notificación y ocultarla después de cierto tiempo
      setTimeout(() => {
        this.showSuccess = false;
      }, 3000); // Esta notificación se ocultará después de 3 segundos
    },
  },
};
</script>
<style scoped>
.main-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5; /* Cambio de color de fondo */
  padding: 20px;
  color: #333; /* Cambio de color del texto */
  border-top: 2px solid #555; /* Agregado un borde superior */
  transition: background-color 0.3s ease-in-out; /* Animación para el cambio de color de fondo */
}

.main-footer:hover {
  background-color: #555; /* Cambio de color de fondo al pasar el mouse */
}

.company-name h2 {
  margin: 0;
}

.menu ul {
  display: flex;
  gap: 15px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-link {
  color: #333; /* Cambio de color del enlace */
  text-decoration: none;
  transition: color 0.3s ease-in-out; /* Animación para el cambio de color del enlace al pasar el mouse */
}

.footer-link:hover {
  color: #555; /* Cambio de color del enlace al pasar el mouse */
}

.subscription {
  display: flex;
  gap: 10px;
}

.email-input {
  padding: 8px;
  border-radius: 12px;
  transition: border-color 0.3s ease-in-out; /* Animación para el cambio de color del borde al pasar el mouse */
}

.email-input:hover {
  border-color: #555; /* Cambio de color del borde al pasar el mouse */
}

.rounded-button {
  padding: 8px 16px;
  border-radius: 12px;
  background-color: #E61C5D; /* Cambio de color del botón */
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out; /* Animación para el cambio de color del botón al pasar el mouse */
}

.rounded-button:hover {
  background-color: #D41453; /* Cambio de color del botón al pasar el mouse */
}

/* Diseño Responsivo */
@media (max-width: 768px) {
  .main-footer {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  
  .menu ul {
    flex-direction: column;
    gap: 10px;
  }
  
  .subscription {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }
}
</style>
