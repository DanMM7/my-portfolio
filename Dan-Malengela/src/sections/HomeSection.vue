<template>
  <!-- home -->
  <div class="section" id="home" data-stellar-background-ratio="0.5">
    <div class="container">
      <div class="display-table">
        <div class="table-cell" data-aos="fade-up" data-aos-delay="0">
          <h4 v-html="Name"></h4>
          <h1 v-html="Position"></h1>
        </div>
      </div>
    </div>
  </div>
  <!-- ./home -->
</template>

<script setup>
import {ref} from 'vue'

const Name = ref('Dan Malengela');
const Position = ref('Software Engineer');

</script>

<style scoped>
  /* home section
  ==================================================*/

  #home {
    background: url(../assets/home-bg-1.jpg);
    background-size: cover;
    height: 100vh;
  }

  .table-cell {
    display: table-cell;
    vertical-align: middle;
  }

  .display-table {
    display: table;
    height: 100vh;
  }
</style>