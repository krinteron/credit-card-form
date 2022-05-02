<template>
  <input
    class="input"
    :type="type"
    @input="(event) => inputHandler(event, $emit)"
    @focus="setFocus"
    @blur="blur"
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
    inputHandler: {
      type: Function,
      required: false,
      default: (event, emit) => emit('input', event.target.value),
    },
  },
  emits: ['focus', 'input'],
  data() {
    return {
      focus: false,
    };
  },
  methods: {
    setFocus() {
      this.$emit('focus', true);
    },
    blur() {
      this.$emit('focus', false);
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
