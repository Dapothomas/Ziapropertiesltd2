<template>
  <div class="nav-container">
    <div class="topnav" :class="{ hidden: isSticky }">
      <div class="topinfo">
        <div class="phonetop">
          <Phone class="phonetops"/>
          <a href="tel:08164256102">+(234)-8164256102</a></div>
        <div class="phonetop">
          <Email class="phonetops"/>
          <a href="mailto:Ziaproperties100@gmail.com">ziaproperties100@gmail.com</a></div>
      </div>

      <div class="topsoc">
        <a href="https://www.facebook.com/profile.php?id=61560778896841&mibextid=LQQJ4d"><facebooktop/></a>
        <a href="https://www.instagram.com/ziapropertieslimited/?utm_source=ig_embed&ig_rid=90c2eaf3-0233-4fe6-8987-1c4bfd41add3"><instagramtop/></a>
        <a href="https://www.tiktok.com/@zia.properties?_t=8pblM6UxjT4&_r=1"><tiktoktop/></a>
      </div>
    </div>

    <header :class="{ sticky: isSticky }">
      <div class="header-content">
      <div class="logo"><img src="/zialogo.webp" alt="logo"></div>
      <div class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="links" :class="{ open: menuOpen, sticky: isSticky }">
        <div class="logo2" :class="{ open: menuOpen }"><img src="/zialogo.webp" alt="logo"></div>
        <div class="close-btn" :class="{ open: menuOpen }" @click="toggleMenu"><exit></exit></div>
        <router-link to="/" exact-active-class="active">Home</router-link>
        <router-link to="/Property" exact-active-class="active">Properties</router-link>
        <div class="projectsmenu">
          <div class="droplink">
            <router-link to="#">Projects
            <dropdown/></router-link>
          </div>
          <div class="collapsed-project">
            <router-link to="/Wisdom-Court"><div class="innercollapse">Wisdom Court</div></router-link> 
          </div>
        </div>
        <router-link to="/about-us" exact-active-class="active">About us</router-link>
        <router-link to="/contact-us" exact-active-class="active">Contact us</router-link>
        <router-link to="/Property"><ButtonLink mainText="Find a house" :withBg="true" /></router-link>
      </div>
    </div>
    </header>
    <div v-if="menuOpen" class="overlay" @click="toggleMenu"></div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import ButtonLink from './ButtonLink.vue';
import Email from '~/static/svg/email.vue';
import exit from '~/static/svg/exit.vue';
import Phone from '~/static/svg/phone.vue';
import facebooktop from '~/static/svg/facebooktop.vue';
import instagramtop from '~/static/svg/instagramtop.vue';
import tiktoktop from '~/static/svg/tiktoktop.vue';
import Dropdown from '~/static/svg/dropdown.vue';
export default {
  components: {
    Email,
    Phone,
    ButtonLink,
    tiktoktop,
    facebooktop,
    instagramtop,
    Dropdown,
    exit,
  },
  setup() {
    const isSticky = ref(false);
    const menuOpen = ref(false);

    const handleScroll = () => {
      isSticky.value = window.scrollY > 0;
    };

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return { isSticky, menuOpen, toggleMenu };
  }
};

</script>



<style>
.collapsed-project a:hover::after
{
  width: 0%;
  background-color: var(--company-color);
}
/* .collapsed-project a:hover
{
  background-color: var(--company-color2);
  color: #ffffff;
} */
.phonetop a
{
  color: rgb(3, 3, 64);
  font-size: 0.8rem;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* Darkens the background */
  z-index: 50; /* Make sure it appears under the menu but above the rest */
  transition: opacity 0.3s ease-in-out;
}
.logo2
  {
    height: 30px;
    visibility: hidden;
    width: 50px;
    margin-top: 8px;
  }
  .logo2 img {
    height:auto;
    width: 100%;
    margin-top: -10px;
    transition: 0.5s;
  }
  @media(max-width: 968px)
  {
    .logo2
  {
    height: 30px;
    visibility: visible;
    width: 50px;
    margin-top: 8px;
  }
  }
.links.open + .overlay {
  opacity: 1;
  visibility: visible;
}


.innercollapse
{
  padding: 10px;
  /* border: 0.1px solid rgba(241, 241, 241, 0.452); */
  margin: 0;
  width: 100%;
  border-radius: 5px;
  background-color: #ffffff;
}
.innercollapse:hover
{
  background-color: rgba(226, 226, 226, 0.496);

}
.droplink
{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}
.projectsmenu {
  position: relative; 
  height: 100%;
}
.projectsmenu a
{
  height: 100%;
  font-family: 'Poppins';
  display: flex;
  align-items: center;
}
@media (max-width:1000px){
  .collapsed-project{
    padding-inline: 10px;
    padding-top: 10px;
  }
}
@media (min-width:1000px){
  .collapsed-project{
    padding: 10px;
  }
}
.collapsed-project {
    visibility: hidden;
    position: absolute;
    top: 130%;
    margin-top: 3px;
    opacity: 1;
    transition: all 0.3s ease-in-out;
    left: -20px;
    border-radius: 5px;
    width: 200px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 2px;
    flex-direction: column;
    z-index: 400000000;
    border-top: 3px solid var(--company-color);
    /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); */
}

