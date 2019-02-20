<template>
<div class="edit-form">
<!-- input type="text" :value="message" @input="doUpdate"-->
<input v-model="message">
</div>
</template>

<script>
import store from '../store.js'
export default {
  name: 'EditForm',
    computed: {
      // message() { return this.$store.getters.message }
      message: {
        get() { return this.$store.getters.message },
        set(value) { this.$store.dispatch('doUpdate', value) }
      }
    },
  methods: {
    // doUpdate(event) {
    //   // input の値を持ってディスパッチ
    //   store.dispatch('doUpdate', event.target.value)
    // }
    update(event) {
      this.$store.dispatch('update')
    }
  }
}
</script>
