# Magnifier 放大镜

对图片部分放大查看。

## 基础用法

传入图片地址即可。

:::demo

```vue
<template>
  <div class="wrapper">
    <tea-magnifier
      :link="state.link"
      :blank="state.blank"
      :src="state.imgUrl"
      :alt="state.alt"
      :width="state.width"
      :height="state.height"
      :mag-width="state.magWidth"
      :mag-height="state.magHeight"
    ></tea-magnifier>
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue';
const state = reactive({
  imgUrl:
    'https://www.mingtuiw.com/wp-content/uploads/2022/05/liuyifei_jinshenniuzaikudatui-2-541x900.jpg',
  link: 'https://imondo.cn',
  blank: true,
  width: 180,
  height: 300,
  magWidth: 110,
  magHeight: 110,
  alt: '神仙姐姐'
});
</script>
<style>
.wrapper {
  position: relative;
}
</style>

```
:::

## Attributes

| 参数    | 说明   | 类型    | 可选值  | 默认值  |
| ------- | ------ | ------- | --------| ------- |
| src    | 图片源，同原生   | string  | - | - |
| alt    | 原生 alt   | string  | - | - |
| width    | 图片宽度   | number  | - | 375 |
| height    | 图片高度   | number  | - | 375 |
| magWidth    | 放大镜宽度   | number  | - | 150 |
| magHeight    | 放大镜高度   | number  | - | 150 |
| link    | 链接   | string  | - | - |
| blank    | 跳转   | boolean  | true / false | false |
