<template>
  <LayoutInput
    placeholder="CVV"
    :filled="!!result"
    :focus="focus"
    :invalid="invalid"
    invalid-msg="В СVV 3 цифры"
  >
    <InputComponent
      :input-handler="handler(this.minLength)"
      type="password"
      @focus="setFocus"
      @input="setValue"
    />
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
  props: {},
  emits: ['invalid', 'update:modelValue', 'update:cvv-valid'],
  data() {
    return {
      test: '',
      focus: false,
      result: '',
      minLength: 3,
    };
  },
  computed: {
    invalid() {
      const count = this.result.replace(/[^0-9]/g, '').length;
      const status = count > 0 && count < this.minLength;
      return status;
    },
  },
  methods: {
    setTest(value) {
      this.test = value;
    },
    setFocus(value) {
      this.focus = value;
    },
    handler: (minLength) => (e, emit) => {
      const value = e.target.value;
      const number = value.replace(/[^0-9]/g, '').slice(0, minLength);
      e.target.value = number;
      emit('input', number);
    },
    setValue(value) {
      this.result = value;
      this.$emit('update:modelValue', value);
      const valid = this.result && !this.invalid;
      this.$emit('update:cvv-valid', valid);
    },
  },
};
</script>
