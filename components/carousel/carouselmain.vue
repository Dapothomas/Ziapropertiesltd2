<template>
  <carousel :slides="slides" :interval="3000" controls indicators></carousel>
</template>

<script>
import Carousel from "./Carousel.vue";

export default {
  name: "App",
  components: { Carousel },
  data: () => ({
    slides: [
      "Wisdom-Court/comingsoon1.webp",
      "Wisdom-Court/comingsoon2.webp",
      "Wisdom-Court/comingsoon3.webp",
      "Wisdom-Court/comingsoon5.webp",
      "Wisdom-Court/comingsoon6.webp",
    ],
  }),
};
</script>

<style></style>
