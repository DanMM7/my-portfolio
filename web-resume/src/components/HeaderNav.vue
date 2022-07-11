<template>
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
</template>

<script>
export default {
  name: "HeaderNav"
}
</script>

<style scoped>
  /* Header
  ==================================================*/

  header {
    text-align: center;
    -webkit-transition: all .5s;
    transition: all .5s;
    height: 65px;
  }

  nav ul {
    display: inline-block;
    padding-left: 0;
    list-style: none;
    padding: 20px;
    margin-bottom: 0;
    -webkit-transition: all .5s;
    transition: all .5s;
  }

  nav li {
    display: inline-block;
    margin: 10px;
  }

  nav li a {
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #444;
    font-size: 11px;
    font-weight: bold;
  }

  .bg-nav {
    background: #fff;
    border-bottom: 1px solid #f3f3f3
  }

  .bg-nav ul {
    padding: 10px;
  }

  a:focus {
    color: #444;
    text-decoration: none;
  }

  a:hover {
    color: #425BB5;
    text-decoration: none;
  }

  a.active {
    color: #425BB5;
  }

</style>