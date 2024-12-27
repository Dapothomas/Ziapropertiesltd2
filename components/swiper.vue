<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="Wisdom-Court/comingsoon1.webp" />
        </div>
        <div class="swiper-slide">
          <img src="Wisdom-Court/comingsoon2.webp" />
        </div>
        <div class="swiper-slide">
          <img src="Listings/House3.webp" />
        </div>
        <div class="swiper-slide">
          <img src="Wisdom-Court/comingsoon5.webp" />
        </div>
        <div class="swiper-slide">
            <img src="Listings/House4.webp" />
        </div>
        <div class="swiper-slide">
          <img src="Listings/Ogombo.webp" />
        </div>
        <div class="swiper-slide">
          <img src="Wisdom-Court/comingsoon2.webp" />
        </div>
        <div class="swiper-slide">
            <img src="Wisdom-Court/comingsoon3.webp" />
        </div>
        <div class="swiper-slide">
          <img src="Listings/House1.webp" />
        </div>
      </div>
      <div class="swiper-button-next2"></div>
      <div class="swiper-button-prev2"></div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
      script.onload = () => {
        new Swiper('.swiper-container', {
        effect: "coverflow",
        watchSlidesProgress: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "3",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
          },
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
          },
          scrollbar: {
            el: false,
          },
        });
      };
      document.body.appendChild(script);
    },
  };
  </script>
  
  <style scoped>
  .swiper-slide
  {
    box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;
    max-width: 450px;
    max-height: clamp(180px, 20vw, 400px);
  }
  .swiper-container {
    height: 300px;
    padding-bottom: 50px;
    overflow: hidden;
  }
  .swiper-slide img{
    width: 100%;
    height: 100%;
    filter: blur(2px);
    object-fit: cover;
    filter: brightness(-20);
    box-shadow: rgb(0, 0, 0, 0.5) 0px 20px 30px -10px;
  }
  .swiper-slide-active img
  {
    filter: blur(0px);
  }
  </style>
  