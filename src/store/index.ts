import { PostModel } from "@/models/post.model";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [{}]
  },
  mutations: {
    addPost(state, post) {
      state.posts.push(post);
    },

    clearEmptyPosts(state) {
      state.posts = state.posts.filter(
        value => Object.keys(value).length !== 0
      );
    }
  },
  actions: {},
  modules: {}
});
