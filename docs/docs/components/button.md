# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

:::demo 使用 `type` 属性来定义 Button 的样式。

```vue
<template>
  <tea-button>Default</tea-button>
  <tea-button type="primary">primary</tea-button>
  <tea-button type="success">success</tea-button>
  <tea-button type="danger">danger</tea-button>
  <tea-button type="warning">warning</tea-button>
</template>
```
:::

## Attributes

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| type    | 类型   | string  | primary / success / warning / danger / default | default |