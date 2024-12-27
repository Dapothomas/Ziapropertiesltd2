<template>
  <div class="index-page"  :class="{ open: menuOpen }">
    <div v-if="isLoading" class="loading-screen">
      <img src="/zialogo.webp" alt="Company Logo" class="logoz" />
      <div class="progress-bar-container">
        <div class="progress-bar"></div>
      </div>
    </div>

    <div v-else class="contactback" >
      <div class="section">
        <header>
      <Navbar/>
    </header>
      </div> 
        <!-- <div class="background">
          <div class="backtext" ref="backtext">
            <h1 class="backh">Find A <span class="backh1">House</span><br>That <span class="span1">Suits</span><Span>You</Span></h1>
            <p class="backp">Want to find a home? We are ready to help you find one that suits your lifestyle and needs.</p>
            <div class="buttons">
              <router-link to="/property">
                <ButtonLink mainText="Get Started" :withBg="true" />
              </router-link>
              <router-link to="/contact-us">
                <ButtonLink mainText="Contact Us"   :withoutBorder="true" />
              </router-link>
            </div>
        </div>
          <div class="backimg">
            <img src="/Wallpapers/HOMEPAGE.webp">
          </div>
        </div> -->
        <!-- <div class="background_image">
          <div class="background_content">
            <h1>Find yourself a perfect home</h1>
          </div>
        </div> -->
        <div class="section1">
          <BackgroundImage/>
        </div>
      <div class="body">
      <div class="section2-container">
        <div class="section2">
        <LazyPropertieshome id="Properties" />
        <div class="wrapper">
    <div class="typing-demo">
      A fast growing <span>Real Estate Firm.</span>
    </div>
</div>
      <div class="autoShow">
        <Services id="services" />
      </div>
      </div>
      </div>
      
      
      <div class="section4">
        <div class="autoShow">
        <Aboutus />
      </div>
      </div>
      <div class="sectionbtw" :style="{ marginTop: '50px' }">
        <Agentshome />
      </div>
      <div class="section5">
        <Comingsoon />
      </div>
      <div class="sectionbtw2">
        <Propertytype />
      </div>
      <div class="section6" :style="{ marginTop: '100px' }">
        <h1 class="diveinto" >Dive into the World of Livable Assets</h1>
        <p class="diveintop" >Make your Dream home A Reality</p>
        <Swiper />
      </div>
    </div>
      <div class="footer-container">
        <Footer />
      </div>
      
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import ButtonLink from '~/components/ButtonLink.vue';
import Propertieshome from '~/components/Propertieshome.vue';
import Services from '~/components/Services.vue';
import Comingsoon from '~/components/Comingsoon.vue';
import Aboutus from '~/components/Aboutus.vue';
import Footer from '~/components/Footer.vue';
import BackgroundImage from '~/components/BackgroundImage.vue';
import Swiper from '~/components/swiper.vue';
import Agentshome from '~/components/agentshome.vue';
import Propertytype from '~/components/propertytype.vue';

export default {
  data() {
    return {
      isLoading: true, 
    };
  },
  mounted() {
     setTimeout(() => {
      this.isLoading = false; 
       }, 3000);  },
       
  methods: {
    handleScroll2() {
      const scrollPosition = window.scrollY;
      const backtext = this.$refs.backtext;

      const scrollFactor = 0.5; 
      const yOffset = scrollPosition * scrollFactor;

      backtext.style.transform = `translateY(-${yOffset}px)`;
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll2);
  },
  head: {
    title: 'Zia Properties',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'stylesheet', href: '/css/styles-laptop.css', media: 'only screen and (min-width: 601px)' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css' }
    ]
  }
};
</script>
<style scoped>
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

.contactback {
  opacity: 0; /* Start hidden */
  animation: fadeInContent 1s forwards;
}

@keyframes fadeInContent {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@media (max-width: 1200px) {
  /* .backh {
    font-size: 3rem; 
  } */
  
  .backp {
    font-size: 0.9rem; 
  }
  
}
@media (max-width: 968px) {
  .index-page.open {
    filter: brightness(40%);
  }
}

@media (max-width: 768px) {
  /* .background {
    margin-top: 60px;
  } */
  .backimg img
  {
    display: flex;
  position: absolute;
  justify-content: end;
  filter: brightness(70%);
  top: 120px;
  text-align: end;
  align-items: center;
  right: -20px;
  max-width: 800px;
  margin: 0 auto;
  background-size: cover; /* Ensures the image covers the entire background */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  justify-items: end;
  height: 88vh;
  z-index: 1;
  }
  .backh {
    font-size: 3rem; /* Adjust font size for small screens */
  }
  
  .backp {
    font-size: 0.9rem; /* Adjust font size for small screens */
  }
  
  .backtext {
    margin-left: 32px; /* Adjust margins for small screens */
    margin-right: 32px; /* Add margin for smaller screens */
    display: flex;
    justify-content: center;
    align-items: center;
  }

}

@media (max-width: 480px) {
  .backh {
    font-size: 2.5rem; 
    line-height: 3rem;
  }
  
  .backp {
    font-size: 0.9rem; 
  }
  
  .backtext {
    margin-top: 32px;
  }
}
</style>