<template>
  <!-- about -->
  <div class="section" id="about">
    <div class="container">
      <div class="col-md-6" data-aos="fade-up">
        <h4>01</h4>
        <h1 class="size-50">Know <br /> About me</h1>
        <div class="h-50"></div>
        <p v-html="details1"></p>
        <p v-html="details2"></p>
        <div class="h-50"></div> <img src="../assets/img/Signature.svg" width="230" alt="" />
        <div class="h-50"></div>
      </div>
      <div class="col-md-6 about-img-div">
        <div class="about-border" data-aos="fade-up" data-aos-delay=".5"></div>
        <img src="../assets/img/profile.jpg" width="400" class="img-responsive" alt="" align="right" data-aos="fade-right" data-aos-delay="0" />
      </div>
    </div>
  </div>
  <!-- ./about -->
</template>

<script setup>
import {ref} from 'vue'

const details1 = ref('Technological mind with a passion for computer programming. Capable of working with a variety of technology and software solutions, and managing databases. Valuable team member who has experience diagnosing problems and developing solutions.');
const details2 = ref('Experience in Data analysis and business intelligence. Talented individual with unique ideas that contributions in success of the field.');

</script>

<style scoped>
  /* about section
  ==================================================*/

  #about {
    padding: 100px 0;
  }

  .about-img-div img {
    margin: 0 auto;
  }

  .about-border {
    position: absolute;
    border: 10px solid #425BB5;
    width: 400px;
    height: 400px;
    top: 40px;
    left: 50px;
    z-index: 1
  }
</style>