<template>
  <div class="team">
    <h1 class="team-title">Stratusphere Team</h1>
    <div class="team-members">
      <div
        class="team-member"
        v-for="(member, index) in teamMembers"
        :key="index"
        @mouseover="animateIn(member)"
        @mouseleave="animateOut(member)"
      >
        <transition name="fade">
          <img
            :src="member.image"
            alt="Team Member"
            class="team-member-image"
            :class="{ 'hovered': member.hovered }"
          />
        </transition>
        <div class="team-member-info">
          <p class="team-member-name">
            {{ member.name }}
          </p>
          <p class="team-member-code">
            {{ member.code }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team',
  data() {
    return {
      teamMembers: [
        {
          name: 'Fabio Ernesto Horna Silva',
          code: '(u202020229)',
          image: 'URL de la imagen de Fabio',
          hovered: false,
        },
        {
          name: 'Christian Jose Zeta Valenzuela',
          code: '(u202011688)',
          image: 'URL de la imagen de Fabio',
          hovered: false,
        },
        {
          name: 'Claudio Jesús Moreno Rosales',
          code: '(u20191e800)',
          image: 'URL de la imagen de Fabio',
          hovered: false,
        },
        {
          name: 'Farid Hinostroza Mavila',
          code: '(u202014468)',
          image: 'URL de la imagen de Fabio',
          hovered: false,
        },
        {
          name: 'Diego Alejandro Portales Ortiz',
          code: '(u202123501)',
          image: 'URL de la imagen de Fabio',
          hovered: false,
        },// ... otros miembros del equipo ...
      ],
    };
  },
  methods: {
    animateIn(member) {
      member.hovered = true;
    },
    animateOut(member) {
      member.hovered = false;
    },
  },
};
</script>

<style scoped>
.team {
  text-align: center;
  padding: 20px;
}

.team-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #E61C5D; /* Color del título */
}

.team-members {
  display: flex;
  flex-wrap: wrap; /* Permite que los miembros del equipo se envuelvan en múltiples filas en pantallas pequeñas */
  justify-content: center;
  gap: 20px;
}

.team-member {
  text-align: center;
  transition: transform 0.3s ease, opacity 0.3s ease; /* Animación de transformación y opacidad */
  border: 1px solid #ccc;
  padding: 15px;
  background-color: #F5F5F5; /* Color de fondo del miembro del equipo */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(33.33% - 20px); /* 3 miembros del equipo por fila en pantallas grandes */
}

/* Media query para pantallas medianas (ajusta el diseño para 2 miembros por fila) */
@media (max-width: 768px) {
  .team-member {
    width: calc(50% - 20px); /* 2 miembros del equipo por fila en pantallas medianas */
  }
}

/* Media query para pantallas pequeñas (ajusta el diseño para 1 miembro por fila) */
@media (max-width: 480px) {
  .team-member {
    width: 100%; /* 1 miembro del equipo por fila en pantallas pequeñas */
  }
}

.team-member-image {
  max-width: 150px;
  border-radius: 50%;
}

.team-member-info {
  margin-top: 10px;
}

.team-member-name {
  font-size: 18px;
  color: #333; /* Color del nombre del miembro */
}

.team-member-code {
  font-size: 16px;
  color: #E61C5D; /* Color del código del miembro */
}

.hovered {
  transform: scale(1.1); /* Aumenta ligeramente el tamaño al pasar el mouse por encima */
  opacity: 0.8; /* Reduce la opacidad al pasar el mouse por encima */
}

.animated-letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
