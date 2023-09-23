<template>
  <div id="app">
    <Header />
    <Card />
    <Proovedor />
    <Products />
    <Users />
    <Footer />
  </div>
</template>

<script>
import Header from './header/Header.vue';
import Card from './components/Card.vue';
import Proovedor from './components/Proovedor.vue';
import Products from './components/Products.vue';
import Users from './components/Users.vue';
import Footer from './footer/Footer.vue';

export default {
  components: {
    Header,
    Card,
    Proovedor,
    Products,
    Users,
    Footer
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #ededed;
  padding: 20px;
}
</style>
