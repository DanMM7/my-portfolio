<template>
  <!-- home -->
  <div class="section" id="home" data-stellar-background-ratio="0.5">
    <div class="container">
      <div class="disply-table">
        <div class="table-cell" data-aos="fade-up" data-aos-delay="0">
          <h4>Dan Malengela</h4>
          <h1>Software developer</h1> </div>
      </div>
    </div>
  </div>
  <!-- ./home -->
</template>

<script>
export default {
  name: "HomeSection"
}
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

  .disply-table {
    display: table;
    height: 100vh;
  }
</style>