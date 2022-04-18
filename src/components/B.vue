<template>
  <div>
    <div class="b-cmp">
      {{ data }}
      <h1>B组件</h1>
      {{Str}}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject, Ref, ref } from 'vue';
import Bus from '@/Bus'

let data = inject<Ref<boolean>>('flag', ref(false))
let Str = ref<string>('')
Bus.on('on-click', (str: string) => {
  Str.value = str;
})
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
