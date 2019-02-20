import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import Game from './components/Game.vue'
import Score from './components/Score.vue'

Vue.config.productionTip = false

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/game',
      name: 'Janken',
      component: Game
    },
    {
      path: '/score',
      name: 'Score',
      component: Score
    },
    {
      path: '*',
      redirect: '/game'
    }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  template: '<App/>'
})
