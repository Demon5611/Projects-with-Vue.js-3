<template>
  <div>
    <h1>Triggering Vue Methods</h1>
  <ul>
    <li v-for="index in 5" :key='index'>
      <button id="btn" @click="triger(index)">
        Triger me {{ index }}
      </button>
    </li>
  </ul>
  </div>
</template>

<script setup>

const triger = (n) => {
  alert(`${n} has been clicked`);
}

</script>

<style scoped>
ul {
  padding-left: 0;
}
li {
  display: block;
  list-style: none;
}

li ~ li {
  margin-top: 10px;
}

button {
  display: inline-block;
  background: #4fc08d;
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
</style>
