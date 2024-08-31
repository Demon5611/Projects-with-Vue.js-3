<template>
  <img :src="logo"/>
  <div v-text="msg"></div>
  <h1>{{ isUppercase ? title.toUpperCase() : title }}</h1>
  <div v-if="count === 4">Four</div>
  <div v-else-if="count === 6">Six</div>
  <div v-else-if="count === 2">Two</div>
  <div v-else>Others</div>
</template>

<script setup>
import  logo from "../assets/logo.svg";
const msg = "My message"
const title = "My first component!";
const isUppercase = true;
</script>

<style>
img {
  width: 100px;
  height: auto;
}
</style>
