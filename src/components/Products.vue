<template>
  <div class="products-container">
    <h1 style="color: #E61C5D;">Productos</h1>
    <button @click="filterByRating" :class="{ 'highlighted': filterActive }" class="rounded-button">Filtrar</button>
    <div class="product-cards">
      <div v-for="(product, index) in products" :key="index" class="product-card" :class="{ 'highlighted': product.highlighted }">
        <img :src="product.image" alt="Producto Imagen" />
        <p style="color: #000;">Calificación: {{ product.rating }}/5</p>
        <p class="description">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<!-- Resto del código sin cambios -->

<script>
export default {
  name: 'Products',
  data() {
    return {
      products: [
        { image: 'url_a_imagen_1', rating: 4.5, description: 'Descripción del Producto 1', highlighted: false },
        { image: 'url_a_imagen_2', rating: 3.8, description: 'Descripción del Producto 2', highlighted: false },
        { image: 'url_a_imagen_3', rating: 5.0, description: 'Descripción del Producto 3', highlighted: false },
        { image: 'url_a_imagen_4', rating: 4.2, description: 'Descripción del Producto 4', highlighted: false }
      ],
      filterActive: false
    };
  },
  methods: {
    filterByRating() {
      const maxRating = Math.max(...this.products.map(product => product.rating));
      this.products.forEach(product => {
        product.highlighted = product.rating === maxRating;
      });
      this.filterActive = true;
    }
  }
};
</script>

<style scoped>
.products-container {
  background-color: #f5f5f5;
  padding: 20px;
  margin: 16px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.product-card {
  flex: 0 0 calc(25% - 16px);
  margin: 16px;
  text-align: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out;
  background-color: white;
}

.product-card img {
  max-width: 100%;
  height: auto;
}

.product-card.highlighted {
  transform: scale(1.1);
  background-color: #007BFF;
  color: white;
  border-color: transparent;
}

.rounded-button {
  background-color: #E61C5D;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  margin: 8px;
  transition: background-color 0.3s ease-in-out;
}

.rounded-button:hover {
  background-color: #D41453;
}

.description {
  margin-top: 8px;
  font-size: 0.9em;
  color: #666;
}

/* Diseño Responsivo */
@media (max-width: 768px) {
  .product-card {
    flex: 0 0 calc(50% - 16px);
  }
}
</style>
