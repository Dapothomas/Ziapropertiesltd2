<template>
    <div class="coredive">
        <h1 class="coretitle">CORE VALUES</h1>
        <div class="coreflex">
            <div class="onecore">
                <h1>Integrity</h1>
                <p>With integrity, we are determined to uphold the trust placed in the company, promoting high moral and professional standards in all dealings with clients, colleagues and partners.</p>
            </div>
            <div class="onecore">
                <h1>Trustworthiness</h1>
                <p>We stand out in providing accurate information, acting in the best interests of prospects and clients.</p>
            </div>
            <div class="onecore">
                <h1>Client-centricity</h1>
                <p> i. We value our prospects, so we would not want to scam them. ii. We do not just want to do business with our clients. By putting them first and providing satisfactory services, we also want to build long term relationships.</p>
            </div>
        </div>
    </div>
</template>

<style>
.coredive::before
{
  content: '';
  position: absolute;
  width: 100vw;
  /* height: 1000px; */
  /* margin-top: -52px;
  padding-bottom: 50px; */
  background-size: cover;
  padding-top: 120px;
  left: 0;
  height: 1000px;
  background-position: center;
  display: flex;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: white;
  
  z-index: -1; 
}
.coredive
{
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
    z-index: -1;
    background-color: white;
    overflow: hidden;
}
.coretitle
{
    display: flex;
    justify-content: center;
    color: rgb(9, 2, 41);
    align-items: center;
    font-weight: 300;
    margin-top: 100px;
    font-size: clamp(35px, 5vw, 40px);
    z-index: 1; 
    font-family: 'Poppins';
}
.coreflex
{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 150px;
    margin-top: 70px;
    gap: 10px;
    justify-content: center;
    align-items: center;
}
.onecore h1
{
    margin-bottom: 0px;
    font-size: 25px;
    font-weight: 600;
    color: rgb(3, 22, 66);
}
.onecore p
{
    font-size: 14px;
}
.onecore
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    border: 1px solid rgb(191, 191, 191);
    backdrop-filter: blur(10px);
    padding: 20px;
    width: 400px;
    color: rgb(0, 0, 0);
    border-radius: 0px;
    height: 250px;
    transition: all 0.5s ease-in;
    align-items: center;
    text-align: center;
}
.onecore:hover
{
    border: 1px solid rgb(31, 31, 128);
    box-shadow: rgba(0, 0, 0, 0.54) 0px 3px 8px;
}
</style>