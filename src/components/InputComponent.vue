<template>
  <input
    class="input"
    :type="type"
    v-model="value"
    @input="inputCheck"
    @focus="$emit('focus', true)"
    @blur="$emit('focus', false)"
  />
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['focus', 'update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        return this.$emit('update:modelValue', value);
      },
    },
  },
  methods: {
    inputCheck(event) {
      event.target.value = this.modelValue;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input {
  height: 100%;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  background: none;
  color: rgba(0, 0, 0, 0.8);
  // padding: 22px 65px 8px 20px;
  padding: 22px 0 0 0;
  box-sizing: border-box;
  border: none;

  &:focus {
    outline: none;
  }
}
</style>
