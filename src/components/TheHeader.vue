<template>
  <header>
    <div class="nav">
      <div class="nav__title">
        <span>{{ pageTitle }}</span>
      </div>
      <div class="nav__user">
        <span class="nav__user--desktop"
          >{{ greetUser }} {{ userLogged | pickFirstName }}</span
        >
        <div @click="showMobileMenu" class="nav__user--mobile">
          <em class="fas fa-bars"></em>
        </div>
      </div>
    </div>
    <div class="nav__menu--mobile" v-if="mobileMenu">
      {{ greetUser }}
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheHeader",
  data() {
    return {
      // View constants
      pageTitle: "Domicilios Test",
      greetUser: "Hola!",
      // User from store
      userLogged: this.$store.state.user,
      // Flag for mobile menu
      mobileMenu: false
    };
  },

  filters: {
    // Filter to pick the first name of the user
    pickFirstName(name: string): string {
      return name.replace(/ .*/, "");
    }
  },

  methods: {
    // Switch the view nav menu, when the resolution width change.
    showMobileMenu() {
      this.mobileMenu = !this.mobileMenu;
    }
  }
});
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.nav {
  background-color: $white;
  border-bottom: 1px solid $gray-03;
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 20% 60% 20%;
}

.nav > div {
  display: grid;
  align-items: center;
}

.nav__title {
  grid-column: 2;
  font-weight: $bold;
}

.nav__user {
  color: $gray-04;
  justify-content: end;
  padding-right: 20px;
}

.nav__user--mobile,
.nav__menu--mobile {
  display: none;
}

@media (max-width: 768px) {
  .nav__user--desktop {
    display: none;
  }

  .nav__user--mobile {
    display: grid;
    cursor: pointer;
  }

  .nav__menu--mobile {
    display: grid;
    justify-content: center;
    background-color: $gray-01;
    padding: 20px;
  }
}
</style>
