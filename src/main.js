import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import demoBlock from './components/demo-block.vue'
import 'highlight.js/styles/color-brewer.css'

createApp(App)
  .use(router)
  .use(ElementPlus)
  .component('demoBlock', demoBlock)
  .mount('#app')
