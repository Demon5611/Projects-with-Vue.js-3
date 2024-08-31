<template>
  <div>
    <h1>Basket</h1>
    
    <div>totalItem : {{ totalItem }}</div>
    <div>totalCost : {{ formatCurrency(totalCost) }}</div>
    <ul>
      <li v-for="index in 5" :key="index">
        <button id="add" @click="addToCart(index)">
          Add item {{ formatCurrency(index) }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue"; // позволяет отслеживать изменения в переменных totalItem и totalCost.
const totalItem = ref(0);
const totalCost = ref(0);


const addToCart = (index) => {
  totalItem.value += 1; //  Когда вы пишете totalItem.value , вы обращаетесь к значению внутри объекта ref и изменяете его.
  // - Если бы вы просто написали totalItem , вы пытались бы изменить сам объект ref, а не его значение, 
  totalCost.value += index;
};
const formatCurrency=(val) => {
  return `$${val.toFixed(2)}`;
}

</script>

<style scoped>
ul {
  padding-left: 0;
}

li {
  display: block;
  list-style: none;
  margin-block-start: 10px;
}

button {
  display: inline-block;
  background: rgb(235, 50, 50);
  border-radius: 10px;
  font-size: 10px;
  color: white;
  padding: 5px 10px;
  text-decoration: none;
}
</style>
