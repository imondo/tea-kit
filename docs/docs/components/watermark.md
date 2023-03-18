# Watermark 水印

向别人展示所有权

## 基础用法

包裹想展示的区域。

:::demo

```vue
<template>
  <tea-watermark text="李白" color="#666">
    <table>
      <thead>
        <tr>
          <th colspan="4">把酒问月·故人贾淳令予问之</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>青天有月来几时？</td>
          <td>我今停杯一问之。</td>
          <td>人攀明月不可得</td>
          <td>月行却与人相随。</td>
        </tr>
        <tr>
          <td>皎如飞镜临丹阙</td>
          <td>绿烟灭尽清辉发</td>
          <td>但见宵从海上来</td>
          <td>宁知晓向云间没</td>
        </tr>
        <tr>
          <td>白兔捣药秋复春</td>
          <td>嫦娥孤栖与谁邻？</td>
          <td>今人不见古时月</td>
          <td>今月曾经照古人。</td>
        </tr>
        <tr>
          <td>古人今人若流水</td>
          <td>共看明月皆如此</td>
          <td>唯愿当歌对酒时</td>
          <td>月光长照金樽里</td>
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
    <tea-checkbox v-model="fullscreen">眼里都是你</tea-checkbox>
    <tea-watermark v-if="fullscreen" text="盈盈一水间，脉脉不得语" color="#666" fullscreen></tea-watermark>
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
