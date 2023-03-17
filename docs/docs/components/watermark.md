# Watermark 水印

向别人展示所有权

## 基础用法

包裹想展示的区域。

:::demo

```vue
<template>
  <tea-watermark text="我的" color="#666">
    <table>
      <thead>
        <tr>
          <th>快点</th>
          <th>下班</th>
          <th>/</th>
          <th>我要</th>
          <th>下班</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>疯狂</td>
          <td>星期五</td>
          <td> / </td>
          <td>明天</td>
          <td>星期六</td>
        </tr>
      </tbody>
    </table>
  </tea-watermark>
</template>

<script setup>
import { reactive, toRefs } from 'vue';
</script>

```

:::

## 全屏

全屏展示。

:::demo

```vue
<template>
  <div>
    <tea-checkbox v-model="fullscreen">要全屏吗</tea-checkbox>
    <tea-watermark v-if="fullscreen" text="快点下班" color="#666" fullscreen></tea-watermark>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const fullscreen = ref(false)
</script>

```

:::

## Attributes

| 参数    | 说明   | 类型    | 可选值  | 默认值  |
| ------- | ------ | ------- | --------| ------- |
| text    | 水印文字   | string  | - | 测试文字 |
| fullscreen    | 是否全屏   | boolean  | - | false |
| rotate    | 旋转角度   | number  | - | -45 |
| fontSize    | 文字大小   | number  | - | 14 |
| opacity    | 文字透明度   | string  | - | 0.4 |
| zIndex    | 水印层级   | string  | - | 9999 |
| color    | 文字颜色   | number  | - | #d7d7d7 |
| offsetY    | y 轴偏移   | number  | - | 110 |
| offsetX    | x 轴偏移   | number  | - | 80 |
