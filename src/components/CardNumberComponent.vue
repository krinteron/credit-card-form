<template>
  <LayoutInput
    placeholder="Номер карты"
    :filled="!!result"
    :focus="focus"
    :invalid="invalid"
    invalid-msg="Номер карты содержит 16 цифр"
  >
    <InputComponent
      :input-handler="handler(this.minLength)"
      @focus="setFocus"
      @input="setValue"
    />
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
  props: {},
  emits: ['invalid', 'update:modelValue', 'update:card-number-valid'],
  data() {
    return {
      focus: false,
      result: '',
      minLength: 16,
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
    setFocus(value) {
      this.focus = value;
    },

    handler: (minLength) => (e, emit) => {
      const value = e.target.value;
      const number = value
        .replace(/[^0-9]/g, '')
        .slice(0, minLength)
        .split('');
      const count = Math.floor(number.length / 4);
      if (count < 1) {
        e.target.value = number.join('');
        return emit('input', number.join(''));
      }
      const acc = [];
      for (let i = 0; i <= count; i++) {
        acc.push(number.splice(0, 4).join(''));
      }
      const result = acc.join(' ').trim();
      e.target.value = result;
      emit('input', result);
    },
    setValue(value) {
      this.result = value;
      this.$emit('update:modelValue', value);
      const valid = this.result && !this.invalid;
      this.$emit('update:card-number-valid', valid);
    },
  },
};
</script>
