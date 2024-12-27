<template>
    <div class="table-container">
        <h2>Payment Plans</h2>
        <!-- <p class="pre-p">(Pre-Launch Price)</p> -->
        <div class="initial"><p class="initialp">30% INITIAL DEPOSIT!</p></div>
        <div class="bottom-table">
            <div class="initial2"><p class="initialp2">Payment Category :  3 months | 6 months | 12 months | 18 months</p></div>
        </div>
      <table>
        <thead>
          <tr>
            <th>PROPERTY</th>
            <th>TYPE</th>
            <th>UNIT PRICE</th>
            <th>INITIAL DEPOSIT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3 BEDROOM TERRACE/BQ  </td>
            <td>10</td>
            <td>N93M</td>
            <td>27.9M</td>
          </tr>
          <tr>
            <td>2 BEDROOM TERRACE/BQ </td>
            <td>6</td>
            <td>N83M</td>
            <td>24.9M</td>
          </tr>
          <tr>
            <td>2 BED FLAT </td>
            <td>16</td>
            <td>N65M</td>
            <td>19.5M</td>
          </tr>
          <tr>
            <td>1 BED FLAT </td>
            <td>12</td>
            <td>N40M</td>
            <td>12M</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
 <style scoped>
.table-container {
    margin: 0 auto;
    padding: 5vw 10vw; /* Responsive padding */
    max-width: 100%;
    margin-top: 200px;
    background-color: #000f2988;
    position: relative;
}

.table-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-image: url('/comingsoon7.png');
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: brightness(60%);
    z-index: -1;
}
@media (max-width: 1268px) {
    .table-container::before {
        background-attachment: scroll; /* Prevent issues on mobile */
    }
}

h2, .pre-p, .initialp, .initialp2 {
    text-align: center;
    color: white;
    margin-bottom: 1em;
}

h2 {
    font-size: clamp(2rem, 2vw, 3rem); /* Responsive font size */
}

.pre-p {
    font-size: clamp(1rem, 1.5vw, 2rem);
}

.initialp {
    font-weight: 700;
    font-size: clamp(1.5rem, 2vw, 2.5rem);
    color: rgb(236, 129, 36);
}

.initialp2 {
    font-weight: 400;
    font-size: clamp(1rem, 1.5vw, 2rem);
}

table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

th, td {
    padding: 2vw; /* Responsive padding */
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.328);
    font-size: clamp(0.8rem, 1.5vw, 1rem); /* Responsive font size */
}

th {
    background-color: #03072ad8;
    backdrop-filter: blur(5px);
    font-weight: 300;
    color: #ffffff;
}

td {
    background-color: #0c205674;
    backdrop-filter: blur(5px);
    color: #fff;
}
</style>

  