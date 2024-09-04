<template>
  <div id="app">
    <div class="container">
      <div class="header_author">
        <h1>John Doe</h1>
        <h2>Web Developer</h2>
        <p>Research and recommendations for modern stack websites</p>
      </div>
      <div class="line"></div>
      <h5>(C)Photos from Pexels</h5>
      <div class="photos-list">
        <div
          v-for="(photo, index) in photos.slice(0, 10)"
          :key="index"
          class="photo-card"
        >
          <img :src="photo.src.medium" :alt="photo.alt" class="thumbnail" />
          <div class="photo-text">
            <h5 class="title">Photographer: <a :href="photo.photographer_url" target="_blank">{{ photo.photographer  }}</a></h5>
            <p><a :href="photo.url" target="_blank">View on Pexels</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const photos = ref([]);


async function getPhotos() {
  try {
    const response = await axios.get("https://api.pexels.com/v1/curated", {
      headers: {
        Authorization:
          "Dq29owQzyAs5xqUOz0lxwW9wTAIyVSowx2zhFONzZHuAIBY2moWroDD5",
      },
      params: {
        per_page: 10, // Количество фотографий на странице
      },
    });
    console.log('response ==>', response);
    photos.value = response.data.photos;
  } catch (error) {
    console.error("Error fetching:", error);
  } 
}

onMounted(getPhotos);
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  flex-wrap: wrap;
  justify-content: space-between;

  gap: 10px;
}

.header_author {
  text-align: center;
}

.line {
  border-bottom: 1px solid #ccc;
  margin: 20px 0;
}

.photos-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.photo-card {
  flex: 1 1 calc(30% - 15px);
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  max-width: calc(50% - 15px); /* Ограничение ширины для двух колонок */
}

.thumbnail {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}

.photo-text {
  margin-top: 10px;
}

.title {
  font-size: 18px; /* Увеличенный размер для лучшей читаемости */
}

.photo-text a {
  color: #007bff;
  text-decoration: none;
}

.photo-text a:hover {
  text-decoration: underline;
}
</style>
