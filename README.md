# ks-vcode
vue 插件, 验证码输入

### 安装
``` npm
  npm i -D ks-vcode
```

### 使用
main.js
``` js
  import Vue from 'Vue'
  import vcode from 'ks-vcode'
  Vue.use(vcode)
```
app.vue
``` vue
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
```
