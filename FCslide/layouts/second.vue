<template>
  <!-- TOP-SECTION -->
  <div class="graph-box">
    <div class="graph-top">
      <h1 class="title">Sales <br> Metrics</h1>
    </div>
    <!-- BOTTOM SECTION -->
    <div class="graph-bottom">
      <div class="box-1">
        <img class="sale-img" src="../images/salesmeter.png" alt="sales-meter">
      </div>
      <div class="box-2">
        <img class="bar-img" src="../images/barchart.png" alt="sale-bar">
      </div>
      <div class="box-3">
        <h1>Source: Unknown</h1>
      </div>
    </div>
  </div>
 </template>


 <style scoped>
  .graph-box {
  background-color: #cbd0fe;
  }

  .graph-top {
    height: 50px;
    width: 100%;
    padding: 20px;
  }

  .graph-bottom,
  .box-1,
  .box-2,
  .box-3 {
    display: flex;
  }
  
  .graph-bottom {
    flex-direction: column;
    background: white;
    padding: 5px 20px;
    width: 100%;
  }

  .box-2 {
    justify-content: center;
    align-items: center;
  }

  .box-3 {
    padding: 30px;
    align-items: flex-end;
    justify-content: flex-end;
  }
  
  .title {
    position: relative;
    bottom: 15px;
  }

  img.sale-img {
    height: 100px;
    width: 250px;
  }

  img.bar-img {
    height: 300px;
    width: 500px;
  }
 </style>