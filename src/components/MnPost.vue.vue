<template>
  <div v-if="posts">
    <div :key="post.detail.id" class="post" v-for="post in posts">
      <div class="post__user" v-if="post.detail">
        <div class="post__user--image">
          <img alt="user" src="../assets/images/user-placeholder.png" />
        </div>
        <div class="post__user--info">
          <h3>{{ post.detail.user }}</h3>
          <span>{{ post.detail.dateCreated | timePassed }}</span>
          <p>{{ post.detail.message }}</p>
        </div>
        <div class="post__user--actions">
          <div @click="reactToPost(post.detail.id)">{{ reactTxt }}</div>
          <div @click="showCommentInput(post.detail.id)">
            {{ commentBtnTxt }}
          </div>
        </div>
      </div>
      <div class="post__counts">
        <div class="post__counts--reacts">
          <div :key="index" v-for="(react, index) in post.reactions">
            <span>{{ react.user.charAt(0) }}</span>
          </div>
          <span class="post__counts--reacts-number">{{
            post.reactions.length
          }}</span>
        </div>
        <div class="post__counts--comments">
          {{ post.comments.length }} {{ commentsCountTxt }}
        </div>
      </div>
      <div
        :key="comments.id"
        class="post__comments"
        v-for="comments in post.comments"
      >
        <div class="post__comments--image">
          <img alt="user" src="../assets/images/user-placeholder.png" />
        </div>
        <div class="post__comments--info">
          <div>
            <h4>{{ comments.user }}</h4>
            <p>
              {{ comments.message }}
            </p>
          </div>
          <span>{{ comments.dateCreated | timePassed }}</span>
        </div>
      </div>
      <div
        class="post__comments--input"
        v-if="post.comments.length > 0 || post.detail.id === showInput"
      >
        <label>
          <textarea
            :placeholder="inputPlaceholderTxt"
            @blur="hideButton"
            @focus="showButton(post.detail.id)"
            rows="1"
            v-model="inputValue"
          />
        </label>
        <div
          class="post__comments--button"
          v-if="post.detail.id === inTextArea"
        >
          <button @click="sendComment(post.detail.id)">
            {{ commentBtnTxt }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { MessageData, PostModel } from "@/models/post.model";
import Vue from "vue";

export default Vue.extend({
  name: "Post",

  created(): void {},

  data() {
    return {
      postList: this.$store.state.posts,
      commentsCountTxt: "comentarios",
      inTextArea: "",
      showInput: "",
      inputValue: "",
      inputPlaceholderTxt: "Escribe un comentario",
      commentBtnTxt: "Comentar",
      reactTxt: "Reaccionar"
    };
  },

  computed: {
    posts(): PostModel {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.postList.sort(
        (
          a: { detail: { dateCreated: number } },
          b: { detail: { dateCreated: number } }
        ) => b.detail.dateCreated - a.detail.dateCreated
      );
    }
  },

  filters: {
    timePassed(startTime: Date) {
      const endTime = new Date();
      let timeDiff = endTime.getTime() - startTime.getTime();
      timeDiff /= 1000;
      const seconds = {
        text: "segundos",
        value: Math.round(timeDiff)
      };
      const minutes = {
        text: "minutos",
        value: Math.round(seconds.value / 60)
      };
      const hours = {
        text: "horas",
        value: Math.round(minutes.value / 60)
      };
      let time;
      if (seconds.value <= 60) {
        time = seconds;
      } else if (minutes.value <= 60) {
        time = minutes;
      } else {
        time = hours;
      }
      return `Hace ${time.value} ${time.text}`;
    }
  },

  methods: {
    reactToPost(postId: string) {
      const react = {
        id: postId,
        user: "Felipe"
      };
      const postIndex = this.postList.findIndex(
        (post: { detail: { id: string } }) => post.detail.id === postId
      );

      const isNewReaction = this.postList[postIndex].reactions.find(
        (reaction: any) => reaction.id === postId
      );

      if (!isNewReaction) {
        this.postList[postIndex].reactions.push(react);
      }
    },

    showCommentInput(postId: string) {
      this.showInput = postId;
    },

    showButton(postId: string) {
      return (this.inTextArea = postId);
    },

    hideButton() {
      setTimeout(() => {
        this.inTextArea = "";
      }, 100);
    },

    sendComment(postId: string) {
      const comment: MessageData = {
        id:
          "_" +
          Math.random()
            .toString(36)
            .substr(2, 9),
        user: "Juan",
        message: this.inputValue,
        dateCreated: new Date()
      };

      const postIndex = this.postList.findIndex(
        (post: { detail: { id: string } }) => post.detail.id === postId
      );
      this.postList[postIndex].comments.push(comment);
      this.inputValue = "";
    }
  }
});
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.post {
  background-color: $white;
  margin: 30px 10%;
  border: 1px solid $gray-03;
}

.post__user {
  display: grid;
  grid-template-columns: 100px auto;
}

.post__user--image {
  margin: 18px auto 0;
}

.post__user--image img {
  width: 75px;
}

.post__user--info {
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 0 10px;
  margin-bottom: 18px;
}

.post__user--info h3 {
  color: $primary-one;
  margin-bottom: 0;
}

.post__user--info span {
  font-size: $font-xs;
}

.post__user--actions {
  grid-column: 2/3;
  display: flex;
}

.post__user--actions div {
  padding: 0 30px 18px 10px;
  color: $primary-one;
  cursor: pointer;
}

.post__counts {
  border-bottom: 1px solid $gray-03;
  border-top: 1px solid $gray-03;
  font-size: $font-sm;
  padding: 10px;
  display: grid;
  grid-template-columns: 50% 50%;
}

.post__counts--reacts {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.post__counts--reacts div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: $gray-03;
  border-radius: 100%;
  margin-left: -5px;
  border: 1px solid $white;
}

.post__counts--reacts div span {
  display: flex;
  padding-left: 3px;
  align-items: center;
  font-size: 10px;
  color: $white;
}

.post__counts--reacts-number {
  color: $primary-one;
  font-weight: $bold;
  margin-left: 10px;
}

.post__counts--comments {
  display: grid;
  justify-content: end;
}

.post__comments {
  display: grid;
  grid-template-columns: 75px auto;
  background-color: $gray-01;
}

.post__comments--image {
  margin: 18px auto 0;
}

.post__comments--image img {
  width: 50px;
}

.post__comments--info {
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 0 10px;
}

.post__comments--info div {
  display: flex;
  align-items: baseline;
}

.post__comments--info h4,
p {
  margin-bottom: 0;
}

.post__comments--info h4 {
  color: $primary-one;
  margin-right: 10px;
}

.post__comments--info p {
  font-size: $font-sm;
}

.post__comments--info span {
  font-size: $font-xs;
}

.post__comments--input {
  grid-column: span 2/3;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 10px;
  background-color: $gray-01;
}

.post__comments--input textarea {
  width: 90%;
  overflow: hidden;
  outline: none;
  border: 1px solid $gray-03;
  border-radius: 2px;
  padding: 15px 10px;
}

.post__comments--input textarea::placeholder {
  font-size: $font-sm;
}

.post__comments--button {
  display: grid;
  grid-column: span 2/3;
  justify-content: end;
  padding: 10px;
  width: 95%;
}

.post__comments--button button {
  color: $white;
  background-color: $primary-one;
  border: none;
  border-radius: 2px;
  height: 30px;
  width: 100px;
}
</style>
