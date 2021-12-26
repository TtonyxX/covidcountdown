import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueParticles from 'vue-particles'


Vue.use(VueParticles)


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
