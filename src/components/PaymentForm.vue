<template>
  <div class="payform-container" :class="cardIsValid && 'valid'">
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
          Последние цифры <br />
          на обороте карты
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
</template>

<script>
import CardNumberComponent from './CardNumberComponent.vue';
import CvvComponent from './CvvComponent.vue';
import ExpDateComponent from './ExpDateComponent.vue';

export default {
  name: 'PaymentForm',
  components: {
    CardNumberComponent,
    CvvComponent,
    ExpDateComponent,
  },
  props: {},
  emits: [],
  data() {
    return {
      focus: false,
      result: '',
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
    setFocus(value) {
      this.focus = value;
    },
    handler(event) {
      this.$emit('input', event.target.value);
    },
    setValue(value) {
      this.result = value;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.payform-container {
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
  gap: 24px;
  width: 424px;
  height: 248px;
  padding: 27px 28px 0 27px;
  // background: #fffefb;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  &.valid {
    border-color: rgb(141, 240, 157);
  }

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
}

.row1 {
  margin-bottom: 22px;
  position: relative;
}
.row2 {
  margin-top: 16px;
  position: relative;
}

.secure {
  display: flex;
  gap: 20px;
}
</style>
