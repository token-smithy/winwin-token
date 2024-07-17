
import { createApp } from 'vue'
import "@/assets/main.sass"
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();
createApp(App).mount('#app')
