<script setup lang="ts">
import Email from '~/static/svg/email.vue';
import ButtonLink from './ButtonLink.vue';
import Name from '~/static/svg/name.vue';
import Phone from '~/static/svg/phone.vue';
import Message from '~/static/svg/message.vue';
</script>


<template>
    <div class="sidebar">
        <div class="seccondinnerside">
        <div class="insidesecond">
            <h2 class="contactside" id="feath2">Featured Properties</h2>
            <div class="featuredprop">
                <div class="featimg"><img src="Wisdom-Court/comingsoon1.webp"></div>
                <p class="featp"><router-link to = "/Wisdom-Court">Subscribe now! Join in on the beautiful Wisdom Court Estate</router-link></p>
            </div>
            <div class="featuredprop">
                <div class="featimg"><img src="/Properties/Listings/Ikegun.webp"></div>
                <p class="featp"><router-link to = "/Properties/13">Own a piece of Lagos for a stunning price of ₦25 Million Naira Only</router-link></p>
            </div>
            <div class="featuredprop">
                <div class="featimg"><img src="/Wallpapers/RENT1.webp"></div>
                <p class="featp"><router-link to = "">Rent one of our finest homes for a very good price</router-link></p>
            </div>
            <div class="featuredprop">
                <div class="featimg"><img src="/Wallpapers/aboutus.webp"></div>
                <p class="featp"><router-link to = "/Contact-us">Need help building a house, contact us.</router-link></p>
            </div>
        </div>
    </div>
    <div class="sidebox">
        <div class="innerside">
            <h2 class="contactside">Contact Us</h2>
        <form>
            <div class="detailside" id="detailsname">
                <label for="name">Name:</label>
                <div class="input-wrapper">
                <input type="text" placeholder="E.g. John Doe" id="name" name="name" required>
                <Name class="svgin"/>
                </div>
            </div>

            <div class="detailside" >
                <label for="phone">Phone Number:</label>
                <div class="input-wrapper">
                <input type="tel" id="phone" placeholder="Phone Number" name="phone">
                <Phone class="svgin"/>
            </div>
            </div>

            <div class="detailside">
                <label for="email">Email:</label>
                <div class="input-wrapper">
                <input type="email" id="email" placeholder="E.g. John.doe@gmail.com" name="email" required>
                <Email class="svgin" />
                </div>
            </div>

            <div class="detailside">
                <label for="message">Message:</label>
                <div class="input-wrapper">
                <textarea id="message" name="message" placeholder="Write message..." rows="4" required></textarea>
                <Message class="svgin" />
                </div>
            </div>

            <div class="buttside"><ButtonLink mainText="Send Message" :withBg="true" :widthFull="true"/></div>
        </form>
        </div>
    </div>
</div>
</template>

<style>
.featp a
{
    color: rgb(68, 68, 68);
    text-decoration: none;
}
.featp a:hover
{
    text-decoration: underline;
    color: var(--company-color);
}
#feath2
{
    width: 280px;
}
.insidesecond
{
    padding-top: 10px;
    margin-top: -15px;
}
.featp
{
    font-size: 15px;
    font-weight: 500;
    margin: 0px;
    width: 380px;
}
.featimg
{
    width: 180px;
    height: 64px;
}
.featimg img
{
    width: 80px;
    height: 100%;
}
.featuredprop
{
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-right: 30px;
    padding-bottom: 24px;
}
.seccondinnerside
{
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding-left: 30px;
    margin-top: 20PX;
}
.contactside
{
    color: rgb(63, 63, 63);
    border-bottom: 1px solid rgb(233, 233, 233);
    padding-bottom: 15px;
}
.buttside
{
    margin-top: 50px;
}
.detailside input, textarea {
    padding-block:10px;
    padding-left: 15px;
    margin-bottom: 15px;
    border: 1px solid #cccccc00;
    border-radius: 0px;
    background-color: #f1f1f1;
    width: 100%;
    font-size: 14px;
    box-shadow: rgba(50, 50, 93, 0.15) 0px 10px 30px -32px inset, rgba(0, 0, 0, 0.2) 0px 18px 36px -28px inset;
}
.input-wrapper {
    position: relative;
}

.input-wrapper input {
    padding-left: 40px; /* Leave space for the SVG icon */
}
.input-wrapper textarea{
    padding-left: 40px; /* Leave space for the SVG icon */
}

.input-wrapper .svgin {
    position: absolute;
    left: 10px;
    top: 20px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    fill: #888; /* Change this color to match your design */
}
.detailside
{
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 0px;
    margin-bottom: 10PX;
    font-size: 15px;
    align-items: start;
    justify-content: left;
}
.innerside
{
    margin-left: 30px;
    margin-right: 50px;
}
label {
    color: rgb(93, 93, 93);
    font-weight: 560;
}
.sidebox
{
    height: 600px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-top: 20px;
    padding-top: 20px;
}
.sidebar
{
    position: sticky;
    top: -500px;
    max-width: 350px;
    margin-left: -30px
}
</style>
