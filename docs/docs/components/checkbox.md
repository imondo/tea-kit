# Checkbox 多选框

一组备选项中进行多选。

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 `checkbox` 按钮后的介绍。

:::demo 在 `tea-checkbox` 元素中定义 `v-model` 绑定变量，单一的 `checkbox` 中，默认绑定变量的值会是 `Boolean`，选中为 `true`。

```vue
<template>
  <tea-checkbox v-model="checked">独钓寒江雪</tea-checkbox>
</template>
<script lang="ts" setup>
    import { ref } from 'vue'
    const checked = ref(true)
</script>
```
:::

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

:::demo
```vue
<template>
    <tea-checkbox-group v-model="checkList">
        <tea-checkbox :label="1">春眠不觉晓</tea-checkbox>
        <tea-checkbox :label="2">处处闻啼鸟</tea-checkbox>
        <tea-checkbox :label="3">夜来风雨声</tea-checkbox>
        <tea-checkbox :label="4">花落知多少</tea-checkbox>
    </tea-checkbox-group>
    <span>checkList: {{ checkList }}</span>
</template>
<script lang="ts" setup>
    import { ref, watch } from 'vue';
    const checkList = ref([1]);
    watch(checkList, list => {
      console.log(`checkbox group：${list}`);
    });
</script>
```
:::

## 按钮样式

按钮样式的多选组合。

:::demo
```vue
<template>
    <tea-checkbox-group v-model="checkList" :border="true">
        <tea-checkbox :label="1">红豆生南国</tea-checkbox>
        <tea-checkbox :label="2">春来发几枝</tea-checkbox>
        <tea-checkbox :label="3">愿君多采撷</tea-checkbox>
        <tea-checkbox :label="4">此物最相思</tea-checkbox>
    </tea-checkbox-group>
</template>
<script lang="ts" setup>
    import { ref, watch } from 'vue';
    const checkList = ref([1]);
    watch(checkList, list => {
      console.log(`checkbox group：${list}`);
    });
</script>
```
:::

## Attributes

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| type    | 类型   | string  | primary / success / warning / danger / default | default |