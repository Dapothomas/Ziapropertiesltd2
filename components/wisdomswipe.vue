<template>
    <section class="splide" aria-label="Slide Container Example">
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide" v-for="(slide, index) in slides" :key="index">
            <div class="splide__slide__container">
              <img :src="slide.image" :alt="'Slide ' + (index + 1)" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  const slides = [
    { image: '/Wisdom-Court/2bedterrace.webp'},
    { image: '/Wisdom-Court/aerialview.webp'},
    { image: '/Wisdom-Court/streetview.webp' },
    { image: '/Wisdom-Court/streetview2.webp'},
    { image: '/Wisdom-Court/comingsoon7.webp'},
  ];
  
  onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
    script.onload = () => {
      new window.Splide('.splide', {
        type: 'loop',
        gap: '2rem',
        height: '9rem',
        perPage: 3,
        autoplay: true,
        breakpoints: {
          900: {
            height: '6rem',
            perPage: 2,
          },
          500: {
            height: '6rem',
            perPage: 1,
          },
        },
      }).mount();
    };
    document.head.appendChild(script);
  });
  </script>
  
  <style scoped>
.splide__track {
    height: clamp(250px, 35vh, 400px) ; 
}
.splide_name_container {
   background-color: #081a3c;
   padding-top: 20px;
}
 .splide {
  max-width: 100%; 
  width: 100%;
  overflow: hidden; 
  margin-bottom: 150px; 
  margin-top: 200px; 
  height: clamp(250px, 35vh, 400px) ;
  position: relative;
}
.splide__slide__container img {
  width: 100%;
    height: 100%;
    cursor: grab;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    object-fit: cover;
}

.splide__slide__container {
  max-width: clamp(250px, 70vw, 350px);
  margin: 0 auto;
  min-height: clamp(150px, 35vh, 300px);
  box-shadow: rgba(0, 0, 0, 0.649) 0px 3px 8px;
}

.splide_name_container h1 {
  margin: 0;
  color: rgb(221, 221, 221);
  font-weight: 600;
  font-size: clamp(0.8rem, 2.5vw, 1.1rem); /* Responsive font-size using clamp */
}

.splide_name_container p {
  margin: 0;
  color: rgb(136, 136, 136);;
  font-size: clamp(0.875rem, 2vw, 1.125rem); /* Responsive font-size using clamp */
}

  </style>
  