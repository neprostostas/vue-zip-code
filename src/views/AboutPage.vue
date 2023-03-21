<template>
  <div class="container py-5">
    <p>This page shows information about the application.</p>
    <h2>APIs Used</h2>
    <ul>
      <li><a href="https://api.zippopotam.us/us/10001">https://api.zippopotam.us/us/zipCode</a></li>
      <li><a href="https://ipinfo.io/">ipinfo.io</a></li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'AboutPage',
  setup() {


    return {

    };
  },
})
</script>

<style scoped>

</style>