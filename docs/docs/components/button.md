# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

:::demo 使用 `type` 属性来定义 Button 的样式。

```vue
<template>
  <tea-button>春江</tea-button>
  <tea-button type="primary">潮水</tea-button>
  <tea-button type="success">海上</tea-button>
  <tea-button type="danger">明月</tea-button>
  <tea-button type="warning">江天一色</tea-button>
</template>
```
:::

## Attributes

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| type    | 类型   | string  | primary / success / warning / danger / default | default |