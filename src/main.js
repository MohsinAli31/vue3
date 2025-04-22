import './assets/main.css'
import router from './router'
import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).use(router).mount('#app')
const myApp = createApp(App)

myApp.use(createPinia())

myApp.use(router)

myApp.mount('#app')
