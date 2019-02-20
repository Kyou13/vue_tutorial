<template>
  <div>
    <h1>{{title}}</h1>
    <ul class="nav">
      <li>
        <router-link to="/game" class="btn navBtn">ゲーム</router-link>
      </li>
      <li>
        <router-link to="/score" class="btn navBtn">スコア</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'head',
    data () {
      return {
        title: 'ちんぽこ三人衆'
      }
    }
  }
</script>

<style scoped>
  .nav {
    display: flex;
    justify-content: center;
  }
  .nav > li + li {
    margin-left: 24px;
  }
  .nav a {
    text-decoration: none;
  }
</style>
