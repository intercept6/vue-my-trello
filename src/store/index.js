import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storageName = 'trello-lists';
const savedLists = localStorage.getItem(storageName);

const store = new Vuex.Store({
  state: {
    lists: savedLists ? JSON.parse(savedLists) : [
      {
        title: 'Backlog',
        cards: [
          {body: 'English'},
          {body: 'Mathematics'},
        ],
      },
      {
        title: 'Todo',
        cards: [
          {body: 'Science'},
        ],
      },
      {
        title: 'Doing',
        cards: [],
      },
    ],
  },
  getters: {
    totalCardCount(state) {
      let count = 0;
      state.lists.map(content => count += content.cards.length);
      return count;
    }
  },
  mutations: {
    addList(state, payload) {
      state.lists.push({title: payload.title, cards: []});
    },
    removeList(state, payload) {
      state.lists.splice(payload.listIndex, 1);
    },
    addCardToList(state, payload) {
      state.lists[payload.listIndex].cards.push({body: payload.body});
    },
    removeCardFromList(state, payload) {
      state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1);
    },
    updateList(state, payload) {
      state.lists = payload.lists;
    }
  },
  actions: {
    addList(context, payload) {
      context.commit('addList', payload);
    },
    removeList(context, payload) {
      context.commit('removeList', payload);
    },
    addCardToList(context, payload) {
      context.commit('addCardToList', payload);
    },
    removeCardFromList(context, payload) {
      context.commit('removeCardFromList', payload);
    },
    updateList(context, payload) {
      context.commit('updateList', payload);
    }
  },
  modules: {},
});

store.subscribe((mutation, state) => {
  localStorage.setItem(storageName, JSON.stringify(state.lists));
});

export default store;