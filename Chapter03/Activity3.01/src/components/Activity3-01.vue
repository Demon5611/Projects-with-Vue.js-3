<!-- Activity3-01.vue -->

<template>
  <div class="container">
    <h1>Activity 3.01</h1>
    <div>
      <input 
        type="text" 
        placeholder="First name" 
        id="fname"
        v-model="fname" />
      <input 
        type="text" 
        id="lname"
        placeholder="Last name" 
        v-model="lname" />
    </div>
    <div>
      <p>Full name: {{ fullName }}</p>
      <p>Counter: {{ counter }}</p>
      <button @click="increment">Increment Counter</button>
    </div>
  </div>
</template>


<script setup>
import { computed, ref } from 'vue';
import { useCounterStore } from '../stores/counter.js';

const fname = ref('');
const lname = ref('');
const fullName = computed(() => `${fname.value} ${lname.value}`);

// Используем Pinia Store
const counterStore = useCounterStore(); 
const counter = computed(() => counterStore.counter); // counter берется из хранилища Pinia
const increment = () => counterStore.increment(); // создаем функцию increment, которая вызывает метод increment из Pinia-хранилища (counterStore). Она не вызывает сама себя, а просто ссылается на метод increment внутри хранилища.

</script>
<style>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
}
input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}

</style>
