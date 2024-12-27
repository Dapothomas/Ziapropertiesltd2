<script>
import Footer from '~/components/Footer.vue';
import locationid from '~/static/svg/locationid.vue';
import Navbar from '~/components/Navbar.vue';
import bed from '~/static/svg/bed.vue';
import Shower from '~/static/svg/shower.vue';
import Carousel from '~/components/carousel/Carousel.vue';
import Sideid from '~/components/sideid.vue';
import Message from '~/static/svg/message.vue';
import Email from '~/static/svg/email.vue';
import Name from '~/static/svg/name.vue';
import Phone from '~/static/svg/phone.vue';
import ButtonLink from '~/components/ButtonLink.vue';
import ContactForm from '~/components/Contact-form.vue';
import Landsize from '~/static/svg/landsize.vue';

export default {
  components: {
    locationid, bed, Shower, Carousel, Footer, Navbar, Sideid, Message, Email, Name, Phone, ButtonLink, ContactForm, Landsize
  },
  data() {
    return {
      loading: true
    };
  },
  async asyncData({ params }) {
  try {
    const response = await fetch('/propertyDetails.json');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const properties = await response.json();
    const property = properties.find(p => p.id === parseInt(params.id));
    
    const slides = property ? property.images || [] : [];
    const formattedAddress = property ? encodeURIComponent(property.location) : '';
    const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDZ9fTWN2psoqnHAwNvyJF6LeVg2RQalaA&q=${formattedAddress}`;
    return { property, slides, googleMapsUrl };
  } catch (error) {
    console.error('Error fetching property:', error);
    return { property: null, slides: [], googleMapsUrl: '' };
  }
}

}
</script>



<template>
  <div class="root1">
    <header>
      <Navbar/>
    </header>
  <div v-if="property" class="specdetails">
    <div class="container12"
    :style="{ '--background-url': 'url(' + property.image + ')'}">
    <div class="toptext">
      <h1 class="proptitle">{{ property.name }}</h1>
        <div class="locationflex">
          <locationid/>
          <p>{{ property.location }}</p>
        </div>
    </div>
        
      </div>
    <div class="bothdetes">
    <div class="imgcover">
      <img :src="property.image" alt="Property Image">
      <div class="avail2">
        <p>{{property.price}}</p>
      </div>
      <div class="dot2"></div>
    </div>  
    <div class="descriptionprop">
    <div class="svgid">
      <div v-if="property.category === 'Buy' || property.category === 'Rent'" class="svgid2"><bed/><p>{{ property.bed }}</p></div>
      <div v-if="property.category === 'Buy' || property.category === 'Rent'" class="svgid2"><shower/><p>{{ property.shower }}</p></div>
    </div> 
    <div class="svgid">
      <div v-if="property.category === 'Land'" class="svgid2"><Landsize/><p>{{ property.size }}</p></div>
    </div> 
    <div class="descript">
    <h1>Description</h1>
    <p class="descpr">{{ property.description }}</p>
    </div>
    
    </div>
  </div>
  <div class="bothunder">
  <div class="underid">
    <div v-if="property.category === 'Land'" class="carouselvid">
      <h2 class="contactside2">Video</h2>
      <video controls>
        <source :src="property.video">
      </video>
    </div>
  <div v-if="property.category === 'Buy' || property.category === 'Rent'" class="carousel2"> 
    <h2 class="contactside2">Images</h2>
  <Carousel :slides="slides" :carShad="false" :widthCar="true" :interval="3000" controls indicators></Carousel></div>
  <div class="locate-house">
    <h2 class="contactside2">Location</h2>
     <div class="map">
        <iframe :src="googleMapsUrl" width="550" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     </div>
      </div>
        <ContactForm/>
      </div>
  <div class="sideid"><Sideid/></div>
</div>
</div>
<div v-else>
    <p>Loading...</p>
  </div>
  <Footer/>
</div>
</template>

<style>
.root1
{
  max-width: 1300px;
  margin: 0 auto;
}
.locate-house
{
  font-size: 26px;
  font-weight: 400;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  width: clamp(300px, 60vw, 550px);
  border: 1px solid rgba(59, 59, 59, 0.442);
  color: var(--company-color2);
  margin-block: 0px;
}
.locate-house .map
{
  justify-content: center;
  display: flex ;
}
.contactside2
{
  font-size: 26px;
  font-weight: 400;
  color: var(--company-color2);
  margin-block: 0px;
}
.input-wrapper3 {
    position: relative;
    width: 92%;
}
.input-wrapper3 .svgin {
    position: absolute;
    left: 10px;
    top: 20px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    fill: #888; /* Change this color to match your design */
}
.input-wrapper3 input {
    padding-left: 40px; /* Leave space for the SVG icon */
}
.input-wrapper3 textarea{
    padding-left: 40px; /* Leave space for the SVG icon */
}

.innerside2
{
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding-inline: 50px;
  padding-bottom: 50px;
  padding-top: 20px; 
}
.bothunder
{
  display: flex;
  flex-direction: row;

  justify-content: center;
  gap: clamp(40px, 10vw, 80px);
}
.underid
{
  display: flex;
  flex-direction: column;
}
.carousel2
{
  background-color: #ffffff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: clamp(300px, 60vw, 550px);
  border: 1px solid #9f9f9f;
  padding: 20px;
  margin-top: -50px;
  margin-bottom: 50px;
}
.carouselvid
{
  background-color: #ffffff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: clamp(300px, 60vw, 550px);
  border: 1px solid #9f9f9f;
  padding: 20px;
  margin-top: -50px;
  margin-bottom: 50px;
}
.carouselvid video
{
  width: 100%;
  max-width: 550px; 
  min-width: 250px; 
  aspect-ratio: 16 / 10; 
  height: auto; 
  overflow: hidden;
}
.dot2
{
  content: '';
  position: relative;
  top: -196px;
  left: -5px;
  transform: translate(-50%, -50%);
  height: 10px;
  width: 11px;
  -webkit-clip-path: polygon(100% 0, 0 0, 100% 100%);
  clip-path: polygon(100% 0, 0 0, 100% 100%);
  background-color: rgb(103, 58, 3);
  z-index: 3;
}
.avail2 p
{
  margin: 0px;
  color: white;
  font-weight: 600;
  font-size: 15px;
  margin-left: 15px;
}
.avail2
{
    position: relative;
    background-color: rgb(194, 109, 34);
    top: clamp(-200px, -30vw, -380px);
    left:-10px;
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
.sendmess
{
  display: flex;
  justify-content: center;
  
}
.actcontact h1
{
  font-size: 21px;
  margin-block: 0px;
}
.descript
{
  padding-left: 20px;
  border-radius: 5px;
}
.descpr
{
  color: #252525;
  margin-block: 10px;
  font-size: clamp(0.88rem, 2vw, 0.87rem);

}
.descriptionprop h1
{
  font-size: 24px;
  font-weight: 700;
  margin-block: 5px;
  color: #0d0e3c;
}
.svgid
{
  display: flex;
  margin-left: 20px;
  flex-direction: row;
  gap: 10px;
}
.svgid2
{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: rgb(119, 119, 119);
}
.toptext
{
  position: relative;
  line-height: 10px;
  top: 20%;
  left: 55%;
}
.locationflex
{
  display: flex;
  align-items: center;
  max-width: 400px;
  gap: 10px;
}
.locationflex p
{
  color: #ffffff;
  font-size: clamp(0.8rem, 2vw, 1.1rem);
}
.bothdetes
{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(40px, 10vw, 80px);
}
.proptitle
{
  position: relative;
  width: clamp(300px, 60vw, 600px);
  font-size: clamp(01rem, 4.5vw, 1.17rem);
}
.imgcover
{
  position: relative;
  width: clamp(300px, 60vw, 500px);
  top: -140px;
  justify-self: center;
  border-radius: 15px;
  height: clamp(200px, 50vw, 400px);
  box-shadow: rgba(0, 0, 0, 0.45) 0px 5px 15px;
}

.imgcover img
{
  width: 100%;
  border-radius: 15px;
  height: 100%;
  object-fit: cover; 
}
.container12 a
{
    color: white ;
    font-weight: 800;
    text-decoration: none;
}
.container12 a:hover
{
    text-decoration: underline;
}
.container12 {
    position: relative;
    width: 100vw; 
    margin-left: calc(-50vw + 50%);
    height: 220px; 
    margin-top: 130px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: left; */
    color: #ffffff;
    overflow: hidden;
}

.container12::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: var(--background-url);
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    filter: brightness(50%) blur(4px);
    z-index: -1; 
    animation: zoomInOut 20s infinite alternate ease-in-out; /* Adjust timing as needed */
}

@keyframes zoomInOut {
  0% {
    transform: scale(1); 
  }
  50% {
    transform: scale(1.2); 
  }
}

@media(max-width: 1260px){
  .root1{
    max-width: 1260px;
    margin-inline: 50px;
  }
}
@media(max-width: 1024px){
  .root1{
    max-width: 1024px;
    margin-inline: 50px;
  }
  .bothdetes {
    display: flex;
    flex-direction: column;
    gap: 0px;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
  .sideid
  {
    display: none;
  }
  .descriptionprop
  {
    margin-top: -20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .imgcover
  {
    position: relative;
    top: -50px
  }
  .toptext
  {
    display: flex;
    flex-direction: column;
    position: relative;
    left: 0%;
    margin-top: -90px;
    justify-content: center;
    align-items: center;
    place-items: center;
    text-align: center;
    place-content: center;
    line-height: 25px;
  }
  .descpr
  {
    width: clamp(300px, 60vw, 450px);
    margin-right: 20px;
  }
  .container12
  {
    height: 300px;
  }
  .svgid
  {
    position: relative;
    left: -8%;
  }
  .bothunder
  {
    margin-top: 100px;
  }
}
@media (max-width:480px)
{
  .root1
  {
    max-width: 480px;
    margin-inline: 50px;
  }
}
</style>
