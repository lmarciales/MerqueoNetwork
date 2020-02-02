<template>
  <div>
    <the-header></the-header>
    <section>
      <mn-publish-post></mn-publish-post>
    </section>
  </div>
</template>

<script>
import MnPublishPost from "@/components/MnPublishPost";
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "home",
  components: {
    TheHeader,
    MnPublishPost
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
