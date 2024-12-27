<template>
    <section class="intro-section">
      <div class="intro-content" ref="backtext">
        <h1>Find A Property<br>That <span class="span1">Suits</span><span class="backh1">You</span></h1>
        <p>With commitment to transparency, we bring <br>your dreams to reality.</p>
        <router-link to="/Property">
                <ButtonLink mainText="Explore" :withoutBorder="true" />
              </router-link>
      </div>
    </section>
  </template>
  
  <script>
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll2);
  },
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
  }}
</script>
  
  <style scoped>
 .intro-section {
  position: relative;
  width: calc(100% + 21rem); 
  margin-left: -10rem;
  margin-top: clamp(80px, 10vw + 20px, 130px);
  height: 100vh; /* Adjust the height as needed */
  display: flex;
  justify-content: center;
  align-items: center;
}

.intro-section::before {
  content: '';
  position: absolute;
  top: -40px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/Wallpapers/Transparent3.webp'); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  filter: brightness(60%); /* Apply the filter here */
  z-index: -1; /* Place it behind the content */
}
.intro-content {
  color: white; /* Adjust text color for better visibility */
  text-align: center;
  padding: 1rem;
  margin-top: -10vh;
  display: flex;
  text-shadow:rgba(0, 0, 0, 0.54) 0px 3px 8px;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  justify-content: center; /* Center content vertically */
}

.intro-content h1 {
  font-size: clamp(3rem, 5vw, 4rem); /* Responsive font size */
  line-height: clamp(3.4rem, 3vw + 1rem, 4rem);
  margin-bottom: 0.2rem;
}

.intro-content p {
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  margin-bottom: 1rem;
  margin-top: 0.3rem;
}

.intro-content button {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  align-items: center;
}

.intro-content button:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

  </style>
  