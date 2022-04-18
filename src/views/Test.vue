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
import { provide, ref } from 'vue';

provide('flag', ref(true))

</script>

<style scoped lang="less">
.root-cmp {
  width: 600px;
  height: 600px;
  background: red;
  color: #fff;
}
</style>
