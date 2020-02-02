<template>
  <div>
    <the-header></the-header>
    <section>
      <mn-publish-post></mn-publish-post>
    </section>
    <section>
      <mn-post></mn-post>
    </section>
  </div>
</template>

<script>
import MnPost from "@/components/MnPost.vue";
import MnPublishPost from "@/components/MnPublishPost";
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "home",
  data() {
    return {
      post: {
        id: 2,
        value: "asd"
      }
    };
  },
  components: {
    TheHeader,
    MnPublishPost,
    MnPost
  }
};
</script>

<style lang="scss">
@import "src/assets/scss/variables";

body {
  background-color: $gray-02;
  margin: 0;
}
</style>
