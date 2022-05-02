import { createStore } from 'vuex';
import router from '@/router';

export default createStore({
  state: {
    cardNumber: '',
    expDate: '',
    cvv: '',
  },
  getters: {
    getCardData(state) {
      const getNumbers = (string) => {
        return string.replace(/[^0-9]/g, '');
      };
      const cardData = {
        card_number: getNumbers(state.cardNumber),
        exp_date: state.expDate,
        cvv: getNumbers(state.cvv),
      };
      return cardData;
    },
  },
  mutations: {
    setData(state, { cardNumber, expDate, cvv }) {
      state.cardNumber = cardNumber;
      state.expDate = expDate;
      state.cvv = cvv;
    },
  },
  actions: {
    setData({ commit, dispatch }, data) {
      commit('setData', data);
      dispatch('demoSendCard');
    },

    demoSendCard() {
      router.push('success');
    },

    sendCard(_, payload) {
      return fetch('http://localhost:3000/payform/card', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (response.status !== 200) throw new Error();
          return response.json();
        })
        .then((data) => {
          console.log(data);
          router.push('success');
        })
        .catch(() => alert('something broke'));
    },
  },
  modules: {},
});
