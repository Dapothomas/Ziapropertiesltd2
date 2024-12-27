<template>
    <div class="mediacont">
        <div class="mediahead">
      <h1>
        Wisdom Court Project Plans
      </h1>
      <p>Drag to navigate</p>
    </div>
    <wisdomswipe/>
    <div class="progress-wisdom">
        <div class="progress-video">
            <video controls>
                <source src="/Wisdom-Court/wisdomprogress.mp4">
            </video>
        </div>
        <div class="progress-description">
            <h2>Project Progress</h2>
            <p class="progress-p">Work in Progress: This video captures the early stages of our construction 
                project, where the foundation is being carefully laid for 12 units of modern miniflats. 
                Laying the foundation is a crucial step that ensures the stability and longevity of the 
                entire structure. You can see the dedication and precision of our construction team as they 
                work diligently to create a solid base. This is the beginning of a well-planned development, 
                and we're excited to offer you the opportunity to subscribe now and be a part of this promising
                 project from the ground up!</p>
        </div>
    </div>
</div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .progress-description h2
  {
    font-weight: 400;
    color: var(--company-color2);
  }
  .progress-p
  {
    font-size: 14px;
  }
  .progress-video video {
  width: clamp(250px, 75vw, 550px); 
  height: 100%;
  object-fit: cover;
  display: block; 
}
  .progress-wisdom
  {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: clamp(20px, 50vw, 80px);
  }
  @media (max-width: 960px)
  {
    .progress-wisdom
  {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 0px;
    flex-direction: column;
  }
  .progress-p
  {
    width: clamp(250px, 75vw, 550px); 
  }
  }
  .mediacont {
    margin: 50px;
  }
  .mediahead {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins';
  position: relative;
  width: 100%;
  flex-direction: column;
  line-height: 0px;
  font-size: 20px;
  margin-bottom: -120px;
  margin-top: 100px;
  font-weight: 400;
  color: rgb(46, 46, 46); 
  text-align: center;
}
.mediahead h1
{
  font-weight: 500;
  text-align: center;
  font-size: clamp(20px, 3rem, 35px);
  line-height: 30px;
}
  .carousel-container {
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    height: 350px;
    margin-block: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-wrapper {
    display: flex;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    height: 250px;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    width: calc((100% / 3) - 30px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    margin-right: 30px;
  }
  
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  