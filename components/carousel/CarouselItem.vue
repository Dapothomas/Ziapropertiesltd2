<template>
  <transition :name="transitionEffect">
    <div
      class="carousel-item"
      v-show="currentSlide === index"
      @mouseenter="$emit('mouseenter')"
      @mouseout="$emit('mouseout')"
    >
      <img :src="slide" />
    </div>
  </transition>
</template>

<script>
export default {
  emits: ["mouseenter", "mouseout"],
  props: ["slide", "currentSlide", "index", "direction"],
  computed: {
    transitionEffect() {
      return this.direction === "right" ? "slide-out" : "slide-in";
    },
  },
};
</script>

<style scoped>
.carousel-item img
{
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  animation: zoomInOut 5s infinite alternate ease-in-out; /* Adjust timing as needed */
}

@keyframes zoomInOut {
  0% {
    transform: scale(1); /* Original size */
  }
  100% {
    transform: scale(1.2); /* Zoom in */
  }
}
.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  justify-content: center;
  align-items: center;
}
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}
.slide-out-enter-from {
  transform: translateX(100%);
}
.slide-out-leave-to {
  transform: translateX(-100%);
}
</style>
