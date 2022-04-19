<template>
  <div class="vuex-container page-container">
    <div class="page-title">Vuex Test Page</div>
    <p>store Root is: {{ reactiveData.text }}</p>
    <p>store doubleCount is: {{ reactiveData.count }}</p>
    <el-button type="primary" @click="double">double</el-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { useStore } from '../store'

const store = useStore()
const reactiveData = reactive({
  text: computed(() => store.state.text),
  count: computed(() => store.state.numFactoryModule.count)
})

const double = () => {
  store.commit('numFactoryModule/DOUBLE_COUNT')
}
</script>

<style scoped lang="stylus"></style>
