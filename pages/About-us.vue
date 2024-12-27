<script>
import Footer from '~/components/Footer.vue';
import Navbar from '~/components/Navbar.vue';
import blob from '~/static/svg/blob.vue';
import agentswipe2 from '~/components/agentswipe2.vue';
import corevalues from '~/components/corevalues.vue';

export default {
  components: { agentswipe2, blob, Navbar, Footer, corevalues },
  data() {
    return {
      isLoading: true, // Initialize loading state
    };
  },
  methods: {
    restartVideo() {
      const video = this.$refs.videoPlayer;
      setTimeout(() => {
        video.currentTime = 0; 
        video.play(); 
      }, 3000); 
    },
    handlePageLoad() {
      this.isLoading = false; // Set loading state to false when content is loaded
    }
  },
  mounted() {
    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      this.handlePageLoad(); // Update loading state after a delay
    }, 3000);
  },
  head: {
    title: 'About Us',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'stylesheet', href: '/css/styles-laptop.css', media: 'only screen and (min-width: 601px)' },
    ]
  }
}
</script>

<template>
  <div>
    <div class="contactback">
      <header>
        <Navbar/>
      </header>
      <div class="about-container">
        <h1>About Us</h1>
        <p>Integrity First, Real Estate Excellence Always</p>
      </div>
      <div class="justabout">
      <div class="coverabt1">
    <div class="Aboutus2">
        <div class="abouttext">
            <div class="abouth1d"><h1 class="abouth1">Vision</h1></div>
            <h2 class="abouth2">We are committed to creating a transparent system and environment that 
              ensures that clients feel secure doing business with us amidst concerns of fraud 
              in the real estate industry</h2>
              <div class="abouth1d"><h1 class="abouth1">Mission</h1></div>
            <h2 class="abouth2">To build trust through transparency and fair practices in every transaction.
               We prioritize ethical dealings and client-focused service, creating value for our clients
                and a stronger community.</h2>
        </div>
        <div class="aboutimgs">
            <div class="aboutusimg2">
            <img src="/Wallpapers/aboutpage3.webp">
            </div>
        </div>
    </div>
    </div>
      <div class="servicesabout">
    <h2 class="serviceabh2">OUR SERVICES</h2>
    <div class="servicesflex">
      <h2 class="serviceabh2-2">OUR SERVICES</h2>
      <div class="servflexcont">
      <div class="oneserv">
        <h2>Property Management</h2>
        <p>We oversees and take full responsibility for the maintenance, security and upkeep of properties under its care.</p>
      </div>
      <div class="oneserv">
        <h2>Architectural Design</h2>
        <p>We specialize in marketing properties to attract potential buyers. Our goal is to win the interest of prospects and ensure that our sales strategies meet their needs.</p>
      </div>
      <div class="oneserv">
        <h2>Marketing </h2>
        <p> Right now, we have ongoing and future real estate development projects with the task of financing, building, marketing, and managing them.</p>
      </div>
      <div class="oneserv">
        <h2> Real Estate Development</h2>
        <p> Are you looking for a place to stay, a space to run your commercial activities or how to invest in real estate and you need advice?</p>
      </div>
      <div class="oneserv">
        <h2>Real estate Consultancy</h2>
        <p> Are you looking for a place to stay, a space to run your commercial activities or how to invest in real estate and you need advice?</p>
      </div>
      <div class="oneserv">
        <h2>Survey</h2>
        <p>Zia Properties Limited takes into details the survey of properties ranging from making research, field work and mapping, to working with a renowned and certified property surveyor.</p>
      </div>
      <div class="oneserv" id="specialone">
        <h2>Property Documentation</h2>
        <p>The management of Zia Properties Limited over the years has built strong ties with some of the officials involved in the process of issuing property documents alongside legal practitioners</p>
      </div>
    </div>
    </div>
   </div>
     <corevalues/>
        <agentswipe2/>
      </div>
  </div>
  
  <Footer/>
  </div>
</template>


<style scoped>
.abouth2
{
  /* max-width: 350px; */
  width: (250px, 50vw, 350px)
}
.serviceabh2-2
{
  display: none;
}

.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999; 
}

.logoz {
  width: 150px; 
  margin-bottom: 20px;
}

.progress-bar-container {
  width: 20%;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  width: 0%;
  background-color: var(--company-color2);
  border-radius: 5px;
  animation: loadProgress 3s forwards;
}

@keyframes loadProgress {
  0% { width: 0%; }
  100% { width: 100%; }
}

.contactback {
  /* opacity: 0; */
  /* animation: fadeIn 1s forwards; */
  max-width: 1300px;
  margin: 0 auto;
  /* animation-delay: 3s;  */
}
.justabout {
  max-width: 1300px;
  margin: 0 auto;
}

