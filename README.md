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
  <v-code mode="both" :len="4" @change="vcodeChange" @complete="vcodeComplete"></v-code>
</template>
<script>
export default {
  data () {
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
```

### Props
| prop | 类型 | 取值 | 说明 |
|--|--|--|--|
| len | number | - | 验证码长度 |
| groupClass | string | - | 验证码父容器class |
| mode | string | number,letter,mix,all | 输入模式,支持 数字/字母/混合/所有字符 |

### Events
| 事件 | 参数 | 说明 |
|--|--|--|
| change | (code: string[], index: number) | 输入内容改变时触发. code:已输入的验证码, index:当前输入的验证码在code中的索引 |
| complete | (code: string[]) | 输入完成时触发. code:已输入的验证码 |