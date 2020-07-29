<template>
  <v-code ref="vcode" mode="both" :len="5" @change="vcodeChange" @complete="vcodeComplete"></v-code>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    vcodeChange(code, index) {
      console.log("vcodeChange", code, index)
    },
    vcodeComplete(code) {
      console.log("vcodeComplete", code)
    }
  }
}
</script>
