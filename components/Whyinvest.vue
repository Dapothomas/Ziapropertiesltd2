<script setup>
import ButtonLink from './ButtonLink.vue';
</script>

<template>
    <div class="half-half">
      <div class="half blue">
        <div class="content-left">
        <h1>Why invest?</h1>
        <h2>- Strong Market Demand</h2>
        <p>
          The current state of the local real estate market reveals a pronounced surge in demand, 
          particularly notable within the residential sector, specifically targeting duplexes featuring 2 to 3 bedrooms.
        </p>
        <h2>- For Subscribers</h2>
        <p>
          To partake in this project, all you have to do is to pay a 30% deposit and come to the office. Let’s Discuss!
        </p>
        <h2>- Attractive returns</h2>
        <p>
          Investing in this property comes with an attractive 30% Return on Investment in less than two years.
        </p>
      </div>
      </div>
      <div class="half white">
        <div class="content-right">
            <h1>Description</h1>
            <p class="right-p">Discover luxury living with our 3-bedroom and 2-bedroom terrace duplexes, 
                2-bedroom flats, and miniflats. Enjoy the benefits of a smart home, 24-hour power,
                 constant water supply, top-notch security, and unmatched serenity—all 
                 designed for your comfort and peace of mind.</p>
                 <h2>Property Types</h2>
        <p class="right-p2" :style="{ marginBottom: '40px'}">- 3 BEDROOM TERRACE DUPLEX/BQ (10 Units)<br>
         - 2 BEDROOM TERRACE DUPLEX/BQ (6 Units)<br>
          - 2 BEDROOM FLAT (16 Units)<br>
          - MINIFLAT (12 Units)
        </p>
        <router-link to="/Contact-us"><ButtonLink mainText="Subscribe Now" :withBg="true" :withoutBorder="true" :textMargin="true"  /></router-link>
      </div>
      </div>
      <div class="center-image">
        <img src="/Wisdom-Court/comingsoon6.webp" alt="Coming Soon">
      </div>
    </div>
  </template>
  
  <style>
  .content-left h2
  {
    color: #ff8336;
    font-size: 18px;
    line-height: 15px;
    font-weight: 500;
  }
  .half-half {
    margin-top: 120px;
    display: flex;
    /* margin-right: -100px; */
    position: relative; 
  }
  @media (max-width: 910px)
  {
    .half-half {
    margin-top: 120px;
    display: flex;
    /* margin-right: -100px; */
    flex-direction: column;
    position: relative; 
  }
  .center-image
  {
    display: none;
  }
  .half-white .content-right
  {
    margin-right: 60px;
  }
  .content-left, .content-right {
    text-align: left;
    max-width: 80%;
    margin-left: 0px;
}
}
@media (min-width: 910px)
  {
    .content-right
{
    margin-left: 60px;
    text-align: left;
    max-width: 50%;
}
.content-left{
  text-align: left;
  max-width: 50%;
  margin-left: 0px;
}
  }
  .half {
    flex: 1; /* Each half takes up 50% of the width */
    display: flex;
    padding-block: 100px;
    justify-content: center;
  }
  
  .blue {
    background-color: var(--company-color2);
    color: white; 
    margin-left: -100px;
    padding-left: 100px;
  }
  
  .white {
    background-color: rgb(255, 255, 255);
    color: black; 
    /* margin-right: -100px;
    padding-right: 100px; */
  }
  


.content-right h2
{
    font-weight: 300;
    color: #010330;
    font-size: 22px;
    margin-bottom: 0px;
}
.content-left h1,
.content-right h1 
{
    font-size: 30px;
    font-weight: 300;
}
.content-left p
{
    font-size: 0.8rem;
    font-weight: 300;
    margin-top: 20px;
    margin-bottom: 40px;
}
.right-p 
{
    font-size: 0.8rem;
    font-weight: 500;
    margin-top: 0px;
    line-height: 25px;
    margin-bottom: 20px;
}
.right-p2 
{
    font-size: 0.8rem;
    font-weight: 500;
    margin-top: 20px;
    line-height: 30px;
    margin-bottom: 20px;
}
  .center-image {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1; 
    width: clamp(150px, 80vw, 200px);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 19px 38px, rgba(0, 0, 0, 0.52) 0px 15px 12px;
    height: clamp(200px, 50vw, 400px);
  }
  .center-image img
  {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  </style>
  