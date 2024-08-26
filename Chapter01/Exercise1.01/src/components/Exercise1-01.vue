// src/components/Exercise1-01.vue

<template>
<Header/>
  <div>
    <h1 :style="{ color }">My first component!!</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header  from "./Header.vue";


const color = ref('blue') 
</script>


<style>
h1 {
  font-family: 'Avenir', Helvetica, Arial,
    sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>