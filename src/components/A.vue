<template>
    <div>
        <div class="a-cmp">
            <h1>A组件</h1>
            <button @click="emit1">派发一个事件</button>
            <button @click="emit2">派发二事件</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue';


const instance = getCurrentInstance();
const emit1 = () => {
    instance?.proxy?.$Bus.emit('on-num', 100)
}
const emit2 = () => {
    instance?.proxy?.$Bus.emit('******', 500)
}
</script>

<style scoped lang="less">
.a-cmp {
    float: right;
    width: 250px;
    height: 250px;
    background: rgb(11, 182, 238);
    color: #fff;
}
</style>
