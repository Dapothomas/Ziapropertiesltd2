<template>
    <div class="Aboutus">
        <div class="abouttext">
            <div class="aboutho">
        <h1>
          ABOUT US
        </h1>
      </div>
            <h1 class="abouth0">Integrity First, Real Estate Excellence Always</h1>
            <h1 class="abouth1">Vision</h1>
            <h2 class="abouth2">We are committed to creating a transparent system and environment that 
              ensures that clients feel secure doing business with us amidst concerns of fraud 
              in the real estate industry.</h2>
              <h1 class="abouth1">Mission</h1>
            <h2 class="abouth2">To build trust through transparency and fair practices in every transaction.
               We prioritize ethical dealings and client-focused service, creating value for our clients 
               and a stronger community.</h2>
        </div>
        <div class="aboutimgs">
            <div class="aboutusimg">
                <img src="Wallpapers/aboutus2.webp">
            </div>
        </div>
    </div>
</template>

<style>
.aboutimgs { /* Set the width of the container */
  align-self: center;
  justify-self: center;
  place-items: center;
}

.aboutusimg {
  width: clamp(250px, 50vw, 430px);
  border: 10px solid rgb(255, 255, 255);
  position: relative;
  place-items: center;
}
.aboutusimg::before
{
    content: '';
  position: absolute;
  top: 75px;
  left: 75px;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background-color: var(--company-color2);
  z-index: -1;
}
.aboutusimg img {
  width: 100%; /* Make the image responsive */
  height: auto; /* Maintain aspect ratio */
  display: block; /* Remove bottom whitespace */
}
.Aboutus
{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: clamp(200px, 10vw, 300px);
    align-self: center;
    place-items: center;
    padding-bottom: clamp(20px, 10vw, 100px);
    justify-self: center;
    justify-content: space-between;
}
@media (max-width: 840px)
{
  .Aboutus
{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    gap: clamp(50px, 10vw, 300px);
    align-self: center;
    place-items: center;
    padding-bottom: clamp(20px, 10vw, 100px);
    justify-self: center;
    justify-content: space-between;
}
}
.abouttext
{
    max-width: 500px;
}

.aboutho::before {
  content: '';
  position: absolute;
  top: 25px;
  left: -10%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 4px;
  background-color: var(--company-color2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: -1;
}
.aboutho h1
{
    font-weight: 400;
    font-size: clamp(1.4rem, 2vw, 1.8rem);
}
.aboutho {
  display: flex;
  justify-content: left;
  margin-left: 68px;
  align-items: center;
  font-family: 'Poppins';
  position: relative;
  width: 95%;
  line-height: 20px;
  color: rgb(0, 0, 0); 
  text-align: center;
}
.abouth2 
{
    color: rgb(65, 65, 65);
    font-weight: 400;
    font-size: clamp(0.88rem, 2vw, 0.87rem);
    width: clamp(300px, 50vw, 400px);
    margin-top: 0;
    margin-bottom: 50px;
    font-family: 'Poppins';
}
.abouth1 
{
    color: var(--company-color2);
    font-size: clamp(1.3rem, 2vw, 1.5rem);
    font-weight: 500;
    margin-bottom: 0;
    margin-top: 30px;
    font-family: 'Poppins';
}
.abouth0 
{
    color: rgb(71, 71, 71);
    font-size: clamp(0.88rem, 2vw, 1.1rem);
    font-weight: 500;
    margin-top: 0;
    font-family: 'Poppins';
}
@media (max-width: 480px) {
  .Aboutus {
    gap: 30px;
  }
}
@media (max-width: 1000px) {
  .Aboutus {
    margin-inline: 50px;
  }
}
</style>