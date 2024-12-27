<script setup>
import Properties from './Properties.vue';
import CategoryFilter from './CategoryFilter.vue';
import bed from '~/static/svg/bed.vue';
import shower from '~/static/svg/shower.vue';
import landsize from '~/static/svg/landsize.vue';
import { ref, onMounted, watch } from 'vue';

const properties = ref([]);
const filteredProperties = ref([]);
const selectedCategory = ref('All');

// Fetch properties data from the static folder
onMounted(async () => {
  try {
    const response = await fetch('/properties.json');
    const data = await response.json();
    properties.value = data;
    filteredProperties.value = data;
  } catch (error) {
    console.error('Error fetching properties:', error);
  }
});

function filterProperties(category) {
  selectedCategory.value = category;
  if (category === 'All') {
    filteredProperties.value = properties.value;
  } else {
    filteredProperties.value = properties.value.filter(
      property => property.category === category
    );
  }
}

watch(selectedCategory, (newCategory) => {
  filterProperties(newCategory);
});
</script>
<template>
  <div class="cover">
    <CategoryFilter @filter="filterProperties" />
  <div class="projectsall">
    <Properties
      v-for="property in filteredProperties"
      :key="property.id"
    >
      <template v-slot:image>
        <img :src="property.image" alt="Property Image">
      </template>
      <template v-slot:location>
        <p class="location">{{ property.location }}</p>
      </template>
      <template v-slot:description>
        <nuxt-link :to="`/Properties/${property.id}`"><p class="description">{{ property.description }}</p></nuxt-link>
      </template>
      <template v-if="property.category === 'Land'" v-slot:landsize>
          <div class="flexsvg">
            <landsize/>
            <p class="houseDetails">{{ property.size }}</p>
        </div>
        </template>   
        <template v-if="property.category === 'Buy' || property.category === 'Rent'" v-slot:bed>
          <div class="flexsvg2">
            <bed/>
            <p class="houseDetails">{{ property.bed }}</p>
          </div>
        </template>
        <template  v-if="property.category === 'Buy' || property.category === 'Rent'" v-slot:shower>
          <div class="flexsvg">
            <shower/>
            <p class="houseDetails">{{ property.shower }}</p>
        </div>
        </template>
      <template v-slot:button>
        <nuxt-link :to="`/Properties/${property.id}`"><ButtonLink mainText="See More" :widthProps="true" :withBg="true"/></nuxt-link>
      </template>
      <template v-slot:price>
        <p>{{ property.price }}</p>
      </template>
    </Properties>
  </div>
</div>
</template>

<style>
.flexsvg2
{
  display: flex;
  flex-direction: row;
  margin-left: -10px;
  gap: 5px;
  justify-content: center;
  align-items: center;
}
.flexsvg
{
  display: flex;
  flex-direction: row;
  gap: 5px; 
  justify-content: center;
  align-items: center;
}
.cover
{
  max-width: 770px;
}
.projectsall {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two equal columns */
  gap: 20px;
  margin-top: -25px;
}
@media (max-width: 690px) {
  .projectsall {
    grid-template-columns: 1fr; /* One column */
  }
}

.projectsall a {
  text-decoration: none;
}
</style>
