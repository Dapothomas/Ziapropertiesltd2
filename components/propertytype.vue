<script setup>
import ButtonLink from './ButtonLink.vue';
</script>
<template>
    <div class="proptype">
        <div class="propgrid1">
            <h1>What Service Would you like us to Offer</h1>
            <p class="propgridtxt">
                Get Started by picking what service you would like us to offer you.
            </p>
            <ButtonLink mainText="See More"  :withoutBorder="true"/>
        </div>
        <div class="propgrid2">
            <div class="propgridimg">
                <router-link to=""><p>Rent</p></router-link>
                <img src="Wallpapers/RENT1.webp">
            </div>
            <div class="propgridimg">
                <router-link to=""><p>Land</p></router-link>
                <img src="/Properties/Listings/Ikegun.webp">
            </div>
            <div class="propgridimg">
                <router-link to=""><p>Buy</p></router-link>
                <img src="Listings/House1.webp">
            </div>
        </div>
    </div>
</template>

<style>
.propgridimg
{
    background-color: black;
    width: 100%;
    height: 90%;
    position: relative;
}
.propgridimg p
{
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: 30px;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 2;
    cursor: pointer;
}
.proptype::before
{
  content: '';
  position: absolute;
  left: 0;
  top: 20px;
  width: 100vw; 
  height:110%;
  background-color: var(--company-color2); /* Blue background with 50% opacity */
  z-index: -1; /* Ensure the background is behind the content */
  width: calc(100% + 15rem); 
  margin-left: -7.5rem;
}
.propgrid2
{
    display: flex;
    flex-direction: row;
    background-color: var(--company-color2);
    margin-top: 20px;
    max-width: 800px;
    z-index: 2;
}
.propgrid2 img
{
    width: 100%;
    height: 100%;
    opacity: 0.7;
    z-index: 1;
    transition: all 0.2s ease-in-out;
    object-fit: cover;
    cursor: pointer;
}
.propgrid2 img:hover
{
    opacity: 0.4;
    z-index: 1;
}
.proptype
{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin-top: 120px;
    gap: 40px;
    margin-bottom: 160px;
    padding-top: 50px;
    z-index: 2;
}
.propgrid1
{
    max-width: 300px;
    color: rgb(225, 225, 225);
}
.propgrid1 h1
{
    font-weight: 600;
    font-family: Poppins, sans-serif;
    font-size: 2rem;
    color: rgb(244, 244, 244);
}
.propgridtxt
{
    color: rgb(149, 149, 149);
    margin-bottom: 35px;
}
@media (max-width: 1024px) {
    .propgrid2 {
        height: 60vh; 
        width: 50vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .proptype {
        display: none;
    }
    .propgrid1 h1 {
        font-size: 1.5rem; 
    }
    .propgrid1 h1 {
        font-size: 1.7rem; /* Further reduce font size */
        font-weight: 600;
        text-align: left;
        margin-block: 0;
    }
    .propgridtxt {
        font-size: 1.05rem; /* Further reduce font size */
        text-align: left;
    }
}

@media (max-width: 768px) {
    .propgrid1 h1 {
        font-size: 2rem; /* Further reduce font size */
        font-weight: 800;
        text-align: center;
    }
    .propgrid1 p {
        text-align: center;
    }
    .proptype {
        grid-template-columns: 1fr; 
        justify-content: center;
        align-items: center;
    }

    .propgrid2 {
        height: 60vh; 
        width: 70vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .propgrid1
    {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .propgridtxt {
        font-size: 1.05rem;
    }
    .propgridimg
{
    background-color: black;
    width: 30vw;
    height: 90%;
    position: relative;
}

    /* .propgrid2 img {
        height: auto; 
    } */
}

@media (max-width: 480px) {
    .propgrid1 {
        width: 100%; 
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: start;
    }
    .propgrid2 {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: start;
    }

    .propgrid1 h1 {
        font-size: 2rem; /* Further reduce font size */
        font-weight: 800;
        text-align: left;
        margin-block: 0;
    }
    .proptype::before {
        padding-bottom: 100px;
    }
    .propgridtxt {
        font-size: 1.05rem; /* Further reduce font size */
        text-align: left;
    }
    .propgrid1 p {
        text-align: left;
    }
    .propgridimg
{
    width: 69vw;
    height: 170px;
    position: relative;
}
}
</style>