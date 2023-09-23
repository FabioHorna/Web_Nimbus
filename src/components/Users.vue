<template>
  <div class="users-container">
    <h1>Usuarios y Reseñas</h1>
    <div class="slider">
      <button @click="previousPage" class="rounded-button previous-button">&lt;</button>
      <div class="usuario-cards">
        <div
          v-for="(usuario, index) in visibleUsuarios"
          :key="index"
          class="usuario-card"
          :class="{ 'central': index === 1, 'side': index === 0 || index === 2 }"
        >
          <div class="usuario-content">
            <img :src="usuario.image" alt="Usuario Image" />
            <p :class="{ 'resena-central': index === 1, 'resena-oscurecida': index !== 1 }">{{ usuario.review }}</p>
          </div>
        </div>
      </div>
      <button @click="nextPage" class="rounded-button next-button">&gt;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data() {
    return {
      usuarios: [
        { name: 'Usuario 1', image: 'url_a_imagen_1', review: 'Reseña 1' },
        { name: 'Usuario 2', image: 'url_a_imagen_2', review: 'Reseña 2' },
        { name: 'Usuario 3', image: 'url_a_imagen_3', review: 'Reseña 3' },
        { name: 'Usuario 4', image: 'url_a_imagen_4', review: 'Reseña 4' },
        { name: 'Usuario 5', image: 'url_a_imagen_5', review: 'Reseña 5' },
        { name: 'Usuario 6', image: 'url_a_imagen_6', review: 'Reseña 6' }
      ],
      centralIndex: 1 // Índice del usuario central (empezamos en el segundo usuario)
    };
  },
  computed: {
    visibleUsuarios() {
      const usuariosToShow = [];
      for (let i = -1; i <= 1; i++) {
        const userIndex = (this.centralIndex + i + this.usuarios.length) % this.usuarios.length;
        usuariosToShow.push(this.usuarios[userIndex]);
      }
      return usuariosToShow;
    }
  },
  methods: {
    previousPage() {
      this.centralIndex = (this.centralIndex - 1 + this.usuarios.length) % this.usuarios.length;
    },
    nextPage() {
      this.centralIndex = (this.centralIndex + 1) % this.usuarios.length;
    }
  }
};
</script>

<style scoped>
.users-container {
  background-color: #f5f5f5; /* Cambio de color de fondo */
  padding: 20px;
  margin: 16px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.slider {
  display: flex;
  justify-content: center;
  align-items: center;
}

.usuario-cards {
  display: flex;
  overflow: hidden;
}

.usuario-card {
  flex: 0 0 auto;
  width: 300px;
  margin: 0 16px;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  background-color: white;
  border-radius: 12px; /* Redondea los bordes de las tarjetas */
}

.usuario-content {
  text-align: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  opacity: 0.5; /* Opacidad reducida para las tarjetas laterales */
}

.usuario-content.central {
  opacity: 1;
}

.resena-central {
  font-size: 1.2em;
  opacity: 1; /* Reseña del usuario central sin oscurecer */
}

.resena-oscurecida {
  opacity: 0.7; /* Reseñas de los usuarios laterales oscurecidas */
}

.previous-button,
.next-button {
  background-color: #E61C5D; /* Cambio de color de los botones */
  color: white;
  border: none;
  border-radius: 50%; /* Botones redondos */
  padding: 8px 12px; /* Ajusta el tamaño del botón */
  cursor: pointer;
  margin: 8px;
  font-size: 18px; /* Ajusta el tamaño de la fuente */
  transition: background-color 0.3s ease-in-out;
}

.previous-button:hover,
.next-button:hover {
  background-color: #D41453; /* Cambia el color al pasar el ratón */
}
</style>
