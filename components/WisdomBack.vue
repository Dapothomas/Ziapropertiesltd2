<template>
    <section class="wisdom-section">
      <div class="wisdom-content" ref="backtext">
        <div  ref="backtext">
        <h1>Wisdom <br><span>Court Project</span> </h1>
        <div class="wisdomloc">
            <locationproj/>
            <p>Opposite Phase 2, Lekki Gardens</p>
        </div>     
    </div>
      </div>
    </section>
  </template>
  
  <script>
  import locationproj from '~/static/svg/locationproj.vue';
export default {
    components:{locationproj},
  mounted() {
    window.addEventListener('scroll', this.handleScroll2);
  },
  methods: {
    handleScroll2() {
      const scrollPosition = window.scrollY;
      const backtext = this.$refs.backtext;

      const scrollFactor = 0.2; 
      const yOffset = scrollPosition * scrollFactor;

      backtext.style.transform = `translateY(${yOffset}px)`;
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll2);
  }}
</script>
  
  <style scoped>
 .wisdom-section {
  position: relative;
  width: 100vw; 
  margin-top: clamp(05px, 10vw + 20px, 130px);
  height: 100vh;
  margin-left: -5.5rem;
  display: flex;
  justify-content: center;
}
.wisdomloc {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.wisdom-section::before {
  content: '';
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/Wallpapers/comingsoon1-removebg (1).webp'); /* Replace with your image path */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(70%); /* Apply the filter here */
  z-index: 1; /* Place it behind the content */
}
@media (max-width: 750px) {
  .wisdom-section::before {
    height: 50%; /* Set a specific height for smaller screens */
    width: 100%;
    margin-top: 40vh; /* Adjust width if needed */
  }
  .wisdom-content {
  margin-top: 10vh;
}
}
@media (max-width: 1260px) {
  .wisdom-section{
    margin-inline: auto;
  }
}


.wisdom-content {
  color: white; /* Adjust text color for better visibility */
  text-align: center;
  padding: 1rem;
  display: flex;
  /* text-shadow:rgba(0, 0, 0, 0.54) 0px 3px 8px; */
  flex-direction: column;
  margin-left: clamp(-100px, -5vw, 0);
  align-items: center; 
  /* justify-content: center;  */
}

.wisdom-content h1 {
  font-size: clamp(2.8rem, 5vw, 4rem); /* Responsive font size */
  line-height: clamp(2.3rem, 3vw + 1rem, 4rem);
  /* font-size: 56px; */
  color: #090032;
  font-weight: 600;
  margin-bottom: 0.2rem;
}
.wisdom-content span {
    color: var(--company-color);
}
.wisdom-content p {
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--company-color);
}

.wisdom-content button {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  align-items: center;
}

.wisdom-content button:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

  </style>
  