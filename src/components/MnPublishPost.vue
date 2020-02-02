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
      <button @click="savePost">{{ publishBtnTxt }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "PublishPost",

  created(): void {
    this.toggleMobileButton();
  },

  data() {
    return {
      inputPlaceholderTxt: "Escribe aquí tu estado",
      inTextArea: true,
      publishBtnTxt: "Publicar",
      postMsg: ""
    };
  },

  computed: {
    ...mapState(["posts"])
  },

  methods: {
    savePost() {
      const post = {
        id: "1",
        msg: this.postMsg
      };

      this.$store.commit("addPost", post);
    },

    toggleMobileButton() {
      this.inTextArea = screen.width > 768;
    },

    showMobileButton() {
      if (screen.width <= 768) {
        return (this.inTextArea = true);
      }
    },

    hideMobileButton() {
      if (screen.width <= 768) {
        return (this.inTextArea = false);
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
}
</style>
