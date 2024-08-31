
<template>
  <div>
    <div v-for="(value, key) in information" :key="key" >
      {{ key }} : {{ value.toString() }}
 
    </div>
    <button id="my-button" @click="myMethod">My Method</button>
  </div>
</template>

<script setup>
const information = {
  title: "My list component information",
  subtitle: "Vue JS basics",
  items: ["Looping", "Data", "Methods"],
};

const myMethod = () => {
  console.log("My method");
}
</script>
