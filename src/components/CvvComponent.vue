<template>
  <LayoutInput
    placeholder="CVV"
    :filled="!!value"
    :focus="focus"
    :invalid="!cvvValid"
    invalid-msg="В СVV 3 цифры"
  >
    <InputComponent type="password" @focus="setFocus" v-model="value" />
  </LayoutInput>
</template>

<script>
import LayoutInput from './LayoutInput.vue';
import InputComponent from './InputComponent.vue';

export default {
  name: 'CvvComponent',
  components: {
    LayoutInput,
    InputComponent,
  },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    cvvValid: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:modelValue', 'update:cvv-valid'],
  data() {
    return {
      focus: false,
      minLength: 3,
    };
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', this.handler(value));
        this.validate(value);
      },
    },
  },
  methods: {
    setFocus(value) {
      this.focus = value;
    },
    validate(value) {
      const length = value.replace(/[^0-9]/g, '').length;
      const valid = length >= this.minLength;
      this.$emit('update:cvv-valid', valid);
    },
    handler(value) {
      const result = value.replace(/[^0-9]/g, '').slice(0, this.minLength);
      return result;
    },
  },
};
</script>
