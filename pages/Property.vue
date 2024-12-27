<script>
import Footer from '~/components/Footer.vue';
import Navbar from '~/components/Navbar.vue';
import Projectsall from '~/components/Projectsall.vue';
import Sideproject from '~/components/Sideproject.vue';
export default {
  data() {
    return {
      isLoading: true, // Initialize loading state
    };
  },
  mounted() {
    // Simulate loading completion after progress bar animation
    setTimeout(() => {
      this.isLoading = false; // Hide the loading screen after the progress bar finishes
    }, 3000); // This should match the duration of the loadProgress animation
  },
  head: {
    title: 'Properties',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      // { rel: 'stylesheet', href: '/css/styles-laptop.css', media: 'only screen and (min-width: 601px)' },
    ]
  }
}
</script>
<template>
  <div>
    <!-- <div v-if="isLoading" class="loading-screen">
      <img src="/zialogo.webp" alt="Company Logo" class="logoz" />
      <div class="progress-bar-container">
        <div class="progress-bar"></div>
      </div>
    </div> -->
    <div  class="propertyback">
    <header>
      <Navbar/>
    </header>
    <div class="container1">
        <h1>Our Properties</h1>
        <p><router-link to="/">Home </router-link>/ Properties</p>
    </div>
    <div class="cover-project">
      <div class="projectspage">
        <div class="side"><Sideproject/></div>
        <div class="main"><Projectsall/></div>
    </div>
    </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>
.cover-project
{
  max-width: 1300px ;
    margin: 0 auto;
}
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255); /* Slightly opaque background */
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

@keyframes loadProgress {
  0% { width: 0%; }
  100% { width: 100%; }
}

.propertyback {
  opacity: 0; 
  margin-inline: 20px;
  /* margin-top: 100px; */
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  animation: fadeInContent 1s forwards;
}
@media (max-width: 480px) {
  .propertyback 
  {
    margin: 50px;
  }
}
@media (max-width: 768px) {
  .propertyback 
  {
    margin: 50px;
  }
}
@media (max-width: 1024px) {
  .propertyback 
  {
    margin: 50px;
  }
}
@media (max-width: 1089px) {
  .side 
  {
    display: none;
  }
  .projectspage
  {
    display: flex;
    margin-left: 0;
    justify-content: center;
    align-items: center;
  }
}
@media (min-width: 1089px) {
  .projectspage
  {
    margin-left: clamp(10px, 5vw, 50px);
  }
}
@media (max-width: 1260px) {
  .propertyback 
  {
    margin: 50px;
  }
}

@keyframes fadeInContent {
  0% { opacity: 0; }
  100% { opacity: 1; }
}



main-css
/* .side
{
  margin-left: 
} */
.propertyback body
{
    background-color: rgb(248, 248, 248);
}
.projectspage
{
    display: flex;
    margin-top: 100px;  
    max-width: 1100px;
    /* margin-inline: clamp(20px, 10vw, 80px); */
    gap: 3rem;
}
.container1 a
{
    color: white ;
    font-weight: 800;
    text-decoration: none;
}
.container1 a:hover
{
    text-decoration: underline;
}
.container1 {
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

.container1::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-image: url('/Wallpapers/aboutus.webp'); 
    background-position: center;
    background-size: cover;
    background-attachment: fixed; /* Stretches for desktop */
    filter: brightness(50%); 
    z-index: -1; 
}

/* Add a media query to handle mobile devices */
@media (max-width: 1089px) {
    .container1::before {
        background-attachment: scroll; /* Prevent issues on mobile */
    }
}

</style>
