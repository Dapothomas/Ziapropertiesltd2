<template>
  <div class="category-filter">
    <p>Sort By : </p>
    <button
      v-for="category in categories"
      :key="category"
      @click="filterProperties(category)"
      :class="{ active: selectedCategory === category }"
    >
      {{ category }}
    </button>
  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue';

const emit = defineEmits(['filter']);

const categories = ['All', 'Buy', 'Rent', 'Land']; // Add more categories as needed
const selectedCategory = ref('All'); // Match the initial value to the "All" category

function filterProperties(category) {
  selectedCategory.value = category;
  emit('filter', category);
}
</script>

<style>
.category-filter {
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: inherit;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
  margin-bottom: 20px;
}

.category-filter p {
  padding-right: clamp(1.5rem, 2vw, 1.9rem); /* Adjust padding for responsiveness */
  font-weight: 600;
  font-size: clamp(0.8rem, 2vw, 1rem);
  color: rgb(45, 45, 45);
}

.category-filter button {
  border: none;
  height: clamp(1.5rem, 4vw, 2rem); /* Adjust height for responsiveness */
  font-size: clamp(0.8rem, 2vw, 0.9rem); /* Adjust font size for responsiveness */
  border-left: 1px solid rgba(128, 128, 128, 0.19);
  background-color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: #565656;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(8px, 2vw, 10px) clamp(15px, 4vw, 20px); /* Adjust padding for responsiveness */
}

.category-filter button.active {
  background-color: var(--company-color);
  color: #fff;
}

.category-filter button:hover {
  background-color: var(--company-color2);
  animation: changeColour 2s;
  color: #fff;
}
</style>
