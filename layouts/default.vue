<template>
  <v-app v-bind:style="{ background: this.$vuetify.theme.themes.dark.background}">
    <navgigation/>
    <div class="content">
      <top-header/>
      <div class="container">
        <div class="content-inner">
          <Nuxt />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import Nav from "../components/nav/index.vue"
import Header from "../components/header/index.vue"

export default {
  components: {
    navgigation: Nav,
    "top-header": Header
  }
}
</script>

<style scoped>
  .content {
    margin-left: 400px;
  }

  .container {
    max-width: 642px;
    padding-left: 14px;
    padding-right: 14px;
    margin: 0 auto;
  }
  .content-inner {
    background: rgba(255, 255, 255, 0.05);
    position: relative;
    top: -80px;
    backdrop-filter: blur(50px);
    padding: 34px 28px;
    border-radius: 16px;
  }
</style>