<template>
<div id="app">
<nav>
<router-link to="/">Home</router-link>
<router-link to="/product">商品情報</router-link>
<router-link :to="{ name: 'product', params: { id: 1 } }">商品1</router-link>
</nav>
<!-- ここにパスと一致したコンポーネントが埋め込まれる -->
<transition name="view">
  <router-view />
</transition>
<LoadingOverlay /><!-- オーバーレイ用のコンポーネント -->
</div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style>
.router-link-exact-active { background: #e25193; }
.view-enter-active, .view-leave-active {
  transition: opacity 0.5s;
}
.view-leave-active {
  position: absolute;
}
.view-enter, .view-leave-to {
  opacity: 0;
}
.loading-enter-active {
  transition: all 0.25s;
}
.loading-leave-active {
  transition: all 0.5s ease 0.5s; /* ルータービューが終わった後に */
}
</style>
