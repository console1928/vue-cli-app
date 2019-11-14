import Vue from 'vue'
import App from './App.vue'
import "vue-slider-component/theme/default.css";
import "vue2-timepicker/dist/VueTimepicker.css";
import './assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
