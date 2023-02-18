<template>
    <button class="t-btn" :class="typeName">
        <slot></slot>
    </button>
</template>
<script setup lang="ts">
import utils from '@tea-kit/utils'
import { ref } from 'vue'
console.log(utils.type({}))

type BtnTypes = 'default' | 'primary' | 'danger' | 'warning' | 'success'

const props = defineProps<{
    type: BtnTypes
}>()

const typeName = ref(`t-btn--${props.type}`)
</script>
