<template>
  <div class="home-page">
   
    <Card />
    <Proovedor />
    <Users />
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import Proovedor from '../components/Proovedor.vue';
import Users from '../components/Users.vue';

export default {
  components: {
    Card,
    Proovedor,
    Users,
  },
};
</script>

<style scoped>
.home-page {
  padding: 20px;
  text-align: center;
}
</style>
