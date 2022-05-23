<template>
  <div class="test-container page-container">
    <div class="root-cmp">
      <h1>根组件</h1>
      <A></A>
      <B></B>
    </div>
  </div>
</template>

<script lang="ts" setup>
import A from '@/components/A.vue'
import B from '@/components/B.vue'
import { onMounted } from 'vue'
import MyCmp from '../utils/test'

onMounted(() => {
  const myCmp:any=new MyCmp();
  myCmp.init();
})
</script>

<style scoped lang="less">
.root-cmp {
  width: 600px;
  height: 600px;
  background: blue;
  color: #fff;
}
</style>
