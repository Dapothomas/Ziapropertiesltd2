<template>
    <div class="swiper-container2">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
        <div class="agentimg">
                <img src="ceo.jpeg" />
        </div>
        <div class="agent-details">
          <p class="agentname">Mr. Peter Okpe</p>
          <p class="agentjob">C.E.O Zia Properties Ltd</p>
        </div>
        </div>
        <div class="swiper-slide">
            <div class="agentimg">
                <img src="marketing2.jpeg">
            </div>
        <div class="agent-details">
          <p class="agentname">Akitikori Omasan Ruth</p>
          <p class="agentjob">Marketing Executive I</p>
        </div>
        </div>
        <div class="swiper-slide">
            <div class="agentimg">
                <img src="/Agents/Gamar.webp">
            </div>
           <div class="agent-details"> 
          <p class="agentname">Suleman Mohammed</p>
          <p class="agentjob">Marketing Executive II</p>
        </div>
        </div>
        <div class="swiper-slide">
            <div class="agentimg">
                <img src="secretary.jpeg" >
            </div>
           <div class="agent-details"> 
          <p class="agentname">Andu Imaobong </p>
          <p class="agentjob">Secretary/HR</p>
        </div>
        </div>
        <div class="swiper-slide">
            <div class="agentimg">
                <img src="mediaguy.jpg" />
            </div>
           <div class="agent-details"> 
          <p class="agentname">Godshield Onche</p>
          <p class="agentjob">Media Manager</p>
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
      script.onload = () => {
        new Swiper('.swiper-container2', {
          autoplay: true,
          slidesPerView: 3,
          spaceBetween: 30,
          breakpointsBase: 'window',
          breakpoints: {
          // when window width is <= 480px
          580: {
            slidesPerView: 1,
            spaceBetween: 60,
          },
          // when window width is <= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          // when window width is <= 1024px
          1160: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }
          
        });
      };
      document.body.appendChild(script);
    },
  };
  </script>
  
  <style scoped>
  
  .agentimg
  {
    min-height: 200px;
    margin-bottom: 27px;
  }
  .swiper-container2 
  {
    max-width: 700px;
    margin-top: 40px;
    z-index: 2;
    overflow: hidden;
    display: flex;
    justify-content: left;
    align-items: start;
  }
  @media(max-width: 1024px){
    .swiper-container2 
  {
    width: 700px;
    overflow: hidden;
  }
}
  @media(max-width: 768px){
    .swiper-container2 
  {
    width: 700px;
    overflow: hidden;
  }
  } 
  @media(max-width: 480px){
    .swiper-slide {
      margin-right: 30px;
    }
  }
  .agentname
  {
    text-align: left;
    color: rgb(221, 221, 221);
    font-weight: 600;
    line-height: 35px;
  }
  .agentjob
  {
    color: rgb(136, 136, 136);;
    font-size: 15px;
  }
  .swiper-slide p
  {
    margin-block: 0;
  }
  .swiper-slide {
    text-align: left;
    font-size: 18px;
    max-width: 300px;
    height: 300px;
    background: #081a3c;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  
  </style>
  