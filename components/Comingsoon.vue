<script setup>
import Carouselmain from './carousel/carouselmain.vue';
import ButtonLink from './ButtonLink.vue';
import electricity from '~/static/svg/electricity.vue';
import smartHouse from '~/static/svg/smart-house.vue';
import WaterSupply from '~/static/svg/water-supply.vue';
import security from '~/static/svg/security.vue';

</script>

<template>
  <div class="cover-com">
    <div class="third">
        <h1 class="upcomh">
          UPCOMING<br>
          <span class="break2">PROJECTS</span>
        </h1>
      </div>
    <div class="comeback">
      <div class="cover-car">
      <div class="avail">
        <p>SUBSCRIBE NOW!!</p>
      </div>
      <div class="dot"></div>
            <Carouselmain/>
          </div> 
            <div class="upcoming">
              <div class="wisdombe">
                <h1 class="wisfeath2">Wisdom Court</h1> 
            <div class="wisdomtyes">
              <div class="typewisp">
                <li>3 BEDROOM TERRACE DUPLEX/BQ (10 Units)</li><br>
                <li>2 BEDROOM TERRACE DUPLEX/BQ (6 Units)</li><br>
                <li>2 BEDROOM FLAT (16 Units)</li><br>
                <li>MINIFLAT (12 Units)</li>
               </div>
               </div>
              <div class="wisfeat">
                <h1 class="wisfeath">
                  Features
                </h1>
            <div class="bulletsw">
                <div class="svgfeat"><electricity/>24 Hours Power</div>
                <div class="svgfeat"><WaterSupply/>Constant Water Supply</div>
                <div class="svgfeat"><security/>100% Security</div>
                <div class="svgfeat"><smartHouse/>Smart House</div>
            </div>
              </div>
              <div class="combutt">
                <router-link to="/Wisdom-Court"><ButtonLink mainText="See More" :withBg="true" :withoutBorder="true"/></router-link>
              </div>
              
            </div>   
            </div>
    </div>
  </div>
</template>

<style>
.cover-com{
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 50px;
}
@media (max-width: 480px) {
  .cover-com
  {
    max-width: 480px;
    padding-inline: 20px;
    /* overflow-x: hidden; */
  }
}
@media (max-width: 1260px) {
  .cover-com {
    margin-inline: 30px;
  }
}
.combutt a
{
  text-decoration: none;
}
.upcomh
{
  margin-bottom: 30px;
}
.dot
{
  content: '';
  position: absolute;
  margin-top: 60px;
  left: -5px;
  transform: translate(-50%, -50%);
  height: 10px;
  width: 11px;
  -webkit-clip-path: polygon(100% 0, 0 0, 100% 100%);
  clip-path: polygon(100% 0, 0 0, 100% 100%);
  background-color: rgb(78, 2, 2);
  z-index: 3;
}
.upcoming
{
  margin-top: -37px;
}
.third
{
  margin-top: 150px;
}
.avail p
{
  margin: 0px;
  color: white;
  font-weight: 600;
  font-size: clamp(12px, 1vw, 12px);
  margin-left: 15px;
}
.avail
{
    position: absolute;
    left: -10px;
    background-color: rgb(175, 23, 23);
    height: 35px;
    display: flex;
    -webkit-clip-path: polygon(100% 0, 80% 50%, 100% 100%, 0 100%, 0 50%, 0 0);
    clip-path: polygon(100% 0, 90% 50%, 100% 100%, 0 100%, 0 50%, 0 0);
    margin-top: 20px;
    align-items: center;
    transition: all 0.3s ease;
    width: 152px;
    z-index: 3;
}
.break2
{
  font-size: clamp(26px, 2vw, 30px);
  color: #d7d7d7;
}
.third 
{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: 'Poppins';
  position: relative;
  width: 100%;
  line-height: 30px;
  font-size: clamp(16px, 1.5vw, 20px);
  margin-bottom: 15px;
  font-weight: 600;
  color: rgb(237, 237, 237); 
  text-align: center;
}



