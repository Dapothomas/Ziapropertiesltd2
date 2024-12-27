<script setup>
import ButtonLink from './ButtonLink.vue';
</script>

<template>
  <div class="panelcontainer">
    <div class="servicepanel">
        <div class="serviceimgs">
            <div class="servdiv1">
                <img src="Wallpapers/service1.webp">
            </div>
            <div class="servdiv2">
                <img src="Wallpapers/service2.webp">
            </div>
        </div>
        <div class="servicetext">
            <div class="second">
        <h1>
          OUR SERVICES
        </h1>
      </div>
            <h1 class="servh">Your Comfort is Our Top Priority</h1>
            <h2 class="servh2">Finding you a home that you'd love and
            enjoy staying in is our top priority. Your comfort is key</h2>
            <div class="bullets">
              <div class="first-bullet">
                <li>Property Management</li>
                <li>Real Estate Consultancy</li>
              </div>
              <div class="second-bullet">
                <li>Real Estate Development</li>
                <li>Marketing</li>
              </div>
                 </div>
                 <div class="bullet-button"><router-link to ="/About-us"><ButtonLink mainText="See More"  withoutBorder="true"/></router-link></div>
        </div>
    </div>
  </div> 
</template> 


<style>
a 
{
    text-decoration: none;
}
.second {
  display: flex;
  justify-content: left;
  margin-left: 13%;
  align-items: center;
  font-family: 'Poppins';
  position: relative;
  width: 100%;
  line-height: 20px;
  font-size: 12px;
  color: rgb(255, 255, 255); 
  text-align: center;
}
.second h1
{
    margin-top: 0px;
    font-size: (0.9rem, 1.5vw, 1.2rem);
    font-weight: 300;
}

.second::before {
  content: '';
  position: absolute;
  top: 28%;
  left: -9%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 10%;
  background-color: rgba(223, 139, 55, 0.864);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: -1;
}
.servicetext
{
    max-width: 500px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20%;
}
.bullets li
{
    font-family: 'Poppins';
    color: rgb(241, 241, 241);
    font-weight: 300;
    padding: 0.5rem;
    font-size: clamp(0.7rem, 1.5vw, 0.9rem);
}
.bullet-button
{
  margin-top: 10px;
}
.bullets li::marker
{
    color: var(--company-color);
}

.bullets
{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    margin-top: 25px;
    gap: clamp(1px, 1vw, 5px );
    justify-content: center;
    align-items: center;
    max-width: 500px;
}
.servh2 
{
    color: rgb(130, 130, 130);
    font-weight: 400;
    font-size: clamp(0.88rem, 2vw, 1rem);
    max-width: 380px;
    margin-top: 0;
    font-family: 'Poppins';
}
.servh 
{
    color: rgb(245, 245, 245);
    font-size: clamp(1.1rem, 2.5vw, 1.3rem);
    margin-top: 0;
    font-family: 'Poppins';
}
.servdiv1 img
{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    z-index: 2;
}
.servdiv2
{
    margin-top: 100px;
    padding-bottom: -20px;
    box-shadow: rgb(38, 57, 77, 0.6) 0px 20px 20px -10px;
    
} 
.servdiv img
{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    z-index: 2;
}
.servicepanel
{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    position: relative;
    align-self: center;
    justify-self: center;
    gap: 80px;
    max-width: 1300px;
    align-items: center;
    justify-content: center; 
}
.serviceimgs
{
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: -10%;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    height: 98%;
    align-self: center;
    justify-self: center;
    z-index: 2;
}
.serviceimgs img
{
    width: 100%;
    display: flex;
}
@media (max-width: 1024px) {
  .second::before {
  display: none;
}
 .servicetext .second {
  margin-left: 0%;
 }
  .servicetext
  {
    
    align-self: center;
    justify-self: center;
  }
  .servh2 {
    max-width: 300px;
  }
  .bullets {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    margin-top: 25px;
    gap: clamp(1px, 1vw, 5px );
    justify-content: center;
    align-items: center;
    max-width: 500px;
  }
  .second {
    margin-left: 50px;
  }
}

/* Small screens (large phones and smaller tablets) */
@media (max-width: 768px) {
  .servicepanel {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .second::before {
  left: -5%;
}
  .servicetext {
    max-width: 470px;
  }
  .bullets {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    margin-top: 25px;
    gap: clamp(1px, 1vw, 5px );
    justify-content: center;
    align-items: center;
    max-width: 500px;
  }
  .bullets li {
    font-size: 16px;
    text-indent: -20px;
  }

  .second {
    margin-left: 30px;
  }

  .servdiv2 {
    margin-top: 50px;
  }
}

/* Extra small screens (phones) */
@media (max-width: 480px) {
  .servicepanel {
    gap: 30px;
    margin: 0 auto;
  }

  .bullets {
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-bottom: 50px;
    align-items: start;
  }

  .second {
    margin-left: 20px;
  }

  .servdiv2 {
    margin-top: 30px;
  }
}
</style>