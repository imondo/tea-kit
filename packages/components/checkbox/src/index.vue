<template>
  <label class="checkbox-wrap" :class="{
    'checkbox-wrap-button': isBtn,
    'is-checked-text': isBtn ? false : isChecked,
    'is-checked': isBtn && isChecked,
  }">
    <input type="checkbox" v-model="model" :value="label" @change="onChange" />
    <i v-if="!isBtn" class="check-icon">✓</i>
    <slot></slot>
  </label>
</template>
<script setup lang="ts">
import { defineEmits } from 'vue';
import { useCheckbox } from "./useCheckbox";
const props = defineProps<{
  modelValue: {
    type: [Boolean, Number, String];
    default: () => undefined;
  };
  label: {
    type: [Boolean, Number, String];
  };
}>();
const emit = defineEmits<{
  (event: "change", value: boolean, e: Event): void;
}>();
const { isBtn, model, isChecked } = useCheckbox(props);

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target?.checked ? true : false;
  emit("change", value, event);
};
</script>