.projectsmenu:hover .collapsed-project,
.projectsmenu .collapsed-project:hover {
    display: flex; 
    top: 90%;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease-in-out;
}
.phonetops
{
  width: 20px;
}
.phonetop
{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
.topsoc
{
  display: flex;
    align-items: center;
    gap: 20px;
    position: relative;
    justify-items: center ;
    align-items: center;
    justify-content: center;
    align-self: center;
    align-content: center;
    justify-self: center;
}
.topinfo
{
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  gap: 30px;
}
/* .nav-container
{
  margin: 0;
} */
.topnav
{
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  /* max-width: 1300px;
  margin: 0 auto; */
  /* margin-left: 40px; */
  color: rgb(10, 10, 69);
  transition: 0.6s;
  width: 90%;
  padding-block: 5px;
  margin-left: 20px;
  padding-inline: 30px;
  font-size: 12px;
  top: 0;
  z-index: 200000000000; 
}
.topnav::before {
  content: '';
  position: absolute;
  align-items: center;
  bottom: 0;
  border-bottom: 1px solid rgba(226, 226, 226, 0.75);
  width: 110vw; /* Extend the border line further */
  margin-left: calc(-100vw + 100%);
  overflow: hidden;
}
.topnav.hidden {
  transition: 0.6s;
  display: none;
}
  header
  {
    display: flex;
    position: fixed;
    /* margin-right: 300px; */
    top:0;
    transform: translateZ(0);
    left: 0;
   right: 0;
    height: 60px;
    transition: 0.6s;
    padding-top: 55px;
    z-index: 2000000000;
  }
  .header-content
  {
    display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto; 
  height: 100%;
  padding: 0 20px; 
  box-sizing: border-box; 
  }
  header.sticky  {
    background-color: rgba(255, 255, 255, 0.896);
    backdrop-filter: blur(10px);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
    padding-block: 20px;
    z-index: 2000000000;
    transform: translateZ(0);
  }
.close-btn {
  position: absolute;
  /* top: 20px; */
  display: none;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
}
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
}
.links.hidden {
  display: none;
}

.hamburger span {
  width: 25px;
  height: 2px;
  background: black;
  transition: 0.4s;
}
@media (max-width: 480px) {
  header {
    flex-direction: row;
    display: flex;
    align-items: flex-start;  
    padding: 15px 15px;
    margin-right: 0px;
    width: 5vw;
    height: auto;
  }
}
@media (max-width: 1000px) {
  .logo
  {
    height: 40px;
    width: 70px;
    margin-left: 10px;
    margin-top: 8px;
  }
  .logo img {
    height:auto;
    width: 100%;
    margin-top: -10px;
    transition: 0.5s;
  }
  header {
    flex-direction: row;
    display: flex;
    align-items: flex-start;
    padding: 15px 15px;
    margin-right: 0px;
    width: 100vw;
    height: auto; }

  header.sticky {
    padding: 17px 15px;
  }
  .droplink
{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 20px;
}
.projectsmenu {
  position: relative; 
  height: 20px;
}
.projectsmenu a
{
  height: 20px;
  font-family: 'Poppins';
  display: flex;
  align-items: center;
}

  .close-btn {
  position: absolute;
  /* top: 20px; */
  display: block;
  right: 30px;
  font-size: 24px;
  cursor: pointer;
}
  .topnav {
    display: none;
  }

  .links {
    position: fixed;
    top: 0px;
    right: 30px;
    gap: 40px;
    height: 100vh;
    /* max-width: 200px; */
    width: 45%;
    display: flex;
    background: rgb(254, 254, 254);
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    visibility: hidden; 
    padding-left: 50px;
    padding-right: 10px;
    padding-top: 50px;
    z-index: 100;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }
  .droplink
{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}
  .links.open {
    transform: translateX(0);
    visibility: visible;
  }
  .links a
  {
    height: 50px;
    padding-bottom: 10px;
    position: relative;
  text-decoration: none;
  color: rgb(14, 37, 80);
  font-weight: 500;
  font-family: 'Poppins';
  display: flex;
  align-items: center;
  }
  .links a.active
  {
    color: var(--company-color);
  }
  /* .collapsed-project a
{
  padding-bottom: -100px;
} */
  .hamburger {
    display: flex;
    margin-right: 16px;
    margin-top: 16px;
  }
}

</style>
