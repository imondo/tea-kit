<template>
    <button class="tea-button">按钮</button>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const _ref = ref<HTMLButtonElement>()
defineExpose({
    ref: _ref
})
</script>
