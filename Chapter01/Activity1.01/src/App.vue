<template>
  <div class="container">
    <h1> Shoping list </h1>
    <div class="user-input">
      <input placeholder="Press enter to add new item" v-model="input" @keyup.enter="addItem" ref="inputElement" />
      <button @click="addItem">
        Add item
      </button>
    </div>

    <ul v-if="shoppingList">
      <li v-for="(item, i) in shoppingList" :key="i" class="item">
        <span>{{ item }}</span>
        <button class="button--remove" @click="deleteItem(i)">Remove</button>
      </li>
    </ul>
    <br />
    <button class="button--delete" @click="deleteAll()">Delete All</button>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const shoppingList = ref([]);
const input = ref("");
const inputElement = ref(null);


const deleteAll = () => {
  shoppingList.value = [];
};


const addItem = () => {
  if (!input.value) return;
  shoppingList.value.push(input.value);
  input.value = "";
};
onMounted(() => {
  inputElement.value.focus();
});
const deleteItem = (i) => {
  shoppingList.value.splice(i, 1);
}

</script>


<style>
.container {
  max-width: 600px;
  margin: 80px auto;
}

.item {
  display: flex;
  justify-content: space-between;
}

// Type
.h2 {
  font-size: 21px;
}

.user-input {
  display: flex;
  align-items: center;
  padding-bottom: 20px;

  input {
    width: 100%;
    padding: 10px 6px;
    margin-right: 10px;
  }
}

.item {
  display: flex;
  align-items: center;
}

// Buttons
button {
  appearance: none;
  padding: 10px;

  font-weight: bold;
  border-radius: 10px;
  border: none;
  background: $color-grey;
  color: white;
  white-space: nowrap;

  +button {
    margin-left: 10px;
  }
}

.button--delete {
  display: block;
  margin: 0 auto;
  background: red;
}

.button--remove {
  background: none;
  color: red;
  text-transform: uppercase;
  font-size: 11px;
  align-self: flex-end;
}

ul {
  display: block;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0.25);

  >li {
    color: $color-grey;
    margin-bottom: 4px;
  }
}
</style>
