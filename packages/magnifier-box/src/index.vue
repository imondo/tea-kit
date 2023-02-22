<template>
  <div
    ref="magnifier"
    class="tea-magnifier-wrap"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <a
      class="tea-mag-wrap"
      :href="link"
      :target="blank ? '_blank' : ''"
      :style="{
        width: magWidth + 'px',
        height: magHeight + 'px'
      }"
    >
      <img
        class="tea-mag-img"
        :src="src"
        :alt="alt"
        :style="{
          width: width + 'px',
          height: height + 'px'
        }"
      />
    </a>
    <a
      class="img-lk"
      :href="link"
    >
      <img
        class="tea-static-img"
        :src="src"
        :alt="alt"
      />
    </a>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue';
import useHooks from './useHooks';
withDefaults(defineProps<{
  width: number,
  height: number,
  magWidth: number,
  magHeight: number,
  blank: boolean,
  link: string,
  src: string,
  alt: string
}>(), {
  width: 375,
  height: 375,
  magWidth: 150,
  magHeight: 150,
  blank: false
})

const magnifier = ref();

onMounted(() => {
  nextTick(() => {
    useHooks(magnifier.value);
  })
})


</script>

<style lang="less" scoped>
.tea-magnifier-wrap {
  position: relative;
  border: 1px solid #ddd;
  box-shadow: 0 0 5px #999;

  .tea-static-img {
    width: 100%;
  }

  .tea-mag-wrap {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 3px #ddd;
    cursor: move;
    overflow: hidden;

    img {
      width: initial;
      max-width: initial;
    }

    &__show {
      display: block;
      transform: scale(1.5);
    }

    .tea-mag-img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>