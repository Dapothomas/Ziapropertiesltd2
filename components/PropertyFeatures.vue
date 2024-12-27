<script setup>
import serenity from '~/static/svg/serenity.vue';
import security2 from '~/static/svg/security2.vue';
import waterSupply2 from '~/static/svg/water-supply2.vue';
import electricity2 from '~/static/svg/electricity2.vue';
import smartHouse2 from '~/static/svg/smart-house2.vue';
import WaterSupply2 from '~/static/svg/water-supply2.vue';
</script>
<template>
    <div class="propsfeats">
      <div class="propshead">
      <h1>
        Property Features
      </h1>
      <p>Look what our beautiful estate features</p>
    </div>
      <div class="props-cover">
        <div class="featscover">
          <div class="prop-svg">
            <waterSupply2/>
          </div>
          <div class="prop-p">
            <p>Water Supply</p>
          </div>
        </div>
        <div class="featscover">
          <div class="prop-svg">
            <smartHouse2/>
          </div>
          <div class="prop-p">
            <p>Smart House</p>
          </div>
        </div>
        <div class="featscover">
          <div class="prop-svg">
            <electricity2/>
          </div>
          <div class="prop-p">
            <p>Electricity</p>
          </div>
        </div>
        <div class="featscover">
          <div class="prop-svg">
            <serenity/>
          </div>
          <div class="prop-p">
            <p>Serenity</p>
          </div>
        </div>
        <div class="featscover">
          <div class="prop-svg">
            <security2/>
          </div>
          <div class="prop-p">
            <p>Security</p>
          </div>
        </div>
      </div>
        
     
</div>
  </template>
  
  
  
  <style>
  .featscover 
{
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .propshead::before {
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
.propshead {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins';
  position: relative;
  width: 100%;
  flex-direction: column;
  line-height: 10px;
  font-size: 20px;
  margin-bottom: -30px;
  margin-top: 100px;
  font-weight: 400;
  color: rgb(46, 46, 46); 
  text-align: center;
}
.propshead h1
{
  font-weight: 500;
  line-height: 20px;
  font-size: clamp(35px, 3vw, 40px);
}
.propshead p
{
  line-height: 20px;
}
  /* .propsfeats::before
  {
  content: '';
  position: absolute;
  border-top: 1px solid white;
  background-color: var(--company-color2);
  filter: brightness(70%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
  width: 30000px; 
  box-shadow: rgb(38, 57, 77) 0px 10px 10px -10px;
  height: 1000px; 
  z-index: -1; 
  margin-left: -2000px;
  } */
  .props-cover
  {
    display: flex;
  justify-content: center; 
  align-items: center; 
  flex-wrap: wrap;
  flex-direction: row;
  gap: 150px;
  margin-top: 100px;
  width: 100%; 
  }
  .props-cover2
  {
  display: flex;
  justify-content: center; 
  align-items: center;
  gap: 220px;
  margin-left: 10px;
  flex-direction: row;
  width: 100%; 
  }
  .propsfeats
  {
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
  </style>
  