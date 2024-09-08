<template>
  <div class="app-container">
    <nav class="navbar">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/activity">Activity</router-link>
    </nav>

    <!-- Контейнер для контента -->
    <div class="page-content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
// Нет дополнительных скриптов
</script>

<style>
/* Основной контейнер приложения */
.app-container {
  max-width: 1200px; /* Максимальная ширина контейнера */
  margin: 0 auto;    /* Центровка контейнера */
  padding: 20px;     /* Отступы для комфортного восприятия */
}

/* Стили для навигации */
.navbar {
  display: flex;
  justify-content: center; /* Выравнивание ссылок по центру */
  margin-bottom: 20px;     /* Отступ снизу между навигацией и контентом */
}

.navbar a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

/* Стили для ссылок при наведении */
.navbar a:hover {
  color: #42b983; /* Изменение цвета при наведении */
}

/* Контент страницы */
.page-content {
  text-align: center;  /* Выравнивание текста по центру */
  padding: 20px;
  border: 1px solid #ddd;  /* Легкая граница для выделения контента */
  border-radius: 8px;
  background-color: #f9f9f9; /* Светлый фон для разделения контента */
}
</style>
