<template>
  <!-- Preloader
  <div id="preloader">
    <div id="status">
      <div class="preloader" aria-busy="true" aria-label="Loading, please wait." role="progressbar">
      </div>
    </div>
  </div>
   ./Preloader -->
  <h1>{{title}}</h1>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        title:'My Portfolio'
      }
    }
  }
</script>

<style>

  /* Table of Content
  ==================================================
    - Google fonts & font family -
    - typography -
    - General -
      - Preloader -
    - Header -
      - home section -
      - About section -
      - experience section -
      - projects section -
      - Contact section -
      - Responsive media queries -

        #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
  */


  /* Google fonts & font family
  ==================================================*/

  @import 'https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Playfair+Display:400,400i,700,700i,900,900i';

  /*
  font-family: 'Playfair Display', serif;
  font-family: 'Lato', sans-serif;
  font-family: 'Open Sans', sans-serif;
  */


  /* typography
  ==================================================*/

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 80px;
    line-height: 70px;
  }

  h4 {
    font-family: 'Lato', sans-serif;
    text-transform: capitalize;
    letter-spacing: 2px;
    position: relative;
    color: #425BB5;
    margin-left: 40px;
    font-weight: 700;
  }

  h4:before {
    position: absolute;
    width: 30px;
    left: -40px;
    content: "";
    display: block;
    height: 2px;
    background: #425BB5;
    top: 9px;
  }


  /* General
  ==================================================*/

  #app {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 24px;
  }

  .size-50 {
    font-size: 50px;
    line-height: 50px
  }

  .h-50 {
    height: 50px;
  }

  /* preloader
  ==================================================*/

  #preloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 10000
  }

  #status,
  .preloader {
    top: 50%;
    left: 50%;
    position: absolute
  }

  #status {
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    background-position: center;
    margin: -50px 0 0 -50px
  }

  .preloader {
    height: 40px;
    width: 40px;
    margin-top: -20px;
    margin-left: -20px
  }

  .preloader:before {
    content: "";
    display: block;
    position: absolute;
    left: -1px;
    top: -1px;
    height: 100%;
    width: 100%;
    -webkit-animation: rotation 1s linear infinite;
    animation: rotation 1s linear infinite;
    border: 2px solid #425BB5;
    border-top: 2px solid transparent;
    border-radius: 100%
  }

  .preloader>.icon {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 25px;
    width: 10.6px;
    margin-top: -12.5px;
    margin-left: -5.3px;
    -webkit-animation: wink 1s ease-in-out infinite alternate;
    animation: wink 1s ease-in-out infinite alternate
  }

  @media only screen and (min-width:768px) {
    .preloader {
      height: 60px;
      width: 60px;
      margin-top: -30px;
      margin-left: -30px
    }
    .preloader:before {
      left: -2px;
      top: -2px;
      border-width: 2px
    }
    .preloader>.icon {
      height: 37.5px;
      width: 15.9px;
      margin-top: -18.75px;
      margin-left: -7.95px
    }
  }

  @media only screen and (min-width:1200px) {
    .preloader {
      height: 60px;
      width: 60px;
      margin-top: -30px;
      margin-left: -30px
    }
    .preloader>.icon {
      height: 50px;
      width: 21.2px;
      margin-top: -25px;
      margin-left: -10.6px
    }
  }

  @-webkit-keyframes rotation {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0)
    }
    to {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg)
    }
  }

  @keyframes rotation {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0)
    }
    to {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg)
    }
  }

  @-webkit-keyframes wink {
    from {
      opacity: 0
    }
    to {
      opacity: 1
    }
  }

  @keyframes wink {
    from {
      opacity: 0
    }
    to {
      opacity: 1
    }
  }
</style>
