<template>
  <div class="input-container">
    <div
      class="input-wrapper"
      :class="[focus && 'focus', showInvalid && 'invalid']"
    >
      <slot />
      <p
        class="label"
        :class="[(filled || focus) && 'active', showInvalid && 'invalid']"
        v-text="placeholder"
      />
    </div>
    <p v-if="showInvalid" class="invalid-msg" v-text="invalidMsg" />
  </div>
</template>

<script>
export default {
  name: 'LayoutInput',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: 'text',
    },
    filled: {
      type: Boolean,
      required: false,
      default: false,
    },
    focus: {
      type: Boolean,
      required: false,
      default: false,
    },
    invalid: {
      type: Boolean,
      required: false,
      default: false,
    },
    invalidMsg: {
      type: String,
      required: false,
      default: 'Поле заполнено неверно',
    },
  },
  computed: {
    showInvalid() {
      return !this.focus && this.filled && this.invalid;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input-container {
  position: relative;
  width: 100%;
  height: 54px;

  .input-wrapper {
    position: relative;
    height: 100%;
    width: 100%;

    &::after {
      background: #e6e6e6;
      bottom: 0;
      content: '';
      height: 1px;
      left: 0;
      position: absolute;
      width: 100%;
      transition: 0.15s linear;
    }
    &.focus::after {
      background: #067aff;
    }
    &.invalid::after {
      background: #ff3737;
    }

    .label {
      position: absolute;
      top: calc(50% - 24px / 2);
      left: 0;
      font-size: 16px;
      line-height: 24px;
      color: rgba(0, 0, 0, 0.4);
      pointer-events: none;
      transform-origin: top left;
      transition: 0.3s cubic-bezier(0.55, 0.8, 0.5, 1);

      &.active {
        transform: translateY(-7px) scale(0.75);
      }

      &.invalid {
        color: #ff3737;
      }
    }
  }

  .invalid-msg {
    position: absolute;
    height: 28px;
    bottom: -34px;
    text-align: left;
    font-size: 12px;
    line-height: 14px;
    color: #ff3737;
  }
}
</style>
