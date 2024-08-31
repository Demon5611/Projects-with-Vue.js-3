<template>
  <div>
    <h1>Vue Lifecycle hooks</h1>
    <ul>
      <li v-for="item in list" :key="item">
        {{ item }}
        <button id="destroy" @click="destroy(item)">Destroy</button>
      </li>
    </ul>

    <strong>Add a new item in the list array and save while running localhost to
      preview the destroy hooks</strong>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";

onBeforeMount(() => {
  alert("beforeCreate: data is static");
});

onMounted(() => {
  alert("created: data is reactive");
});

onBeforeUpdate(() => {
  alert("beforeUpdate: data is reactive");
});

onUpdated(() => {
  alert("updated: data is reactive");
});

onBeforeUnmount(() => {
  alert("beforeUnmount: data is reactive");
});

onUnmounted(() => {
  alert("unmounted: data is reactive");
});

const list = ref([
  'Apex Legends',
  'A Plague Tale: Innocence',
  'ART SQOOL',
  'Baba Is You',
  'Devil May Cry 5',
  'The Division 2',
  'Hypnospace Outlaw',
  'Katana ZERO',
  'testing unmounted hooks',
]);

const destroy = (item) => {
  list.value = list.value.filter((i) => i !== item);
};


</script>

<style lang="stylus">
ul {
  padding-left: 0;
}

li {
  display: block;
  list-style: none;
  margin-top: 10px;
}

button {
  display: inline-block;
  background: rgb(235, 50, 50);
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 10px;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
}

</style>
