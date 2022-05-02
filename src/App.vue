<template>
  <div class="container">
    <PaymentForm @submit="addPayment" />
  </div>
</template>

<script>
import PaymentForm from './components/PaymentForm.vue';

export default {
  name: 'App',
  components: {
    PaymentForm,
  },
  methods: {
    addPayment(data) {
      this.$store.dispatch('sendPayment', data);
    },
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
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 24px;
  // background: #fffefb;
  // box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
  //   0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}
</style>
