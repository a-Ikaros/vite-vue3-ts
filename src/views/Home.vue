<template>
  <div class="home-container page-container">
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>数量</th>
          <th>单价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(item, index) in data">
          <td>{{ item.name }}</td>
          <td>{{ item.num }}</td>
          <td>{{ item.price }}</td>
          <td><button @click="removeGoods(index)">下架</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts" >
import { reactive, toRefs } from 'vue'
type Shop = {
  name: string,
  num: number,
  price: number
}
const data = reactive<Shop[]>([
  { name: '衣服', num: 12, price: 100 },
  { name: '裤子', num: 22, price: 200 },
  { name: '丝袜', num: 111, price: 300 },
])
const removeGoods = (idx: number):void => {
  data.splice(idx, 1);
}
toRefs(data);
</script>

<style scoped lang="stylus">
.home-container {
  .vue-element-plus-logo {
    width 50%
  }
}
</style>
