import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueParticlesBg from 'particles-bg-vue'
import VueParticles from 'vue-particles'

Vue.use(VueParticlesBg)
Vue.use(VueParticles)


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
