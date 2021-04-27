import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store';

new Vue({
    el: '#app',
    store, // or the same thing store: store
    render: h => h(App) // takes a vue js template to be rendered
})
