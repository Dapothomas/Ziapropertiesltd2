<template>
    <div class="sidebar2">
    <div class="seccondinnerside2">
        <div class="insidesecond2">
            <h2 class="contactside2" id="feath2">Featured Properties</h2>
            <div class="featuredprop2">
                <div class="featimg2"><img src="/Wisdom-Court/comingsoon1.webp"></div>
                <p class="featp2"><router-link to = "/Wisdom-Court">Subscribe now! Join in on the beautiful Wisdom Court Estate</router-link></p>
            </div>
            <div class="featuredprop2">
                <div class="featimg2"><img src="/Properties/Listings/Ikegun.webp"></div>
                <p class="featp2"><router-link to = "/Properties/2">Own a piece of Lagos for a stunning price of ₦25 Million Naira Only</router-link></p>
            </div>
            <div class="featuredprop2">
                <div class="featimg2"><img src="/Wallpapers/RENT1.webp"></div>
                <p class="featp2"><router-link to = "">Rent one of our finest homes for a very good price</router-link></p>
            </div>
            <div class="featuredprop2">
                <div class="featimg2"><img src="/Wallpapers/aboutus.webp"></div>
                <p class="featp2"><router-link to = "/Contact-us">Need help building a house, contact us.</router-link></p>
            </div>
            <div class="featuredprop2">
                <div class="featimg2"><img src="/Properties/Listings/Ikegun.webp"></div>
                <p class="featp2"><router-link to = "/Properties/12">Own a piece of Lagos for a stunning price of ₦25 Million Naira Only</router-link></p>
            </div>
        </div>
    </div>   
</div>
</template>

<style>
.sidebar2
{
    position: sticky;
    top: 110px;
}
.featp2 a
{
    color: rgb(68, 68, 68);
    text-decoration: none;
}
.featp2 a:hover
{
    text-decoration: underline;
    color: var(--company-color);
}
#feath2
{
    width: 280px;
}
.insidesecond2
{
    padding-top: 10px;
    margin-top: -15px;
}
.featp2
{
    font-size: clamp(0.88rem, 2vw, 0.87rem);
    font-weight: 500;
    margin: 0px;
    width: 380px;
}
.featimg2
{
    width: 140px;
    height: 64px;
}
.featimg2 img
{
    width: 80px;
    height: 100%;
}
.featuredprop2
{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-right: 30px;
    padding-bottom: 24px;
}
.seccondinnerside2
{
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding-left: 30px;
    margin-top: -50px;
    width: clamp(300px, 30vw, 450px);

}
.contactside2
{
    color: rgb(63, 63, 63);
    border-bottom: 1px solid rgba(233, 233, 233, 0);
    padding-bottom: 15px;
}
</style>