<template>
  <div>
    <h1 :style="headingStyles">{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <ul>
      <li>{{ items[0] }}</li>
      <li>{{ items[1] }}</li>
      <li>{{ items[2] }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const title = "My list component!";
const subtitle = "Vue JS basics";
const items = ref(["Item 1", "Item 2", "Item 3"]);

const headingStyles = {
  marginTop: "20px",
  textAlign: "center",
  color: "#4fc08d",
};

</script>

<style scoped lang="scss">
@import "../styles/typography.scss";

h1 {
  // margin-top: v-bind(headingStyles.marginTop);
  // text-align: v-bind(headingStyles.textAlign);
  // color: v-bind(headingStyles.color);
}
</style>
