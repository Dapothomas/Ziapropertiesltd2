<script setup>
import rightarrow from '~/static/svg/rightarrow.vue';
import Properties from './Properties.vue';
import bed from '~/static/svg/bed.vue';
import landsize from '~/static/svg/landsize.vue';
import shower from '~/static/svg/shower.vue';
import { ref, computed } from 'vue';
// Import the JSON file
import propertiesData from '~/static/properties.json';

// Initialize the properties array with the imported JSON data
const properties = ref(propertiesData);

// Compute the first three properties to display
const firstThreeProperties = computed(() => properties.value.slice(0, 3));
</script>

<template>
  <div class="properties">
    <div class="first">
      <h1>
        EXPLORE<br>
        <span class="break">YOUR OPTIONS</span>
      </h1>
    </div>
    <div class="heading">
      <div class="dash"></div>
      <p class="popular">POPULAR</p>
    </div>
    <div class="heading2">
      <div class="centerh">
        <p class="proph">Our Popular Homes</p>
      </div>
      <div class="explore">
        <router-link to = "/Property"><p class="exp">Explore All</p>
        <rightarrow/></router-link>
      </div>
    </div>
    <div class="panelprop">
      <Properties
        v-for="property in firstThreeProperties"
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
@media (max-width: 768px) {
  .properties {
    margin-top: 50px;
    
  }

  .heading2 {
    flex-direction: row;
    align-items: flex-start;
  }

  .heading2 .proph {
    font-size: 1rem;
  }
  .exp {
    font-size: 50px;
  }
  .first::before {
    width: 100%; /* Ensure the background scales properly */
    height: 20%;  /* Adjust height as needed */
  }
}

/* Media queries for very small screens */
@media (max-width: 480px) {
  .panelprop {
    grid-template-columns: 1fr;
  }
  .heading2 {
    display: none;
    margin: 0;
  }
  .heading2 .proph {
    font-size: 0.5rem;
    display: none;
  }
  .properties .heading
  {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .heading2 .explore {
    font-size: 0.5rem;
    display: none;
  }
  .first {
    font-size: 18px;
  }
}


.first {
  font-size: clamp(18px, 5vw, 20px); 
  margin-bottom: -20px;
  line-height: 1.2;
}

.break {
  font-size: clamp(16px, 4vw, 20px); 
}

/* .heading2 .proph {
  font-size: clamp(18px, 4vw, 20px); 
}

.exp {
  font-size: clamp(14px, 3vw, 15px); 
} */

.flexsvg
{
  display: flex;
  gap: 5px;
  justify-content: center;
  align-content: center;
  flex-direction: row;
}
.flexsvg p
{
  margin: 0;
}
.explore a
{
  color: rgb(0, 0, 80);
  display: flex;
  gap: 10px;
  flex-direction: row;
  transition: 0.5s ease-in-out;
}
.explore a:hover
{
  color: rgb(0, 68, 150);
}
.properties
{
  margin-bottom: clamp(0px, 10vh, 200px);
  position: relative;
  margin-top: 100px;
}
.break
{
  font-size: 20px;
}
.first {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins';
  position: relative;
  width: 100%;
  line-height: 20px;
  font-size: 20px;
  margin-bottom: -30px;
  font-weight: 600;
  color: black; 
  text-align: center;
}
.description p:hover
{
  color: var(--company-color);
}

.first::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(350px, 50vw, 450px);
  height: 30%;
  background-color: rgba(223, 142, 55, 0.864);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: -1;
}
.panelprop a
{
  text-decoration: none;
}
.panelprop a:hover
{
  text-decoration: underline;
  color: var(--company-color);
}
.location
{
    font-size: 15px;
    font-weight: 600;
}
.panelprop
{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: -25px;
}
.exp
{
    font-size: 15px;
    font-weight: 500;
    font-family: 'Poppins';
    margin-top: 0px;
}
.explore
{
    display: flex;
    flex-direction: row;
}
.heading2
{
    display: flex;
    justify-content: space-between;
    align-content: center;
}
.proph
{
    font-family: 'Poppins';
    font-weight: 600;
    margin-top: 0px;
    font-size: 20px;
}
.heading
{
    display: flex;
    gap: 10px;
    justify-content: left;
    left: 0px;
    position: relative;
    align-content: left;
    flex-direction: row;
}
.dash
{
    width: 34px;
    height: 2px;
    background-color: rgb(55, 88, 149);
    margin-top:25px;
}
.popular
{
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 15px;
}
</style>
