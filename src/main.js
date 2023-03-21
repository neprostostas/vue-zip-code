import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)

// Use Vue Router
app.use(router)

// Mount the Vue app to the DOM
app.mount('#app')