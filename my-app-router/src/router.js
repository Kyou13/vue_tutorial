import Vue from 'vue'
import VueRouter from 'vue-router'
// ルート用のコンポーネントを読み込む
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import ProductList from '@/views/ProductList.vue'
// Vuexと同様で最初にプラグインとして登録
Vue.use(VueRouter)
// VueRouterインスタンスを生成する
const router = new VueRouter({
  // URLのパスと紐づくコンポーネントをマッピング
  routes: [
    { path: '/', component: Home },
    // { path: '/unpi', redirect: '/product' },
    // { name: 'product', path: '/product/:id', component: Product }
    {
    path: '/product', // IDが付いていないときはリストを表示
    component: ProductList
    },
    {
      name: 'product',
    path: '/product/:id(\\d+)', // 「:id」がパラメータ 何が入ってもOK
    component: Product,
    props: route => ({ id: Number(route.params.id) })
    }
  ]
})
// 生成したVueRouterインスタンスをエクスポート
export default router
