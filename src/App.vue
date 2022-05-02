<template>
  <div class="container">
    <LayoutModal title="Binding a new card">
      <router-view />
    </LayoutModal>
  </div>
</template>

<script>
import LayoutModal from '@/components/LayoutModal.vue';
export default {
  name: 'App',
  components: {
    LayoutModal,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Source Sans Pro, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3f3f3f;
  margin-top: 60px;
}

p {
  padding: 0 !important;
  margin: 0 !important;
}

.container {
  display: inline-flex;
  box-sizing: border-box;
  justify-content: center;
  gap: 24px;
  width: 700px;

  padding: 24px;
}
</style>
