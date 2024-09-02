<template>
  <div class="container">
    <div>
      <span>Date is: {{ date }}</span>
      <button @click="upDateDate">Update date</button>
    </div>
    <h3>Automatic update date:{{ autoUpdateDate }}</h3>
    <div>Автообновление без перерендера: {{ formattedTime }}</div>
    <br />
   
    <h1>Async fetch</h1>
    <button @click="fetchAdvice">
      {{ loading ? "Loading..." : "Learn something" }}
    </button>
    <blockquote v-if="advice">{{ advice }}</blockquote>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

const loading = ref(false);
const advice = ref("No advice yet");

const startTime = new Date();
let timerId = null;
const formattedTime = ref(startTime.toLocaleTimeString());

const updateTimer = () => {
  const curentTime = new Date(
    startTime.getTime() + Date.now() - startTime.getTime() // вычисляем разницу между текущей датой и начальной
  );
  formattedTime.value = curentTime.toLocaleTimeString(); // делаем из текущей даты строку в формате чч:мм:сс
};

onMounted(() => {
  timerId = setInterval(updateTimer, 1000);
});
onBeforeUnmount(() => {
  clearInterval(timerId); // onBeforeUnmount для очистки интервала при размонтировании компонента, чтобы избежать утечек памяти.
});

async function fetchAdvice() {
  loading.value = true;
  try {
    const response = await axios.get("https://api.adviceslip.com/advice");
    advice.value = response.data.slip ? response.data.slip.advice : "No advice yet"; // Получаем рекомендацию
  } catch (error) {
    console.error("Error fetching advice:", error);
    advice.value = "Failed to fetch advice.";
  } finally {

    loading.value = false; // Заканчиваем загрузку. полезно в сценариях, где loading используется для контроля отображения индикатора загрузки или блокировки пользовательского интерфейса во время выполнения асинхронной операции.
  }
}
onMounted(fetchAdvice); // хук для вызова функции fetchAdvice при монтировании компонента, что обеспечивает загрузку данных сразу после рендера компонента.

const date = ref(new Date().toLocaleString());
const upDateDate = () => {
  date.value = new Date().toLocaleString();
};

const autoUpdateDate = ref(new Date().toLocaleString());
setInterval(() => {
  autoUpdateDate.value = new Date().toLocaleString();
}, 1000);


</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

blockquote {
  position: relative;
  width: 100%;
  margin: 50px auto;
  padding: 1.2em 30px 1.2em 30px;
  background: #ededed;
  border-left: 8px solid #78c0a8;
  font-size: 24px;
  color: #555555;
  line-height: 1.6;
}
</style>
