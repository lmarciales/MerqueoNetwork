import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // User to simulate the logged user
    user: "Felipe Marciales",
    // List of posts
    posts: [{}]
  },
  mutations: {
    // Add new post to the list
    addPost(state, post) {
      state.posts.push(post);
    },

    // Clean the list removing empty objects
    clearEmptyPosts(state) {
      state.posts = state.posts.filter(
        value => Object.keys(value).length !== 0
      );
    }
  },
  actions: {},
  modules: {}
});
