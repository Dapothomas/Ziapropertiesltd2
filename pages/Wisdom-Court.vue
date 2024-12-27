<script>
import Footer from '~/components/Footer.vue';
import Navbar from '~/components/Navbar.vue';
import PropertyFeatures from '~/components/PropertyFeatures.vue';
import locationproj from '~/static/svg/locationproj.vue';
import Whyinvest from '~/components/Whyinvest.vue';
import PaymentPlans from '~/components/Payment-plans.vue';
import Wisdommedia from '~/components/Wisdommedia.vue';
import ContactForm from '~/components/Contact-form.vue';
import Wisdomlocation from '~/components/Wisdomlocation.vue';
export default {
  components: { Navbar, Footer, locationproj, PropertyFeatures, Whyinvest, Wisdommedia, PaymentPlans, ContactForm, Wisdomlocation  },
    methods: {
    restartVideo() {
      const video = this.$refs.videoPlayer;
      setTimeout(() => {
        video.currentTime = 0; 
        video.play(); 
      }, 2000); 
    }
  },
  data() {
    return {
      isLoading: true, 
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false; 
    }, 3000); 
    window.addEventListener('scroll', this.handleScroll2);
  },
  methods: {
    handleScroll2() {
      const scrollPosition = window.scrollY;
      const backtext = this.$refs.backtext;

      const scrollFactor = 0.5; 
      const yOffset = scrollPosition * scrollFactor;

      backtext.style.transform = `translateY(${yOffset}px)`;
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll2);
  },
  head: {
    title: 'Wisdom Court',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'stylesheet', href: '/css/styles-laptop.css', media: 'only screen and (min-width: 601px)' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css' }
    ]
  }
}
</script>
<template>
  <div>
    <!-- <div v-if="isLoading" class="loading-screen">
      <h1>Wisdom Court</h1>
      <div class="progress-bar-container">
        <div class="progress-bar"></div>
      </div>
    </div> -->
    <div class="contactback">
    <header>
      <Navbar/>
    </header>
    <WisdomBack/>
    <!-- <div class="wisdomback">
        <div class="blurwis" ref="backtext">
        <h1>Wisdom <span>Court Project</span> </h1>
        <div class="wisdomloc">
            <locationproj/>
            <p>Lekki Phase II, Ajah, Lagos</p>
        </div>     
    </div>
    </div> -->
    <PropertyFeatures/>
    <Whyinvest/>
    <Wisdommedia/>
    <div class="paymentcover">
      <PaymentPlans/>
    </div>
    <Wisdomlocation/>
    <div class="wisdomcont">
      <ContactForm/>
    </div>
    <Footer/>
    </div>
  </div>
</template>

<style scoped>
@keyframes loadProgress {
  0% { width: 0%; }
  100% { width: 100%; }
}
@keyframes fadeInContent {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
@media (min-width: 1260px){
.paymentcover
{
  margin-inline: clamp(-80px, 10vw, -80px) ;
}
}
.wisdomcont
{
  margin: 50px;
}
.contactback {
  opacity: 0; /* Start hidden */
  max-width: 1350px;
  margin: 0 auto;
  animation: fadeInContent 1s forwards;
}
.loading-screen h1
{
  font-size: 50px;
  color: rgb(4, 9, 60);
  font-weight: 500
}
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9); /* Slightly opaque background */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999; /* Ensure it is on top of other elements */
}

.logoz {
  width: 150px; /* Adjust size as needed */
  margin-bottom: 20px;
} 
.progress-bar-container {
  width: 20%;
  height: 10px;
  background-color: #e0e0e0; /* Light grey background */
  border-radius: 5px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  width: 0%;
  background-color: var(--company-color2); /* Blue color */
  border-radius: 5px;
  animation: loadProgress 3s forwards;
}

.blurwis
{
    padding: 50px;
    backdrop-filter: blur(20px);
    position: relative;
    top: -18%;
    left: -4%;
    transform: translateY(0);
    border-radius: 10px;
}
.wisdomback a
{
    color: white ;
    font-weight: 800;
    text-decoration: none;
}
.wisdomback a:hover
{
    text-decoration: underline;
}
.wisdomback h1
{
    font-size: 56px;
    color: #090033;
    font-weight: 600;
}
.wisdomback h1 span
{
  color: var(--company-color);
}
.wisdomback {
    position: relative;
    width: 120%;
    margin-left: -120px; 
    height: 520px; 
    margin-top: 130px; 
    line-height: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    align-items: center;
    color: #000000;
    background-attachment: fixed;
    overflow: hidden;
}
.wisdomback p
{
  font-size: 23px;
  font-weight: 400;
  color: var(--company-color);
}
.wisdomloc
{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.wisdomback::before {
    content: "";
    position: absolute;
    top: 0PX;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/Wallpapers/comingsoon1-removebg (1).webp'); 
    background-position: center;
    background-size: 100%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    background-repeat: no-repeat;
    filter: brightness(80%); 
    z-index: 3;
    /* animation: zoomInOut 20s infinite alternate ease-in-out; */
}
@keyframes zoomInOut {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
}
}

</style>