@keyframes fadeInContent {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/* @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
} */

@keyframes fadeOut {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes slideIn {
  0% {
    transform: translateX(500px) scale(.2);
  }
  100% {
    transform: translateX(0px) scale(1);
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(300px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes expand {
  0% {
    transform: translateX(1400px);
  }
  100% {
    transform: translateX(0px);
  }
}
/* .contactback
{
  animation: fadeOut 1s forwards, fadeIn 1s forwards;
} */
.abouth1d::before
{
  content: '';
  position: absolute;
  top: 50px;
  left: -9%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 4px;
  background-color: var(--company-color);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: -1;
}
@media(max-width:480px){
  .abouth1d::before{
    display: none;
  }
  .abouttext{
    justify-self: center;
    align-self: center;
    text-align: center;
  }
  /* .abouttext .abouth1d {
    margin-left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
    position: relative;
    place-content: center;
  } */
}
/* .abouth1d {
  display: flex;
  justify-content: left;
  margin-left: 70px;
  align-items: center;
  font-family: 'Poppins';
  position: relative;
  width: clamp(200px, 50vw, 300px);
} */
#specialone
{
  border-bottom: none;
}
.aboutho2::before {
  content: '';
  position: absolute;
  top: 30px;
  left: -9%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 4px;
  background-color: var(--company-color2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: -1;
}
.aboutho2 h1
{
    font-weight: 400;
    font-size: 30px;
}
.aboutho2 {
  display: flex;
  justify-content: left;
  margin-left: 70px;
  align-items: center;
  font-family: 'Poppins';
  position: relative;
  width: 100%;
  line-height: 20px;
  font-size: 12px;
  color: rgb(0, 0, 0); 
  text-align: center;
}
.abouth02
{
  color: rgb(37, 37, 37);
  font-size: 19px;
  font-weight: 500;
  margin-block: 0;
  font-family: 'Poppins';
}
.servflexcont
{
  margin-top: 100px ;
}
.servicesflex
{
  color: #d4d4d4;
  display: flex;
  gap: 20px;
  width: clamp(250px, 70vw, 727px);
  justify-content: right;
  position: relative;
  margin-left: -30px;
  flex-direction: column;
}
.abouth2 
{
    color: rgb(65, 65, 65);
    font-weight: 400;
    font-size: clamp(0.88rem, 2vw, 0.87rem);
    width: clamp(300px, 50vw, 400px);
    margin-top: 0;
    margin-bottom: 50px;
    font-family: 'Poppins';
}
.abouth1 
{
    color: var(--company-color2);
    font-size: clamp(1.3rem, 2vw, 1.5rem);
    font-weight: 500;
    margin-bottom: 0;
    margin-top: 30px;
    font-family: 'Poppins';
}
.servicesflex::before
{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  filter: brightness(50%);
  backdrop-filter: blur(10px);
  opacity: 0.8;
  background-color: var(--company-color2); 
  z-index: -1; 
  margin-left: -100px;
}
@media (max-width: 1200px) {
  .servicesflex::before{
    width: 110%;
  }
}

@media (max-width: 992px) {
  .servicesflex::before{
    width: 130%;
  }
}

@media (max-width: 768px) {
  .servicesflex::before{
    width: 150%;
  }
}

@media (max-width: 576px) {
  .servicesflex::before{
    width: 160%;
  }
}

.servicesflex2
{
  color: #e6e6e6;
  display: grid;
  margin-left: 100px;
  margin-top: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.oneserv h2
{
  font-size: clamp(16px, 2.5vw, 20px);
  color: #ffffff;
  width: clamp(150px, 10vw, 200px);
  margin-bottom: 0px;
}
.oneserv p
{
  font-size: clamp(12px, 1.5vw, 14px);
width: clamp(200px, 50vw, 350px);
margin-right: clamp(10px, 2vw, 30px);
margin-top: clamp(5px, 1vw, 10px);
}
.oneserv
{
  text-align: left;
  display: flex;
  border-bottom: 1px solid rgb(161, 161, 161);
  padding: 20px;
  gap: 30px;
  width: clamp(350px, 45vw, 570px);
  color: rgb(176, 176, 176);
}
@media(max-width: 480px){
  .oneserv{
    display: flex;
    position: relative;
    flex-direction: column;
    width: clamp(250px, 45vw, 480px);
    justify-content: center;
    align-items: center;
    text-align: center;
    place-content: center;
  }
  .servicesflex {
    place-items: center;
    place-content: center;
  }
  .contactback {
    max-width: 480px;
    /* margin-inline: 30px; */
  }
  .servicesabout .servicesflex
{
  color: #d4d4d4;
  display: flex;
  gap: 20px;
  max-width: 480px;
  width: 100vw;
  margin-top: 50px;
  position: relative;
  flex-direction: column;
}
.servicesflex::before
{
  content: '';
  position: absolute;
  width: 100%;
  overflow-x: hidden;
  height: 100%;
  filter: brightness(50%);
  backdrop-filter: blur(10px);
  opacity: 0.8;
  padding-right: 23% ;
  background-color: var(--company-color2);
  z-index: -1; 
}
/* .contactback .servicesabout
{
  width: 100vw;
} */
  .contactback .servicesabout::before
  {
    content: '';
  position: absolute;
  left: 0;
  right: 0;
  width: 100vw;
  height: 1126px;
  background-image: url('/Wallpapers/aboutpage4.webp');
  background-size: cover;
  padding-bottom: 300%;
  background-position: center; 
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: brightness(70%);
  background-color: var(--company-color2);
  z-index: -1;
  }
  .servicesabout .serviceabh2
{
  font-size: clamp(1.5rem, 2vw, 2.2rem);
  display: none;
}
.serviceabh2-2
{
  display: flex;
  margin-bottom: -100px;
  margin-top: 68px;
  font-weight: 400;
  justify-content: center;
  align-items: center;

}
}
.serviceabh2
{
  font-size: clamp(1.5rem, 2vw, 2.2rem);
  display: flex;
  font-weight: 400;
  align-items: left;
  margin-left: 70px;
  color: #ffffff;
  margin-block: 50px;
  position: absolute;
  justify-content: left;
}
.serviceabh2::before {
  content: '';
  position: absolute;
  top: 19px;
  left: -13%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 4px;
  background-color: var(--company-color);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 1;
}
.serviceabh2::after {
  content: '';
  position: relative;
  top: 19px;
  left: 13%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 4px;
  background-color: var(--company-color);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 1;
}
.servicesabout::before
{
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  width: 100vw;
  height: 1126px;
  background-image: url('/Wallpapers/aboutpage4.webp');
  background-size: cover;
  padding-bottom: 30%;
  background-position: center; 
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: brightness(70%);
  background-color: var(--company-color2);
  z-index: -1;
}
/* .servicesabout
{
  margin-bottom: 500px;
} */
.Aboutus2
{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-self: center;
    place-items: center;
    gap: clamp(35px, 5vw, 80px);
    justify-self: center;
    justify-content: space-between;
}
@media (max-width: 864px)
{
  .Aboutus2{
    flex-direction: column;
    margin-bottom: 50px;
    display: flex;
  }
}
.aboutusimg2 {
  width: clamp(250px, 50vw, 650px);
  height: clamp(250px, 50vw, 580px);
  position: relative;
  right: 0%;
  place-items: center;
}
.aboutusimg2 img {
  width: 100%; 
  height: 100%;
  object-fit: cover;
  filter: brightness(80%);
  display: block; 
}
.aboutusimg2 video {
  width: 90%; 
  height: 100%;
  object-fit: cover;
  filter: brightness(80%);
  display: block; 
}
.coverabt1
{
    max-width: 1300px;
    margin-inline: 28px;
    /* overflow: hidden; */
}
@media(max-width: 1260px){
  .justabout
{
    max-width: 1260px;
    margin-inline: 50px;
}
}
@media(max-width: 1024px){
  .justabout
{
    max-width: 1024px;
    margin-inline: 30px;
}
}
@media(max-width: 768px){
  .justabout
{
    max-width: 768px;
    margin-inline: 30px;
}
}
.about-container a
{
    color: white ;
    font-weight: 800;
    text-decoration: none;
}
.about-container a:hover
{
    text-decoration: underline;
}
.about-container {
    position: relative;
    width: 100vw; /* Full width of the viewport */
    margin-left: calc(-50vw + 50%); /* Center align the full-width container */
    height: 200px; 
    margin-top: 130px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    overflow: hidden;
}

.about-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; 
    height: 100%;
    background-image: url('/Wallpapers/aboutpage7.webp'); 
    background-position: center;
    background-size: cover;
    background-attachment: fixed; 
    filter: brightness(50%); 
    z-index: -1; 
    animation: 20s zoomInOut infinite;
}
@media (max-width: 1268px) {
    .about-container::before {
        background-attachment: scroll;
    }
}
.about-container p
{
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  margin: 0;
}
.about-container h1
{
  font-size: clamp(1.9rem, 2.5vw, 2.2rem);
  font-family: 'Poppins', sans-serif;
  margin: 0;
}

@keyframes zoomInOut {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15); 
  }
}
</style>
