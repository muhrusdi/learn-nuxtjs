<template>
  <v-app v-bind:style="{ background: this.$vuetify.theme.themes.dark.background}">
    <navgigation/>
    <div class="content">
      <top-header/>
      <div class="container">
        <div class="content-inner">
          <div>
            <div>
              <h2 class="text-2xl font-bold">Muhammad Rusdi</h2>
              <p class="mt-1">Level 1 - #SG769891</p>
            </div>
            <div>
              <tabs/>
              <Nuxt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import Nav from "../components/nav/index.vue"
import Header from "../components/header/index.vue"
import Tabs from "../components/tabs/index.vue"

export default {
  components: {
    navgigation: Nav,
    "top-header": Header,
    tabs: Tabs,
  }
}
</script>

<style scoped>
  .content {
    margin-left: 400px;
  }

  .container {
    max-width: 642px;
    padding-left: 18px;
    padding-right: 18px;
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