<template>
  <button
    type="button"
    class="btn"
    :class="pretty && 'pretty'"
    @click="$emit('click')"
    v-text="text"
  />
</template>

<script>
export default {
  name: 'PlainButton',
  props: {
    text: {
      type: String,
      required: false,
      default: 'Ok',
    },
    pretty: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['click'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
  height: 48px;
  box-sizing: border-box;
  padding: 0 32px;
  border: 1px solid #e6e6e6;
  border-radius: 16px;
  outline: 0;
  background: transparent;
  user-select: none;
  cursor: pointer;
  transition: background 0.15s linear;

  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.8);

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &.pretty {
    color: #fff;
    background: linear-gradient(
        180deg,
        rgba(255, 204, 0, 0) 0%,
        rgba(255, 204, 0, 0.25) 50%,
        rgba(255, 204, 0, 0.48) 100%
      ),
      #3ecbcb;
    border: transparent;

    &:hover {
      background: #44d77e;
    }
  }

  &:disabled {
    color: rgba(0, 0, 0, 0.4);
    background: #f6f6f6;
    border-color: transparent;
    pointer-events: none;
  }
}
</style>
