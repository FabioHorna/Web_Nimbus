<template>
  <div class="team">
    <h1 class="team-title">Stratusphere Team</h1>
    <div class="team-members">
      <!-- Aquí puedes agregar miembros del equipo -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team',
};
</script>

<script>
export default {
  name: 'Team',
};
</script>

<style scoped>
.team {
  text-align: center;
}

.team-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.team-members {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.team-member {
  text-align: center;
}

.team-member-image {
  max-width: 150px;
  border-radius: 50%;
}

.team-member-name {
  margin-top: 10px;
  font-size: 18px;
}
</style>
