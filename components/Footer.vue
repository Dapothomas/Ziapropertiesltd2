<script setup lang="ts">
import Facebook from '~/static/svg/facebook.vue';
import Instagram from '~/static/svg/instagram.vue';
import Linkdin from '~/static/svg/linkdin.vue';
import Twitter from '~/static/svg/twitter.vue';
</script>

<template>
    <footer>
        <div class="footer-content">
        <div class="footerup">
        <div class="zialogo-foot">
            <div class="footimg"><img src="/zialogo.webp" alt="logo"></div>
            <h1>Zia Properties ltd.</h1>
            <p class="footquote">We offer real estate services with transparency. 
                INTEGRITY IS OUR WATCHWORD.
                Integrity First, Real Estate Excellence Always
            </p>
            <div class="socials">
                <a href="https://www.instagram.com/ziapropertieslimited/?utm_source=ig_embed&ig_rid=90c2eaf3-0233-4fe6-8987-1c4bfd41add3"><Instagram/></a>
                <a href="https://www.tiktok.com/@zia.properties?_t=8pblM6UxjT4&_r=1"><Twitter/></a>
                <a href="mailto:Ziaproperties100@gmail.com"><Linkdin/></a>
                <a href="https://www.facebook.com/profile.php?id=61560778896841&mibextid=LQQJ4d"><Facebook/></a>
            </div>
        </div>
        <div class="linksfoot">
            <h1>Hot Links</h1>
            <router-link to="/" exact-active-class="active">Home</router-link>
            <router-link to="/Property" exact-active-class="active">Properties</router-link>
            <router-link to="/Wisdom-Court" exact-active-class="active">Projects</router-link>
            <router-link to="/about-us" exact-active-class="active">About us</router-link>
            <router-link to="/contact-us" exact-active-class="active">Contact us</router-link>
        </div>
        <div class="linksfoot">
            <h1 style="color: #12295300" >Hot Links</h1>
            <router-link to="/Wisdom-Court" exact-active-class="active">Upcoming</router-link>
            <router-link to="/About-us" exact-active-class="active">Our Services</router-link>
            <router-link to="/Property" exact-active-class="active">Buy</router-link>
        </div>
        <div class="contactfoot">
            <h1>Contact Info</h1>
            <p>HFP EASTLINE SHOPPING COMPLEX, <br> 
                BLOCK C1 (069/058), ABRAHAM ADESANYA, AJAH, LAGOS STATE.
            </p>
            <div class="footrow">
                <div class="phonefoot">
                <h1>Phone Number</h1>
                <p><a href="tel:08164256102">08164256102</a></p>
                <p><a href="tel:08104453342">08104453342</a></p>
                </div>
                <div class="emailfoot">
                <h1>Email</h1>
                <p><a href="mailto:Ziaproperties100@gmail.com">ziaproperties100@gmail.com</a></p>
                </div>
            </div> 
        </div>
    </div>
</div>
    <div class="footerdown">
        <div class="copyrightstuff">
            <p>Copyright © 2024 - Zia Properties ltd. | Designed by <span style="color:#c38931"> Dapo-Thomas</span> </p>
        </div>
    </div>
    </footer>
</template>

<style>
.footrow a
{
    color: rgb(1, 5, 40);
}
.footerdown
{
    background-color: var(--company-color2) ;
    padding: 1px;
    position: relative;
    left: 0px;
    width: 100vw;
    right: 0px;
    border-top: 2px solid #c38931;
}
.footer-content
{
    max-width: 1300px;
    padding-left: clamp(20px, 5%, 70px);
    margin: 0 auto;
}
.copyrightstuff
{
    display: flex;
    align-items: center;
    justify-content: center;
    /* left: -70px; */
    /* left: 0px;
    right: 0px; */
    max-width: 1300px;
    margin: 0 auto;
    color: white;
}
.contactfoot p
{
    font-weight: 300;
}
.contactfoot
{
    max-width: 400px;
}
.contactfoot h1
{
    font-size: 17px;
}
.footrow
{
    display: flex;
    gap: 30px
}
.hotlinks2
{
    color: rgba(255, 235, 205, 0);
}
.linksfoot a
{
    color: rgb(35, 35, 35);
    text-decoration: none;
    line-height: 35px;
    font-weight: 300;
}
.linksfoot
{
    display: flex;
    flex-direction: column;
    width: 150px;
}
.linksfoot h1
{
    font-size: 17px;
}
footer h1
{
    color: rgb(11, 11, 74);
}
.footimg
  {
    height: 50px;
    width: 90px;
  }
  .footimg img {
    height:auto;
    width: 100%;
    margin-top: -10px;
    transition: 0.5s;
  }
.zialogo-foot
{
    display: flex;
    flex-direction: column;
}
.zialogo-foot h1
{
    font-size: 17px;
    margin-bottom: 0px;
}
.footerup
{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;
    margin-bottom: 10px;
}
footer
{
    margin-top: 70px;
    position: absolute;
    /* padding-left: 70px; */
    left: 0px;
    right: 0px;
    border-top: 1px solid #070a49;
    padding-top: 50px;
    /* max-width: 1300px;
    margin: 0 auto; */
    overflow-x: hidden;
    background-color: rgb(250, 250, 250);
    font-family: 'Poppins';
}
.footquote
{
    color: rgb(42, 42, 42);
    width: 300px;
    margin-bottom: 30px;
    font-weight: 300;
}

@media (max-width: 680px) {
    .zialogo-foot h1
    {
        justify-content: center;
        display: flex;
    }
    .footer-content
    {
        padding-left: 0px;
    }
    .footerup {
    flex-direction: column;
    align-items: center;
  }
  .footimg
  {
    justify-content: center;
    display: flex;
  }
  .socials
  {
    justify-content: center;
    display: flex;
  }
  .linksfoot {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  .contactfoot {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  .footrow {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .copyrightstuff {
    left: 0;
    padding: 10px;
    text-align: center;
  }
  .zialogo-foot
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
  footer
{
    padding-left: 0px;
}
  .footquote {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>