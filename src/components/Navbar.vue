<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid w-center flex-row justify-content-start">
      <router-link class="navbar-brand" to="/">Home</router-link>
      <router-link class="navbar-brand" to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: 'Navbar',
  setup() {

    return {

    }
  }
})
</script>

<style scoped>

.w-center {
  max-width: 1300px;
  margin: 0 auto;
}

</style>