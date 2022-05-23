<template>
  <div>
    <div class="b-cmp">
      <h1>B组件</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance()
// instance?.proxy?.$Bus.on('on-num', (num) => {
//   console.log(num, '=======>B')
// })
// instance?.proxy?.$Bus.on('*', (type, num) => {
//   console.log(type, num, '===========>B')
// })
const Fn = (num: any) => {
  console.log(num, '===========>B')
}
instance?.proxy?.$Bus.on('on-num', Fn)
instance?.proxy?.$Bus.on('******', Fn)
// setTimeout(() => {
//   instance?.proxy?.$Bus.off('on-num', Fn)
// }, 0)
// instance?.proxy?.$Bus.all.clear();
</script>

<style scoped lang="less">
.b-cmp {
  float: right;
  width: 200px;
  height: 200px;
  background: purple;
  color: #fff;
}
</style>
