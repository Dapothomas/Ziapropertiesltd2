<script setup>
import location from '~/static/svg/location.vue';
import bed from '~/static/svg/bed.vue';
import shower from '~/static/svg/shower.vue';
import ButtonLink from './ButtonLink.vue';
import landsize from '~/static/svg/landsize.vue';
import propertiesData from '~/static/properties.json';

</script>

<template>
    <div class="property-body">
      <div class="property-image">
        <slot name="image"></slot>
      </div>
      <div class="property-details">
        <div class="location">
            <location/>
            <slot name="location"></slot>
        </div>
        <div class="description">
          <slot name="description"></slot>
        </div>
        <div class="details">
          <div class="landsize">
              <slot name="landsize"></slot>
            </div>
          <div class="bed">
            <slot name="bed"></slot>
          </div>
            <div class="shower">
              <slot name="shower"></slot>
            </div>
        </div>
        <div class="price">
          <slot name="button"></slot>
          <slot name="price"></slot>
        </div>
      </div>
    </div>
</template>
  
  <style>
  .price::before
  {
    content: '';
    position: absolute;
    top:-20px;
    transform: translate(-8%);
    width: 120%;
    height: 0.1px;
    background-color: rgba(223, 142, 55, 0.253); /* Blue background with opacity */
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .description
  {
    font-family: 'Poppins';
    color: rgb(85, 84, 84);
    font-weight: 600;
    font-size: 15px;
    width: 100%;
    margin-block: 15px;
  }
  .price
  {
    position: relative;
    display: flex;
    color: rgb(14, 37, 80);
    font-size: 18px;
    font-weight: 700;
    justify-content: space-between;
    margin-top: 25px;
    flex-direction: row;
  }
  .shower
  {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
  .bed
  {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
  .landsize
  {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
  .details
  {
    margin-block: 10px;
    gap: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 12px;
    margin-bottom: 15px;
    color: #0E255080;
    font-weight: 600;
  }
  .location
  {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    font-size: 17px;
  }
  .property-body {
    max-width:370px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
    background-color: rgb(255, 255, 255);
    margin-top: 30px;
    transition: all 0.3s ease;
  }
  .property-body:hover {
    box-shadow: rgba(0, 0, 0, 0.55) 0px 5px 15px;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  
  
  .property-image img {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    object-fit: cover;
  }
  .property-image img:hover {
    width: 103%;
    height: 100%;
    opacity: 0.8;
    cursor: pointer;
    object-fit: cover;
  }
  .property-image {
    width: 100%;
    overflow: hidden;
    height: 250px;
    background-color: rgb(2, 12, 31);
  }
  
  .property-details {
    position: relative;
    margin: 28px;
    margin-top: 20px;
  }
  
  .property-details p {
    margin: 5px 0;
    font-size: clamp(12px, 2.5vw, 14px);
    font-family: 'Poppins';
  }
  /* .avail
  {
    position: absolute;
    background-color: var(--company-color);
    height: 35px;
    -webkit-clip-path: polygon(100% 0, 80% 50%, 100% 100%, 0 100%, 0 50%, 0 0);
    clip-path: polygon(100% 0, 80% 50%, 100% 100%, 0 100%, 0 50%, 0 0);
    margin-top: 10px;
    transition: all 0.3s ease;
    width: 102px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
    z-index: 3;
  } */

  @media (max-width: 768px) {

.property-details {
  margin: 1rem;
}
.location, .bed, .shower, .landsize{
  font-size: 0.875rem; /* 14px equivalent */
  gap: 0.1875rem; /* 3px equivalent */
}

.description {
  font-size: 0.875rem; /* 14px equivalent */
}

.price {
  flex-direction: row;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 1rem;       
}
}

@media (max-width: 480px) {
.property-body {
  margin-top: 1.25rem; /* 20px equivalent */
}

.property-details {
  margin: 1rem;
}

.location, .bed, .shower, .landsize{
  font-size: 0.75rem; /* 12px equivalent */
}

.description {
  font-size: 0.8125rem; 
  margin-block: 0.625rem; 
}
}

@media (max-width: 320px) {

.property-details {
  margin: 0.3125rem; /* 5px equivalent */
}

.location, .bed, .shower, .landsize{
  font-size: 0.6875rem; /* 11px equivalent */
}

.description {
  font-size: 0.75rem; /* 12px equivalent */
  margin-block: 0.5rem; /* 8px equivalent */
}
}


  </style>
  