<template>
  <div id="app">
    <p>{{ message }}</p>
    <EditForm />
  </div>
</template>

<script>
// 子コンポーネントを読み込む
import EditForm from '@/components/EditForm.vue'
export default {
  name: 'app',
  components: { EditForm },
  created() {
    console.log(this.$store.state.moduleA.count)
    console.log(this.$store.state.moduleB.count)
    this.$store.commit('moduleA/update')
    this.$store.dispatch('moduleA/actionType')
    console.log(this.$store.state.moduleA.count)
    console.log(this.$store.state.moduleB.count)
    },
  computed: {
    // ローカルのmessageとストアのmessageを同期
    message() { return this.$store.getters.message },
  }
}
</script>
