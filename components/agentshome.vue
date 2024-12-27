<script setup>
import Agentswipe from './Agentswipe.vue';
import agentswipehome from './agentswipehome.vue';
</script>

<template>
    <div class="agentsgrid">
        <div class="agentgrid1">
            <h1>Our dedicated real estate agents</h1>
            <p>Our Real Estate team strive to get the best possible result for
               our clients by tailoring to your individual needs and providing superior friendly.
            </p>
        </div>
        <div class="agentsgrid2">
            <!-- <Agentswipe/> -->
            <agentswipehome/>
        </div>
    </div>
</template>

<style>
.agentsgrid {
    position: relative;
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
    flex-wrap: wrap;
    margin-top: clamp(80px, 10vw, 120px); 
    z-index: 3;
    gap: clamp(20px, 5vw, 43px);
}
.agentgrid1::before {
  content: '';
  clip-path: inset(20% 0 0 0);
  position: absolute;
  left: 0vw;
  margin-top: -230px  ;
  width: calc(100% + 15rem); 
  margin-left: -7.5rem;
  height: 150%;
  background-color: #081a3c; 
  z-index: -1; 
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}
.agentsgrid2 {
    max-width: 800px; /* Ensure it doesn't exceed the screen width */
    justify-content: center;
    display: flex;
    align-items: center;
    width: 100%; /* Makes the container take up the full available width */
}
/* .agentsgrid::before
  {
    content: '';
  position: relative;
  background-color: #9f9f9f;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw; 
  box-shadow: rgb(38, 57, 77) 0px 10px 10px -10px;
  height: 1px; 
  z-index: 3; 
  margin-bottom: clamp(50px, 5vw, 420px);
  margin-left: calc(-50vw + 50%);
  } */
  /* @media(max-width: 1209px)
{
  .agentsgrid::before 
{
  margin-top: 740px;
}
} */
.agentgrid1
{
    max-width: 300px;
    color: rgb(217, 217, 217);
    margin-top: 40px;
}
.agentgrid1 p
{
    color: rgb(136, 136, 136);
}
</style>