<template>
  <LayoutInput
    placeholder="Card number"
    :filled="!!value"
    :focus="focus"
    :invalid="!cardNumberValid"
    invalid-msg="Card number contains 16 digits"
  >
    <InputComponent @focus="setFocus" v-model="value" />
  </LayoutInput>
</template>

<script>
import LayoutInput from './LayoutInput.vue';
import InputComponent from './InputComponent.vue';

export default {
  name: 'CardNumberComponent',
  components: {
    LayoutInput,
    InputComponent,
  },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    cardNumberValid: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:modelValue', 'update:card-number-valid'],
  data() {
    return {
      focus: false,
      minLength: 16,
      chunkCount: 4,
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
      this.$emit('update:card-number-valid', valid);
    },

    handler(value) {
      const number = value.replace(/[^0-9]/g, '').slice(0, this.minLength);
      const count = Math.floor(number.length / this.chunkCount);
      let result = number;
      if (count >= 1) {
        let acc = [];
        for (let i = 0; i < number.length; i += this.chunkCount) {
          acc.push(number.slice(i, i + this.chunkCount));
        }
        result = acc.join(' ');
      }
      return result;
    },
  },
};
</script>
