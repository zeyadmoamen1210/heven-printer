import Vue from 'vue'
import App from './App.vue'
import router from './router'


// import "@/fontawesome-free-5.9.0-web/css/all.css";


// import {
//   initialize
// } from '@/plugins/general.js';

// initialize(store, router);


// import store from './store'


Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' 
//   && !localStorage.getItem('heavenDashboardToken') 
//   && !localStorage.getItem("heavenDashboardUser")) next({ name: 'Login' })
//   else next()
// })

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
