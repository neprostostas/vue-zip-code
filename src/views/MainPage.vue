<template>
  <div class="container py-5">

    <div class="top-part">

      <form @submit.prevent="search">
        <label class="lbl-custom" for="zip-code">Enter ZIP code:</label>
        <input id="zip-code" type="number" v-model="zipCode">
        <button :disabled="!validZipCode" type="submit" class="btn-render">{{ validZipCode ? 'Render' : 'Enter 5-digit zip-code'}}</button>
      </form>

      <button @click="lookupIP">IP Lookup</button>

    </div>

    <div v-if="!loading && state || city">
      <h2 class="mt-4 mb-4"><strong>Results:</strong></h2>
      <p><strong>State:</strong> {{ state }}</p>
      <p><strong>City:</strong> {{ city }}</p>
      <div v-if="referer || utm">
        <p><strong>HTTP Referer:</strong> {{ referer }}</p>
        <p><strong>UTM Tags:</strong> {{ utm }}</p>
      </div>
      <div v-if="ip || userAgent">
        <p><strong>IP:</strong> {{ ip }}</p>
        <p><strong>User Agent:</strong> {{ userAgent }}</p>
      </div>
    </div>
    <div v-if="!loading" class="custom-center">
      <p></p>
    </div>
    <div v-else class="custom-modal">
      <div class="custom-center">
        <div class="spinner-border text-success" style="width: 4rem; height: 4rem;" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import { searchByZipCode, lookupIPInfo } from '@/api'

export default defineComponent({
  name: 'MainPage',
  setup() {
    const zipCode = ref('')
    const state = ref('')
    const city = ref('')
    const referer = ref('')
    const utm = ref('')
    const ip = ref('')
    const userAgent = ref('')

    const loading = ref()

    const search = async () => {

      loading.value = true;

      if (!zipCode.value) {
        return
      }

      const data = await searchByZipCode(zipCode.value)

      if (!data) {
        return
      }

      state.value = data.state
      city.value = data.city
      referer.value = getQueryParam('referer')
      utm.value = getQueryParam('utm')

      loading.value = false;

    }

    const lookupIP = async () => {

      loading.value = true;

      const data = await lookupIPInfo()

      if (!data) {
        return
      }

      ip.value = data.ip
      city.value = data.city
      state.value = data.region
      userAgent.value = navigator.userAgent

      loading.value = false;
    }

    const getQueryParam = (param) => {
      const urlParams = new URLSearchParams(window.location.search)
      return urlParams.has(param) ? urlParams.get(param) : 'The getQueryParam function is meant to extract query parameters from the URL. If you\'re running the application on localhost and not using query parameters, then the function will not work as expected.'
    }

    const validZipCode = computed(() => {
      const regex = /^\d{5}$/
      return zipCode.value && regex.test(zipCode.value)
    })

    return {
      zipCode,
      state,
      city,
      referer,
      utm,
      ip,
      userAgent,
      loading,
      validZipCode,
      search,
      lookupIP,
    }
  },
})
</script>

<style scoped>

.custom-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
}

.custom-center {
  position: absolute;
  z-index: -1;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

.top-part {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-content: start;
  gap: 20px;
}

.btn-render {
  margin-left: 10px;
}

.lbl-custom {
  padding-right: 10px;
}

</style>