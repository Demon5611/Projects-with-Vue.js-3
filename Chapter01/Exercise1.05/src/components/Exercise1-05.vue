<template>
  <h1>Looping through arrays</h1>
  <ul>
    <li v-for="item in items" :key="item.id">
      <h1>{{ item.title }}</h1>
      <span>{{ item.description }}</span>
      <ul>
        <li v-for="(str, index) in item.characteristics" :key="index">
          <span>{{ str }}</span>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
const items = [
  {
    id: 1,
    title: "Item 1",
    description: "About item 1",
    characteristics: ["Summer", "Spring", "Autumn", "Winter"],
  },
  {
    id: 2,
    title: "Item 2",
    description: "About item 2",
    characteristics: ["North", "West", "East", "South"],
  },
];
</script>

<style scoped></style>
