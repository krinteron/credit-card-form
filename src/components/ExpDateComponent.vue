<template>
  <LayoutInput
    placeholder="ММ / ГГ"
    :filled="filled"
    :focus="focus"
    :invalid="!expDateValid"
    invalid-msg="Неправильная дата"
  >
    <div class="exp-date-input">
      <div class="input-field field1">
        <InputComponent @focus="setFocus" v-model="monthValue" />
      </div>
      <span v-if="focus || filled" class="separator" v-text="'/'" />
      <div class="input-field field2">
        <InputComponent @focus="setFocus" v-model="yearValue" />
      </div>
    </div>
  </LayoutInput>
</template>

<script>
import LayoutInput from './LayoutInput.vue';
import InputComponent from './InputComponent.vue';

export default {
  name: 'ExpDateComponent',
  components: {
    LayoutInput,
    InputComponent,
  },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    expDateValid: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:modelValue', 'update:exp-date-valid'],
  data() {
    return {
      focus: false,
      month: '',
      year: '',
    };
  },
  computed: {
    filled() {
      return !!(this.month + this.year).replace(/[^0-9]/g, '').length;
    },
    monthValue: {
      get() {
        return this.month;
      },
      set(value) {
        this.setMonth(this.handler(value));
      },
    },
    yearValue: {
      get() {
        return this.year;
      },
      set(value) {
        this.setYear(this.handler(value));
      },
    },
  },
  methods: {
    setFocus(value) {
      this.focus = value;
    },
    addNull(value) {
      return ('0' + value).slice(-2);
    },
    handler: (value) => {
      const number = value.replace(/[^0-9]/g, '').slice(0, 2);
      return number;
    },
    setMonth(value) {
      this.month = value;
      this.setValue();
    },
    setYear(value) {
      this.year = value;
      this.setValue();
    },
    validate() {
      let valid = false;
      if (+this.month > 0 && +this.month <= 12 && this.year.length) {
        valid = true;
      }
      this.$emit('update:exp-date-valid', valid);
    },
    setValue() {
      const result = `${this.addNull(this.month)}/${this.addNull(this.year)}`;
      this.$emit('update:modelValue', result);
      this.validate();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.exp-date-input {
  display: flex;
  height: 100%;
  width: 100%;

  .input-field {
    &.field1 {
      width: 20px;
      flex-shrink: 0;
    }

    &.field2 {
      min-width: 20px;
    }
  }

  .separator {
    align-self: flex-end;
    line-height: 34px;
    padding: 0 8px 0 8px;
    color: rgba(0, 0, 0, 0.4);
  }
}
</style>
