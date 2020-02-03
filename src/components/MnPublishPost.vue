<template>
  <div class="publish__post">
    <div class="publish__post--input">
      <label>
        <textarea
          :placeholder="inputPlaceholderTxt"
          @blur="hideMobileButton"
          @focus="showMobileButton"
          rows="1"
          v-model="postMsg"
        />
      </label>
    </div>
    <div class="publish__post--button" v-if="inTextArea">
      <button :disabled="postMsg.length <= 0" @click="savePost">
        {{ publishBtnTxt }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { PostModel } from "@/models/post.model";
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "PublishPost",

  created(): void {
    this.toggleMobileButton();
    this.cleanPostList();
  },

  data() {
    return {
      // Mobile max width
      mobileWidth: 768,
      // Flag to show button field in mobile.
      inTextArea: true,
      // View constants
      inputPlaceholderTxt: "Escribe aquí tu estado",
      publishBtnTxt: "Publicar",
      postMsg: ""
    };
  },

  computed: {
    ...mapState(["posts"])
  },

  methods: {
    // Save the data in the store to add a new Post.
    savePost() {
      const post: PostModel = {
        detail: {
          id:
            "_" +
            Math.random()
              .toString(36)
              .substr(2, 9),
          user: this.$store.state.user,
          message: this.postMsg,
          dateCreated: new Date()
        },
        reactions: [],
        comments: []
      };

      this.$store.commit("addPost", post);

      this.postMsg = "";
    },

    // Clean the post list removing empty objects (happens initializing the state)
    cleanPostList() {
      this.$store.commit("clearEmptyPosts");
    },

    // Toggle the view of the button row.
    // When is mobile, doesnt show the field.
    toggleMobileButton() {
      this.inTextArea = screen.width > this.mobileWidth;
    },

    // Since mobile doesn't show the box, it will appear only when input is focused.
    showMobileButton() {
      if (screen.width <= this.mobileWidth) {
        return (this.inTextArea = true);
      }
    },

    // Hide the box when lose the focus.
    hideMobileButton() {
      if (screen.width <= this.mobileWidth) {
        setTimeout(() => {
          this.inTextArea = false;
        }, 100);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.publish__post {
  background-color: $white;
  margin: 30px 10%;
  border: 1px solid $gray-03;
}

.publish__post--input {
  padding: 20px;
  border-bottom: 1px solid $gray-03;
}

.publish__post--input textarea {
  border: none;
  width: 100%;
  overflow: hidden;
  outline: none;
}

.publish__post--input textarea::placeholder {
  color: $primary-one;
  font-size: $font-sm;
}

.publish__post--button {
  display: grid;
  justify-content: end;
  padding: 10px;
}

.publish__post--button button {
  color: $white;
  background-color: $primary-one;
  border: none;
  border-radius: 2px;
  height: 30px;
  width: 100px;
  cursor: pointer;
}

.publish__post--button button:disabled {
  color: $primary-one;
  font-weight: $bold;
  background-color: $gray-03;
  cursor: not-allowed;
}
</style>
