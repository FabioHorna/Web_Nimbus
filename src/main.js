import { createApp } from 'vue';
import App from './App.vue';
import HomePage from './pages/HomePage.vue';
import ServicePage from './pages/ServicePage.vue';
import InfoPage from './pages/InfoPage.vue'; // Asegúrate de importar InfoPage correctamente
import AboutUs from './pages/AboutUs.vue'; // Importa la página AboutUs
import UserPage from './pages/User.vue'; // Importa la página User.vue

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/service', component: ServicePage },
    { path: '/infopages', component: InfoPage },
    { path: '/aboutus', component: AboutUs }, // Añade la ruta a AboutUs
    { path: '/user', component: UserPage }, // Añade la ruta a UserPage
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
