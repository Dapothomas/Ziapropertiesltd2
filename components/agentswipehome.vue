<template>
    <section class="splide" aria-label="Slide Container Example">
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide" v-for="(slide, index) in slides" :key="index">
            <div class="splide__slide__container">
              <img :src="slide.image" :alt="'Slide ' + (index + 1)" />
            </div>
            <div class="splide_name_container">
              <h1>{{ slide.name }}</h1>
              <p>{{ slide.job }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  const slides = [
    { image: 'Agents/ceo.webp', name: 'Mr. Peter Okpe', job: 'C.E.O Zia Properties Ltd' },
    { image: 'Agents/Gamar.webp', name: 'Suleman Mohammed', job: 'Marketing Executive II' },
    { image: 'Agents/marketing2.webp', name: 'Akitikori Omasan Ruth', job: 'Marketing Executive I' },
    { image: 'Agents/mediaguy.webp', name: 'Godshield Onche', job: 'Media Manager' },
    { image: 'Agents/secretary.webp', name: 'Andu Imaobong ', job: 'Secretary/HR' },
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
          640: {
            height: '6rem',
            perPage: 2,
          },
        },
      }).mount();
    };
    document.head.appendChild(script);
  });
  </script>
  
  <style>
.splide_name_container {
   background-color: #081a3c;
   padding-top: 20px;
}
 .splide {
  max-width: 100%; 
  width: 100%;
  overflow: hidden; 
  margin: 0 auto; 
  position: relative;
}
.splide__slide__container img {
  width: 100%;
    height: 100%;
    object-fit: cover;
}

.splide__slide__container {
  max-width: clamp(200px, 50vw, 300px); /* Adjusts from 200px to 300px depending on viewport width */
  margin: 0 auto;
  min-height: clamp(150px, 35vh, 300px); /* Adjusts from 150px to 200px depending on viewport height */
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
  