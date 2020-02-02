<template>
  <div>
    <the-header></the-header>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "home",
  components: {
    TheHeader
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
