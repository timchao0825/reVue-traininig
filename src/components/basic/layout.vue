<template>
  <div>
    <h1>Layout - vue</h1>
    <img class="xmas-img" src="../../assets/xmas.jpg" alt="">
    <div class="tab-wrap">
      <button>tab 1</button>
      <button>tab 2</button>
      <button>tab 3</button>
      <button>tab 4</button>
      <button>tab 5</button>
    </div>

    <div class="card-info-wrap">
      <div class="card-info">
        <!-- img box -->
        <div class="img-box">
          <img src="../../assets/newyear.jpg" alt="">
        </div>
        <!-- info box -->
        <div class="info-box">
          <div class="info">
            <h3>card info text</h3>
            <p>info content</p>
          </div>
          <div class="button-wrap">
            <button class="download">⬇</button>
            <button class="link">🛠</button>
          </div>
        </div>
      </div>
      <div class="card-info">
        <!-- img box -->
        <div class="img-box">
          <img src="../../assets/newyear.jpg" alt="">
        </div>
        <!-- info box -->
        <div class="info-box">
          <div class="info">
            <h3>card info text</h3>
            <p>info content</p>
          </div>
          <div class="button-wrap">
            <button class="download">⬇</button>
            <button class="link">🛠</button>
          </div>
        </div>
      </div>
      <div class="card-info">
        <!-- img box -->
        <div class="img-box">
          <img src="../../assets/newyear.jpg" alt="">
        </div>
        <!-- info box -->
        <div class="info-box">
          <div class="info">
            <h3>card info text</h3>
            <p>info content</p>
          </div>
          <div class="button-wrap">
            <button class="download">⬇</button>
            <button class="link">🛠</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
*{
  box-sizing: border-box;
}
.xmas-img{
  width: 100%;
  /* border:2px solid red; */
}
.tab-wrap{
  display:flex;
  justify-content: space-between;
  margin:10px 0px;
  button{
    border:1px solid #ccc;
    padding:10px 15px;
  }
}
.card-info-wrap{
  /* border:2px solid red; */
  .card-info{
    border:2px solid #ccc;
    overflow: hidden;
    border-radius: 10px;
    margin:0px 15px 20px 15px;
    box-shadow: 2px 2px 2px black;
    .img-box img{
      width:100%;
      height: 150px;
      object-fit: cover;
      @media screen and (min-width: 1280px) {
        height: 300px;
      }
    }
    .info-box{
      /* border:2px solid red; */
      text-align: left;
      padding:5px 15px;
      display: flex;
      h3{
        margin:0;
      }
      p{
        font-size:13px;
        color:#c1c1c1;
        margin:0;
      }
      .info{
        width: 70%;
        /* border:1px solid red; */
      }
      .button-wrap{
        /* border:1px solid blue; */
        width: 30%;
        display:flex;
        align-items: center;
        justify-content: space-around;
        button{
          border:1px solid red;;
          background-color: cornsilk;
          border-radius: 100%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
</style>