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
          question: "¿Que Proovedores tienen?",
          answer: "tenemos una extensa lista de proovedores, puedes elegir el que quieras."
        },
        {
          question: "¿Puedo Cancelar algun proovedor?",
          answer: "Claro, puedes contactarte con nuestro equipo para mas información."
        },
        {
          question: "¿Como puedo elegir el mejor proovedor?",
          answer: "En la seccion de servicios puedes filtrar y buscar segun tus necesidades."
        },
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
