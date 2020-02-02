<template>
  <div class="post">
    <div class="post__user">
      <div class="post__user--image">
        <img alt="user" src="../assets/images/user-placeholder.png" />
      </div>
      <div class="post__user--info">
        <h3>Juan Rodriguez</h3>
        <span>Hace 40 minutos</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          consectetur delectus doloribus eos eum laudantium neque non, nostrum
          voluptatum. Dolorum iusto laborum maiores necessitatibus qui.
        </p>
      </div>
    </div>
    <div class="post__counts">
      <div class="post__counts--reacts">
        <div><span>QW</span></div>
        <div><span>AS</span></div>
        <div><span>ZX</span></div>
        <span class="post__counts--reacts-number">13</span>
      </div>
      <div class="post__counts--comments">3 {{ commentsCountTxt }}</div>
    </div>
    <div class="post__comments">
      <div class="post__comments--image">
        <img alt="user" src="../assets/images/user-placeholder.png" />
      </div>
      <div class="post__comments--info">
        <div>
          <h4>Juan Rodriguez</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <span>Hace 40 minutos</span>
      </div>
      <div class="post__comments--image">
        <img alt="user" src="../assets/images/user-placeholder.png" />
      </div>
      <div class="post__comments--info">
        <div>
          <h4>Juan Rodriguez</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <span>Hace 40 minutos</span>
      </div>
      <div class="post__comments--image">
        <img alt="user" src="../assets/images/user-placeholder.png" />
      </div>
      <div class="post__comments--info">
        <div>
          <h4>Juan Rodriguez</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <span>Hace 40 minutos</span>
      </div>
      <div class="post__comments--input">
        <label>
          <textarea
            :placeholder="inputPlaceholderTxt"
            @blur="hideMobileButton"
            @focus="showMobileButton"
            rows="1"
          />
        </label>
        <div class="post__comments--button" v-if="inTextArea">
          <button>{{ commentBtnTxt }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Post",
  data() {
    return {
      commentsCountTxt: "comentarios",
      inTextArea: false,
      inputPlaceholderTxt: "Escribe un comentario",
      commentBtnTxt: "Comentar"
    };
  },
  methods: {
    showMobileButton() {
      return (this.inTextArea = true);
    },
    hideMobileButton() {
      return (this.inTextArea = false);
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
  margin-top: 20px;
  margin-bottom: 10px;
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
