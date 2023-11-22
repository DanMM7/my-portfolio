<script setup>
import HomeSection from './sections/HomeSection.vue'
import AboutSection from './sections/AboutSection.vue'
import ProjectSection from './sections/ProjectSection.vue'
import CodingSection from "./sections/CodingSection.vue"
import ContactSection from './sections/ContactSection.vue'

</script>

<template>
  <!-- Preloader -->
  <div id="preloader">
    <div id="status">
      <div class="preloader" aria-busy="true" aria-label="Loading, please wait." role="progressbar"></div>
    </div>
  </div>
  <!-- ./Preloader -->

  <!-- header -->
  <header class="navbar-fixed-top">
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <!--<li><a href="#experience">experience</a></li>-->
        <li><a href="#projects">projects</a></li>
        <li><a href="#coding">coding challenge</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </nav>
  </header>
  <!-- ./header -->

  <main>
    <HomeSection />
    <about-section />
    <ProjectSection />
    <CodingSection />
    <ContactSection />
  </main>

  <footer></footer>
</template>

<style scoped>
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

body {
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

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
