<template>
  <div class="container">
    <h1>Method vs watchers vs computed props</h1>
    <div class="col">
      <input
        type="text"
        placeholder="Search method"
        v-model="input"
        @keyup="searchMethod"
      />
      <ul>
        <li v-for="(item, i) in methodFilterList" :key="i">{{ item }}</li>
      </ul>
    </div>
    <div class="col">
      <input type="text" placeholder="Search with computed" v-model="input2" />
      <ul>
        <li v-for="(item, i) in computedList" :key="i">{{ item }}</li>
      </ul>
    </div>
    <div class="col">
      <input type="text" placeholder="Search with watch" v-model="input3" />
      <ul>
        <li v-for="(item, i) in watchFilterList" :key="i">{{ item }}</li>
      </ul>
  </div>
</div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

// Shared
const frameworkList = [
  "Vue",
  "React",
  "Backbone",
  "Ember",
  "Knockout",
  "jQuery",
  "Angular",
];

// Method
const input = ref("");
const methodFilterList = ref(frameworkList);
const searchMethod = () => {
  methodFilterList.value = frameworkList.filter((item) =>
    item.toLowerCase().includes(input.value.toLowerCase())
  );
};

// Computed
const input2 = ref("");
const computedList = computed(() => {
  //  используем вычисляемое свойство, чтобы автоматически пересчитывать отфильтрованный список при изменении значения input2 в поле ввода.
  return frameworkList.filter((item) =>
    item.toLowerCase().includes(input2.value.toLowerCase())
  );
});
// Watch - для реактивного отслеживания изменений в определенных данных. В данном случае она используется для отслеживания изменений в input3. Каждый раз, когда значение input3 изменяется, вызывается функция, переданная вторым аргументом в watch.
const input3 = ref("");
const watchFilterList = ref([...frameworkList]); // переменная хранит фильтрованный список элементов. Изначально она содержит копию исходного списка frameworkList. Поскольку она объявлена с помощью ref, её изменения также реактивно отслеживаются Vue.
watch(input3, (newValue)=>{ // Внутри функции watch, используется метод массива .filter(), чтобы создать новый массив, содержащий только те элементы frameworkList, которые соответствуют критерию поиска. Критерий поиска - наличие подстроки newValue, преобразованной к нижнему регистру, в каждом элементе списка, который также преобразуется к нижнему регистру.
  watchFilterList.value= frameworkList.filter((item) => item.toLocaleLowerCase().includes(newValue.toLocaleLowerCase()));
});


</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.col {
  width: 33%;
  height: 100%;
  float: left;
}

input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}
</style>
