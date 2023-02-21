# Magnifier 放大镜

## 基础用法

:::demo

```vue
<template>
  <div class="wrapper">
    <tea-magnifier
      :link="state.link"
      :blank="state.blank"
      :url="state.imgUrl"
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
    'https://www.logosc.cn/uploads/resources/2018/11/24/1543048245.jpg',
  link: 'https://imondo.cn',
  blank: true,
  width: 426,
  height: 282,
  magWidth: 100,
  magHeight: 100,
  alt: '城市'
});
</script>
<style>
.wrapper {
  position: relative;
}
</style>

```

:::
