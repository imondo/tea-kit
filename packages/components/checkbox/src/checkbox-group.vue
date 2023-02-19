<template>
    <div class="tea-checkbox-group">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, nextTick, provide, defineEmits } from "vue";
const emit = defineEmits<{
    (event: "update:modelValue", val: any): void;
    (event: "change", val: any): void;
}>();
const props = defineProps<{
    modelValue: Array<any>;
    border?: Boolean;
}>();

const changeEvent = (value) => {
    emit("update:modelValue", value);
    nextTick(() => {
        emit("change", value);
    });
};

const modelValue = computed({
    get() {
        return props.modelValue;
    },
    set(val) {
        changeEvent(val);
    },
});

provide("CheckboxGroup", {
    name: "CheckboxGroup",
    modelValue,
    border: props.border,
    changeEvent,
});
</script>