<template>
    <div class="swiper-container3">
      <div class="first3">
      <h1>
        MEET OUR TEAM
      </h1>
      <p>Our Experts, Your Partners in Success</p>
    </div>
      <div class="swiper-cover">
        <div class="agentdets">
        <div class="agentimg">
                <img src="/Agents/ceo.webp" />
        </div>
        <div class="agentinfo">  
        <p class="agentname">Mr. Peter Okpe</p>
          <p class="agentjob">C.E.O Zia Properties Ltd</p>
        </div>
        </div>
        <div class="agentdets">
            <div class="agentimg">
                <img src="/Agents/marketing2.webp">
            </div>
          <div class="agentinfo">
            <p class="agentname">Akitikori Omasan Ruth</p>
          <p class="agentjob">Marketing Executive I</p>
        </div>
        </div>
        <div class="agentdets">
            <div class="agentimg">
                <img src="/Agents/Gamar.webp">
            </div>
          <div class="agentinfo">
            <p class="agentname">Suleman Mohammed</p>
          <p class="agentjob">Marketing Executive II</p>
        </div>
        </div>
      </div>
        <div class="swiper-cover2">
          <div class="agentdets">
            <div class="agentimg">
                <img src="/Agents/secretary.webp" >
            </div>
          <div class="agentinfo">
            <p class="agentname">Andu Imaobong </p>
          <p class="agentjob">Secretary/HR</p>
        </div>
        </div>
        <div class="agentdets">

            <div class="agentimg">
                <img src="/Agents/mediaguy.webp" />
            </div>
          <div class="agentinfo">
            <p class="agentname">Godshield Onche</p>
          <p class="agentjob">Media Manager</p>
        </div>
        </div>
        </div>
        
     
</div>
      <!-- Add Pagination -->
      <!-- <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-scrollbar"></div> -->
  </template>
  
  
  
  <style scoped>
  .break3
{
  font-size: 20px;
}
/* .first3::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 30%;
  background-color: rgba(223, 142, 55, 0.864);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: -1;
} */
.first3 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins';
  position: relative;
  width: 100%;
  flex-direction: column;
  line-height: 0px;
  font-size: 16px;
  margin-bottom: -30px;
  margin-top: 100px;
  font-weight: 400;
  color: rgb(255, 255, 255); 
  text-align: center;
}
.first3 h1
{
  font-weight: 500;
}
  .meetteam
  {
    color: white;
    display: flex;
    margin-top: 100px;
    justify-content: center;
  }
 
  .agentinfo
  {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .swiper-cover
  {
    display: flex;
  justify-content: center; 
  align-items: center; 
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 100px;
  width: 100%; 
  }
  .swiper-cover2
  {
    display: flex;
  justify-content: center; 
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 50px;
  width: 100%; 
  }
  .swiper-cover2::before
  {
    content: '';
  position: absolute;
  background-attachment: fixed; 
  left: 0;
  width: 100vw; 
  height: 100%;
  overflow: hidden;
  padding-bottom: 150px;
  background-color: var(--company-color2);
  filter: brightness(70%);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgb(38, 57, 77) 0px 10px 10px -10px;
  z-index: -1; 
  }
  .swiper-cover::before
  {
    content: '';
  position: absolute;
  background-attachment: fixed; 
  left: 0;
  width: 100vw; 
  height: 100%;
  margin-top: 555px;
  padding-top: 455px;
  overflow: hidden;
  background-color: var(--company-color2);
  filter: brightness(70%);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgb(38, 57, 77) 0px 10px 10px -10px;
  z-index: -1; 
  }
  .agentimg
  {
    height: 200px;
    width: 250px;
    margin-bottom: 27px;
  }
  .swiper-container3
  {
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 0 auto;
    max-width: 1300px;
  }
   .swiper-container3::before
  {
  content: '';
  position: absolute;
  background-attachment: fixed; 
  left: 0;
  width: 100vw; 
  height: 100%;
  overflow: hidden;
  border-top: 1px solid white;
  background-color: var(--company-color2);
  filter: brightness(70%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
  box-shadow: rgb(38, 57, 77) 0px 10px 10px -10px;
  z-index: -1; 
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
  .agentdets p
  {
    margin-block: 0px;
  }
  .agentdets {
    text-align: left;
    font-size: 18px;
    margin-bottom: 50px;
    height: 280px;
    display: flex;
    width: 250px;
    flex-direction: column;
    justify-content: center;
  }
  
  .agentimg img {
    display: block;
    width: 100%;
    height: 250px;
    cursor: grab;
    object-fit: cover;
  }
  </style>
  