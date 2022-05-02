<template>
  <div class="card-bind-container">
    <div class="card-form">
      <div class="col1">
        <div class="row1">
          <CardNumberComponent
            v-model:card-number-valid="cardNumberValid"
            v-model="cardNumber"
          />
          <div class="card_icon"></div>
        </div>
        <div class="row2 cvv_note">
          <p>
            Last numbers <br />
            on the back
          </p>
        </div>
      </div>
      <div class="col2">
        <div class="row1">
          <ExpDateComponent
            v-model:exp-date-valid="expDateValid"
            v-model="expDate"
          />
        </div>
        <div class="row2">
          <CvvComponent v-model:cvv-valid="cvvValid" v-model="cvv" />
          <div class="cvv_icon"></div>
        </div>
      </div>
    </div>
    <div class="card-form-actions">
      <PlainButton @click="cancelHandler" text="Cancel" />
      <PlainButton
        class="btn-bind"
        :pretty="true"
        text="Bind"
        :disabled="!cardIsValid"
        @click="sendCard"
      />
    </div>
  </div>
</template>

<script>
import CardNumberComponent from '@/components/CardNumberComponent.vue';
import CvvComponent from '@/components/CvvComponent.vue';
import ExpDateComponent from '@/components/ExpDateComponent.vue';
import PlainButton from '@/components/PlainButton.vue';

export default {
  name: 'CardFormView',
  components: {
    CardNumberComponent,
    CvvComponent,
    ExpDateComponent,
    PlainButton,
  },
  props: {},
  emits: [],
  data() {
    return {
      cardNumber: '',
      cardNumberValid: false,
      expDate: '',
      expDateValid: false,
      cvv: '',
      cvvValid: false,
    };
  },
  computed: {
    cardIsValid() {
      return this.cardNumberValid && this.expDateValid && this.cvvValid;
    },
  },
  methods: {
    getNumbers(string) {
      return string.replace(/[^0-9]/g, '');
    },
    cancelHandler() {
      alert('there is no way');
    },
    sendCard() {
      const data = {
        cardNumber: this.cardNumber,
        expDate: this.expDate,
        cvv: this.cvv,
      };
      this.$store.dispatch('setData', data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-bind-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 424px;

  .card-form {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 24px;
    width: 424px;
    height: 248px;
    padding: 27px 27px 0 27px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 16px;

    .col1 {
      display: flex;
      flex-direction: column;
      width: 248px;

      .cvv_note {
        font-size: 12px;
        line-height: 14px;
        text-align: right;
        padding-top: 14px;
        color: rgba(0, 0, 0, 0.4);
      }

      .card_icon {
        background-color: #f2f2f2;
        background-image: url('@/assets/img_card.svg');
        border-radius: 3px;
        display: inline-block;
        pointer-events: none;
        position: absolute;
        right: 0;
        bottom: 17px;
        height: 24px;
        width: 36px;
      }
    }
    .col2 {
      display: flex;
      flex-direction: column;
      width: 100px;

      .cvv_icon {
        background-color: #f2f2f2;
        background-image: url('@/assets/cvv_card.svg');
        border-radius: 3px;
        display: inline-block;
        pointer-events: none;
        position: absolute;
        right: 0;
        bottom: 17px;
        height: 24px;
        width: 36px;
      }
    }

    .row1 {
      margin-bottom: 22px;
      position: relative;
    }
    .row2 {
      margin-top: 16px;
      position: relative;
    }
  }

  .card-form-actions {
    display: flex;
    justify-content: end;
    gap: 24px;
  }
}
</style>
