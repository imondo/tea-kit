<template>
  <div class="tea-watermark" ref="teaWatermark">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Watermark from './watermark'

interface IProps {
  text: string;
  elId?: string;
  rotate: number;
  fontSize: number;
  opacity: string;
  zIndex: string;
  color: string;
  offsetY: number;
  offsetX: number;
  fullscreen: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  text: '测试文字',
  rotate: -45,
  fontSize: 14,
  opacity: '0.4',
  zIndex: '9999',
  color: '#d7d7d7',
  offsetY: 110,
  offsetX: 80,
  fullscreen: false
})
const teaWatermark = ref<HTMLElement | null>(null);
onMounted(() => {
  Watermark.set({...props, el: teaWatermark.value});
})

</script>

<style lang="scss" scoped></style>