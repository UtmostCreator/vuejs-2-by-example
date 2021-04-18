import Vue from 'vue'
import App from './App.vue'
// const alias = require( 'aliasName' );

export const eventBus = new Vue(); // order is important!! MUST be created before main VUE instance!!!!

new Vue({
  el: '#app',
  render: h => h(App) // takes a vue js template to be rendered
})
