import { createStore } from 'vuex';
import router from '@/router';

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
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
