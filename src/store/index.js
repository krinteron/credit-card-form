import { createStore } from 'vuex';

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    sendCard(_, payload) {
      return fetch('http://localhost:3000/payform/card', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    },
  },
  modules: {},
});
