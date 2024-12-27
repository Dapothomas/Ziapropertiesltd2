<template>
  <div class="buttons">
    <div class="carousel-control left" @click="$emit('prev')">
      <svg viewBox="0 0 24 24" fill="#none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
  --company-color: #d96c1f;
  --company-color: #d96c1f;
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 5.25V18.75H8.25L8.25 5.25H6.75ZM9.14792 12L18 17.9014L18 6.09862L9.14792 12ZM16.5 8.9014L16.5 15.0986L11.8521 12L16.5 8.9014Z" fill="#ffffff"></path>
        </g>
      </svg>
    </div>
    <div class="carousel-control right" @click="$emit('next')">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.25 18.75L17.25 5.25H15.75L15.75 18.75H17.25ZM14.8521 12L6 6.0986L6 17.9014L14.8521 12ZM7.5 15.0986L7.5 8.90138L12.1479 12L7.5 15.0986Z" fill="#ffffff"></path> </g></svg>
    </div>
  </div>
</template>
<script>
export default {
  emits: ["prev", "next"], // vue v3
};
</script>
<style scoped>
.carousel-control {
  background-color: rgba(116, 69, 12, 0);
  border: none;
  display: inline-block;
  position: absolute;
  height: 40px;
  width: 40px;
  top: calc(50% - 25px);
  color: #f3f3f3;
  cursor: pointer;
}
.carousel-control:hover{
  background-color: rgb(201, 123, 28);
}
.left {
  left: 0;
}
.right {
  right: 0;
}
</style>
