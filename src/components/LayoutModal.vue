<template>
  <div class="layout-container">
    <header v-if="title" class="title-wrapper">
      <p class="title" v-text="title" />
    </header>
    <main class="main-wrapper">
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  name: 'LayoutModal',
  props: {
    title: {
      type: String,
      required: false,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.layout-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  width: 100%;
  padding: 32px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  .title-wrapper {
    display: flex;
    justify-content: space-between;

    .title {
      font-size: 20px;
      line-height: 24px;
      font-weight: 700;
    }
  }

  .main-wrapper {
    padding: 0 24px;
    display: flex;
    justify-content: center;
  }
}
</style>
