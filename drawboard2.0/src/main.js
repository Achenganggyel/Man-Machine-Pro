import { createApp } from 'vue'
import App from './App.vue'
import { fabric } from 'fabric'

//Vue.config.productionTip = false
let app = createApp(App)

app.use(fabric)
app.mount("#app")

