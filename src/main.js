import { createApp } from 'vue';
import App from './App.vue';
import HomePage from './pages/HomePage.vue';
import ServicePage from './pages/ServicePage.vue';
import InfoPage from './pages/InfoPage.vue'; // Importa la página InfoPage

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/service', component: ServicePage },
    { path: '/conocenos', component: InfoPage }, // Agrega la ruta para InfoPage
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
