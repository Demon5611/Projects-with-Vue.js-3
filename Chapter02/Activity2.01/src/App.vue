<template>
  <div id="app">
    <div class="container">
      <div class="header_author">
        <h1>John Doe</h1>
        <h2>Web Developer</h2>
        <p>Research and recommendations for modern stack websites</p>
      </div>
      <div class="line"></div>
      <h4>Photos from Pexels</h4>
      <div class="photos-list">
        <div
          v-for="(photo, index) in photos.slice(0, 5)"
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
        per_page: 5, // Количество фотографий на странице
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
  width: calc(50% - 10px);
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.thumbnail {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.photo-text {
  margin-top: 10px;
}

.title {
  font-size: 16px;
  font-weight: bold;
}

.photo-text a {
  color: #007bff;
  text-decoration: none;
}

.photo-text a:hover {
  text-decoration: underline;
}
</style>
