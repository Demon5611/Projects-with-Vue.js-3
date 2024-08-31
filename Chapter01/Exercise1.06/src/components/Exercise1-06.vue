<template>
  <h1>Looping through array of objects</h1>
  <ul>
    <li v-for="(item, n) in interests" :key="n">
      {{ item.title }}
      <ol v-if="item.favorites.length > 0">
        <li v-for="(fav, m) in item.favorites" :key='m'>
          {{ fav }}
        </li>
      </ol>

    </li>
  </ul>

  <ul>
    <li v-for="(value, key, index) in course" :key="index">
      {{ index }}: {{ key }}:{{ value }}
    </li>
  </ul>
</template>

<script setup>
const interests = [
  {
    title: "TV",
    favorites: ["Designated Survivor", "Spongebob"],
  },
  {
    title: "Games",
    favorites: ["CS:GO"],
  },
  {
    title: "Sports",
    favorites: [],
  },
];
const course = {
  title: 'Frontend development with Vue',
  description: 'Learn the awesome of Vue',
  lecturer: 'Maya and Raymond'
}
</script>