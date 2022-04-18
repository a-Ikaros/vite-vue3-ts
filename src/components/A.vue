<template>
    <div>
        <div class="a-cmp">
            <h1>A组件</h1>
            {{ data }}
            <button @click="emitB">派发一个事件</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue';
import Bus from '@/Bus'

let data = inject('flag', ref(true))

let str = ref<string>('112233')
const emitB = () => {
    str.value = str.value.split('').reverse().join('');
    Bus.emit('on-click', str)
}
</script>

<style scoped lang="less">
.a-cmp {
    float: right;
    width: 250px;
    height: 250px;
    background: blue;
    color: #fff;
}
</style>
