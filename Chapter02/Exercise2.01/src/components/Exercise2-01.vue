<template>
  <input type="text" v-model="firstName" placeholder="First Name"/>
  <input type="text" v-model="lastName" placeholder="Last Name"/>
  <h3>Full Name: {{ fullName }}</h3>
  <div>
    Adjusted Count: {{ myComputedDataProp }}
    <button @click="increaceCount">Increace Count</button>
  </div>
</template>

<script setup>

import { ref, computed, onMounted, watch} from 'vue';

const firstName = ref('');
const lastName = ref(0);
const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`;
});
// get set работают как работа с состоянием и обновляет его
const count = ref(0);
const myComputedDataProp = computed({
  get: () => count.value,
  set: (newCount) => {
    count.value = newCount;
  },
});

function increaceCount() {
  myComputedDataProp.value += 1;
  
}
// Загрузка сохраненного значения из localStorage при монтировании
onMounted(() => {
  const saveCount = localStorage.getItem('count');
  if (saveCount !== null) {
    count.value= Number(saveCount);
  }
});
// Сохранение значения в localStorage при изменении
watch(count, (newValue) => {
  localStorage.setItem('count', newValue);
}, {inmediate: true});

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
.output {
  font-size: 16px;
}
</style>
