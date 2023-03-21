<template>
  <div>
    <Navbar />
    <div class="container w-center">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Navbar from '@/components/Navbar';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
  },
  setup() {

    return {

    }
  }
})
</script>

<style>

button {
  border-radius: 10px!important;
  border: 1px solid rgba(0, 0, 0, 0.24);
  padding: 5px 15px;
}

.w-center {
  max-width: 1200px;
  margin: 0 auto;
}

</style>