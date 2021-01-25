import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false

// Creamos una variable que nos va a servir como bus de eventos
export let bus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
