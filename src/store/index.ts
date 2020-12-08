import { createStore } from "vuex";

export enum RootMutations {
  SET_MARKDOWN = 'SET_MARKDOWN'
}

export default createStore({
  state: {
    markdown: '',
  },
  mutations: {
    [RootMutations.SET_MARKDOWN]: (state, markdown) => {
      state.markdown = markdown;
    }
  },
  actions: {
    fetchMarkdown: async ({ commit }, url) => {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        const data = await response.text();
        commit(RootMutations.SET_MARKDOWN, data);
      }
    }
  },
  modules: {}
});
