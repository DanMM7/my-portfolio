<template>
  <!-- contact -->
  <div class="section" id="contact">
    <div class="container">
      <div class="col-md-12">
        <h4>05</h4>
        <h1 class="size-50" v-html="title"></h1>
        <div class="h-50"></div>
      </div>
      <div class="col-md-4" data-aos="fade-up">

        <h3>Phone Number</h3>
        <p v-html="phone"></p>
        <h3>Email</h3>
        <p v-html="email"></p>
        <h3>Social Network</h3>
        <ul class="social">
          <li><a href="https://www.youtube.com/channel/UCZMukU4Wjz4R6-ZwRrFElzA"><i class="ion-social-youtube"></i></a></li>
          <li><a href="https://github.com/DanMM7"><i class="ion-social-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/dan-malengela/"><i class="ion-social-linkedin"></i></a></li>
        </ul>
        <div class="clearfix"></div>
        <div class="h-50"></div>
      </div>
      <div class="col-md-8" data-aos="fade-up">
        <form class="contact-bg" id="contact-form" name="contact" method="post" novalidate="novalidate">
          <input type="text" name="name" class="form-control" v-model="yname"/>
          <input type="email" name="email" class="form-control" v-model="yemail"/>
          <input type="text" name="phone" class="form-control" v-model="yphone" />
          <textarea name="message" class="form-control" v-model="ymessage"></textarea>
          <button id="submit" type="submit" name="submit" class="btn btn-glance" v-on="sendMail">Send</button>
          <div v-if="success">
            <p class="green textcenter"> Your message was sent successfully! I will be in touch as soon as I can. </p>
          </div>
          <div v-else-if="warning">
            <p>Something went wrong, try refreshing and submitting the form again. </p>
          </div>
          <div v-else>
            <p>Something went wrong, try refreshing and submitting the form again. </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- ./contact -->
</template>

<script setup>
import {ref} from 'vue'

//Headings
const title = ref('Contact  Me');
const phone = ref('(931)-349-9774');
const email = ref('dmmalengela@gmail.com');

//Form
const yname = ref('Your Name');
const yemail = ref('Your Email');
const yphone = ref('Your Phone');
const ymessage = ref('Your Message');

//Send Mail
function sendMail() {
  alert("Message sent!");
}

</script>

<style scoped>
.red {
  color: red;
}

.green {
  color: green;
}

textarea {
  height: 120px;
}
</style>