<template>
    <div>{{ formalName }}</div>
    <input v-model="name" />
</template>
<script setup>
import { ref, computed } from "vue";

const name = ref("");
const title = "Mr.";
const surname = "Smith";

const formalName = computed(() => {
  return `${title} ${name.value} ${surname}`;
});
</script>