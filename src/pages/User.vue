<template>
  <div class="user-profile">
    <div class="user-avatar">
      <img :src="user.avatar" alt="Avatar de Usuario" @click="openImageUploader" />
      <input type="file" ref="imageInput" style="display: none" @change="updateAvatar" accept="image/*" />
      <button @click="openImageUploader">Actualizar Imagen</button>
    </div>
    <div class="user-info">
      <h2 style="color: #E61C5D;">{{ user.name }}</h2>
      <p style="color: #333;">Correo Electrónico: {{ user.email }}</p>
      <p style="color: #333;">Fecha de Registro: {{ user.registrationDate }}</p>
      <!-- Otros detalles del usuario aquí -->
      <button @click="editProfile">Editar Perfil</button>
    </div>
    <div class="user-cards">
      <h3 style="color: #E61C5D;">Mis Tarjetas</h3>
      <!-- Lista de tarjetas del usuario -->
      <ul>
        <li v-for="(card, index) in user.cards" :key="index">
          {{ card.number }}
        </li>
      </ul>
      <button @click="addCard">Agregar Tarjeta</button>
    </div>

    <!-- Formulario de edición de perfil -->
    <transition name="fade">
      <div v-if="showEditProfileForm" class="edit-profile-form">
        <h3 style="color: #E61C5D;">Editar Perfil</h3>
        <input type="text" v-model="editedEmail" placeholder="Nuevo Correo Electrónico" />
        <button @click="saveEditedEmail">Guardar Cambios</button>
        <button class="cancel-button" @click="showEditProfileForm = false">Cancelar</button>
      </div>
    </transition>

    <!-- Formulario de agregar tarjeta -->
    <transition name="fade">
      <div v-if="showAddCardForm" class="add-card-form">
        <h3 style="color: #E61C5D;">Agregar Tarjeta</h3>
        <input type="text" v-model="newCardNumber" placeholder="Número de Tarjeta" />
        <button @click="saveNewCard">Agregar</button>
        <button class="cancel-button" @click="showAddCardForm = false">Cancelar</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Nombre del Usuario',
        email: 'correo@example.com',
        registrationDate: '01/01/2023',
        avatar: 'url_de_la_imagen_del_avatar',
        cards: [],
        // Otros datos del usuario
      },
      showEditProfileForm: false,
      editedEmail: '',
      showAddCardForm: false,
      newCardNumber: '',
    };
  },
  methods: {
    openImageUploader() {
      this.$refs.imageInput.click();
    },
    updateAvatar(event) {
      const file = event.target.files[0];
      if (file) {
        // Aquí puedes implementar la lógica para cargar y actualizar la imagen del avatar.
        // Puedes usar librerías como Axios para enviar la imagen al servidor.
      }
    },
    editProfile() {
      this.showEditProfileForm = true;
      this.editedEmail = this.user.email;
    },
    saveEditedEmail() {
      this.user.email = this.editedEmail;
      this.showEditProfileForm = false;
    },
    addCard() {
      this.showAddCardForm = true;
    },
    saveNewCard() {
      const newCard = {
        number: this.newCardNumber,
      };
      this.user.cards.push(newCard);
      this.showAddCardForm = false;
      this.newCardNumber = '';
    },
  },
};
</script>

<style scoped>
.user-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.user-avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
}

.user-info {
  flex: 1;
  text-align: center;
}

.user-cards {
  margin-top: 20px;
  text-align: center;
}

button {
  background-color: #E61C5D;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  margin-top: 10px;
}

/* Agrega estilos adicionales según tus necesidades */
</style>
