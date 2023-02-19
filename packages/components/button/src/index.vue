<template>
    <button class="t-btn" :class="typeName">
        <slot></slot>
    </button>
</template>
<script setup lang="ts">
import { ref } from 'vue'
type BtnTypes = 'default' | 'primary' | 'danger' | 'warning' | 'success'

const props = defineProps<{
    type: BtnTypes
}>()

const typeName = ref(`t-btn--${props.type}`)
</script>
