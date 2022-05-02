<template>
  <LayoutInput
    placeholder="ММ / ГГ"
    :filled="filled"
    :focus="focus"
    :invalid="invalid"
    invalid-msg="Неправильная дата"
  >
    <div class="exp-date-input">
      <div class="input-field field1">
        <InputComponent
          :inputHandler="handler"
          @focus="setFocus"
          @input="setMonth"
        />
      </div>
      <span v-if="focus || filled" class="separator" v-text="'/'" />
      <div class="input-field field2">
        <InputComponent
          :inputHandler="handler"
          @focus="setFocus"
          @input="setYear"
        />
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
  props: {},
  emits: ['valid', 'update:modelValue', 'update:exp-date-valid'],
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
    invalid() {
      let status = false;
      if (
        this.filled &&
        (+this.month < 1 || +this.month > 12 || !this.year.length)
      ) {
        status = true;
      }
      return status;
    },
  },
  methods: {
    setFocus(value) {
      this.focus = value;
    },
    addNull(value) {
      return ('0' + value).slice(-2);
    },
    handler: (e, emit) => {
      const value = e.target.value;
      const number = value.replace(/[^0-9]/g, '').slice(0, 2);
      e.target.value = number;
      emit('input', number);
    },
    setMonth(value) {
      this.month = value;
      this.setValue();
    },
    setYear(value) {
      this.year = value;
      this.setValue();
    },
    setValue() {
      const result = `${this.addNull(this.month)}/${this.addNull(this.year)}`;
      this.$emit('update:modelValue', result);
      const valid = !this.invalid && this.filled;
      this.$emit('update:exp-date-valid', valid);
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
