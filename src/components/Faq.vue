<template>
  <div class="faq">
    <h2>Preguntas Frecuentes</h2>
    <div class="faq-item" v-for="(item, index) in faqItems" :key="index">
      <h3>{{ item.question }}</h3>
      <p>{{ item.answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqItems: [
        {
          question: "¿Pregunta 1?",
          answer: "Respuesta a la pregunta 1."
        },
        {
          question: "¿Pregunta 2?",
          answer: "Respuesta a la pregunta 2."
        },
        {
          question: "¿Pregunta 3?",
          answer: "Respuesta a la pregunta 3."
        },
        // Agrega más preguntas y respuestas según sea necesario
      ]
    };
  }
};
</script>

<style scoped>
.faq {
  max-width: 800px;
  margin: 0 auto;
}

.faq h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.faq-item {
  margin-bottom: 20px;
}

.faq-item h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.faq-item p {
  font-size: 16px;
}
</style>
