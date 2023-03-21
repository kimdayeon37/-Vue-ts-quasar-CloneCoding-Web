// FILE: main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import { createPinia } from "pinia";
import router from './router';
import mitt from 'mitt'
import store from './store/store.js'

const emitter = mitt()
const myApp = createApp(App).use(createPinia())

myApp.use(createPinia())
myApp.use(router)
myApp.config.globalProperties.emitter = emitter


myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.use(store).mount('#app')
