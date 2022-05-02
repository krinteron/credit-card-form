<template>
  <div class="form-success">
    <h1>Say goodbye to your money</h1>
    <PlainButton @click="$router.push('/')" text="Bind another one" />
  </div>
</template>

<script>
import PlainButton from '@/components/PlainButton.vue';
export default {
  name: 'SuccessView',
  components: {
    PlainButton,
  },
};
</script>

<style scoped>
.form-success {
  text-align: center;
}
</style>
