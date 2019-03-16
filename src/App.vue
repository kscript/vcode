<template>
  <v-code mode="none" :len="4" @vcodeChange="vcodeChange"></v-code>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    vcodeChange (code, index) {
      console.log(code, index)
      // ...
    }
  }
}
</script>
