<template>
  <div class="v-code" :class="mode ? 'v-code-' + mode.split(' ')[0] : ''">
    <div class="input-group" :class="groupClass" v-for="(vo, index) in len" :key="index">
      <input type="text" v-model="code[index]" maxlength="1" @input="input(index, $event)" @keyup="keyup(index, $event)" ref="inputEl">
    </div>
  </div>
</template>
<script>
export default {
  name: "v-code",
  data () {
    return {
      code: [],
      activeIndex: 0,
      inputEl: []
    }
  },
  props: {
    len: {
      type: Number,
      default: 4
    },
    mode: {
      type: String,
      default: 'none'
    },
    groupClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    vcodeChange () {
      this.$emit("vcodeChange", this.code, this.activeIndex)
    },
    keyup (index, $event) {
      let value = this.code[index]
      let num = $event.keyCode
      if (num === 8 || num === 37) {
        if (!value || num === 37) {
          this.toggleInput(index, index - 1)
        }
      } else if (num === 39) {
        this.toggleInput(index, index + 1)
      } else if (
        num >= 65 && num <= 90
        ||
        num >= 48 && num <= 57
        ||
        num >= 96 && num <= 105
      ) {
        if (value) {
          this.$set(this.code, index, $event.key)
          this.toggleInput(index, index + 1)
          this.activeIndex = index
          this.vcodeChange()
        }
      }
    },
    input (index, $event) {
      if (/^[a-zA-Z0-9]$/.test($event.data)){
        let value = this.code[index]
        if (value !== '') {
          this.toggleInput(index, index + 1)
        }
        this.activeIndex = index
        this.vcodeChange()
      } else {
        this.$set(this.code, index, '')
      }
    },
    toggleInput (curr, index) {
      if (index >= 0 && index < this.len) {
        this.$refs.inputEl[curr].blur()
        this.$refs.inputEl[index].focus()
      }
    }
  }
}
</script>
<style>
.v-code {
  display: table;
  width: 100%;
}
.v-code .input-group{
  display: table-cell;
  padding: 0px 10px;
}
.v-code .input-group input{
  box-sizing: border-box;
  width: 100%;
  padding: 5px 10px;
  text-align: center;
  outline: none;
}
.v-code-none .input-group input{
  color: transparent;
  text-shadow: 0 0 0 #555;
  border: 1px solid #aaa;
}
.v-code-none .input-group input:focus{
  text-shadow: 0 0 0 #42abff;
  border: 1px solid #42abff;
}
</style>
