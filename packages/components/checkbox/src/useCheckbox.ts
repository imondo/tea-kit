import { computed, inject, watch, defineEmits, ComputedRef } from 'vue';
import { type, hasOwn } from '@tea-kit/utils';

interface ICheckProps {
  name: string;
  border: boolean;
  [x: string]: any;
}

interface ICheckGroup {
  isGroup: ComputedRef<boolean>;
  checkboxGroup: ICheckProps;
  isBtnStyle: boolean;
}

interface ICheckbox {
  isBtn: boolean;
  model: any;
  isChecked: ComputedRef<boolean>;
}

export const useCheckboxGroup = (): ICheckGroup => {
  const checkboxGroup = inject<ICheckProps>('CheckboxGroup', {
    name: '',
    border: false
  });
  const isGroup = computed(
    () => checkboxGroup?.name === 'CheckboxGroup'
  );
  return {
    isGroup,
    checkboxGroup,
    isBtnStyle: (hasOwn(checkboxGroup, 'border') ? checkboxGroup.border : false)
  };
};

export const useCheckbox = (props: any): ICheckbox => {
  const { isGroup, checkboxGroup, isBtnStyle } = useCheckboxGroup();

  const emit = defineEmits<{
    (event: 'update:modelValue', val: any): void
  }>()

  const store = computed(() =>
    checkboxGroup ? checkboxGroup?.modelValue.value : props.modelValue
  );

  const model = computed({
    get() {
      return isGroup.value ? store.value : props.modelValue;
    },
    set(val) {
      if (isGroup.value && Array.isArray(val)) {
        checkboxGroup.changeEvent(val);
      } else {
        emit('update:modelValue', val);
      }
    }
  });

  const isChecked = computed(() => {
    const value = model.value;
    if (type(value) === 'boolean') {
      return value;
    } else if (type(value) === 'array') {
      return value.includes(props.label);
    }
    return false;
  });

  watch(isChecked, (val) => {
    console.log(val)
  })

  return {
    isBtn: isBtnStyle,
    model,
    isChecked
  };
};