.third{
  z-index: 2;
}
.combutt
{
  margin-top: 30px;
}
.svgfeat
{
  display: flex;
  flex-direction: row;
  gap: clamp(16px, 2vw, 20px);
  font-size: clamp(16px, 2vw, 16px);
  line-height: 20px;
  align-items: center;
}
.bulletsw li
{
    font-family: 'Poppins';
    color: rgb(230, 230, 230);
    font-weight: 300;
    text-indent: 2000px;
}
.bulletsw li::marker
{
    color: white;
}
.bulletsw
{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    font-family: 'Poppins';
    color: rgb(24, 24, 24);
    margin-top: 25px;
    max-width: 500px;
    gap: 20px;
    line-height: 10px;
}
.wisfeat
{
  margin-top: 50px;
}
.wisfeath
{
  display: flex;
  justify-content: left;
  margin-top: 30px;
  font-weight: 500;
  align-items: center;
  font-family: 'Poppins';
  position: relative;
  width: 100%;
  line-height: 20px;
  font-size: clamp(24px, 1.8vw, 28px);
  color: rgb(201, 115, 44); 
  text-align: center;
}
/* .wisfeath::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 29%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 20%;
  background-color: rgba(223, 142, 55, 0.864);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 2;
} */
@media(max-width:680px){
  .wisfeath::before {
    display: none;
  }
  .wisfeath2 h2{
    margin-left: 0px;
    display: flex;
flex-direction: column; 
justify-content: left;
text-align: left;
position: relative;
left: 0vw;
align-items: start;
  }
 .wisfeath h2{
  margin-left: 0px;
    display: flex;
flex-direction: column; 
justify-content: left;
text-align: left;
position: relative;
left: 0vw;
align-items: start;
  }
  .wisfeath2::before {
    display: none;
  }
  .wisdombe{
    margin-left: 0px;
  }
}
@media(max-width:680px){
 .upcoming{
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  place-items: center;
  text-align: left;
 }
 .typewisp li{
  color: #000;
 }
 .bulletsw{
  display: flex;
flex-direction: column; 
justify-content: left;
text-align: left;
align-items: left;
}
}
.typewisp
{
  color: rgb(144, 144, 144);;
  font-size: clamp(14px, 2vw, 16px);
  line-height: 20px;
}
.typewisp li::marker
{
    color: rgb(163, 163, 163);
}
.wisfeath2
{
  display: flex;
  justify-content: left;
  margin-top: 30px;
  font-weight: 500;
  align-items: center;
  font-family: 'Poppins';
  position: relative;
  width: 100%;
  line-height: 20px;
  font-size: clamp(24px, 1.8vw, 28px);
  color: rgb(201, 115, 44); 
  text-align: center;

}
.second h1
{
    margin-top: 0px;
    font-weight: 400;
}
/* .wisfeath2::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 43%;
  transform: translate(-50%, -50%);
  width: 50px;
  height:20%;
  background-color: rgba(223, 142, 55, 0.864);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 2;
} */
.upcomeh
{
    color: rgb(232, 232, 232);
    font-size: clamp(18px, 2vw, 27px);
    margin: 0px;
}
.cometrans
{
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(30px);
    border-radius: 15px;
    width: 70vw;
    height: 500px;
    transform: translate(-50%);
    margin-top: -50px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    left: 50%;
}
.comeback {
  position: relative;
  z-index: 1;
  display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: clamp(20px, 10vw, 300px);
    justify-content: space-between;
  font-family: 'Poppins';
}

/* .comeback::after {
  content: '';
  position: absolute;
  width: 100vw; 
  height: 385px;
  background-color: var(--company-color2);
  z-index: -2; 
  margin-left: -80px;
  margin-top: -200px;
  background-image: url('/comingsoon3.jpeg');
  background-size: cover; 
  backdrop-filter: blur(5px);
  background-position: center; 
  background-repeat: no-repeat; 
  box-shadow: rgb(38, 57, 77) 0px 10px 10px -10px;
} */

.comeback::before 
{
  content: '';
  position: absolute;
  left: 0;
  background-color: #081a3c;
  margin-top: -620px  ;
  backdrop-filter: blur(25px);
  /* overflow-x: hidden; */
  box-shadow: rgb(38, 57, 77) 0px 10px 10px -10px;
  height: 820px; 
  z-index: -1; 
  width: calc(100% + 15rem); 
  margin-left: -7.5rem;
}
@media(max-width: 380px)
{
  .third
{
  padding-top: 50px;
}
.cover-car
{
  margin-top: 50px;
}
}
</style>