import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
new Vue({
el: '#app',
store, // storeをローカルに登録
render: h => h(App)
})
