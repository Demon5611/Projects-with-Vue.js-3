<template>
  <div>
    <h1 :class="$style.title">{{ title }}</h1>
    <h2 :class="$style.subtitle">{{ subtitle }}</h2>
  </div>
</template>

<script setup>
 
     const title = "CSS module component!";
     const subtitle = "The fourth exercise";

</script>

<style module>
h1,
h2 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
}
.title {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
.subtitle {
  color: #4fc08d;
  font-style: italic;
}
</style>
