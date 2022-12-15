<template>
  <v-app v-bind:style="{ background: this.$vuetify.theme.themes.dark.background}">
    <navgigation/>
    <div class="content">
      <div class="container">
        <div class="content-inner">
          <div class="mt-12">
            <p class="text-sm text-gray-400">Today Dec 15, 2022</p>
          </div>
          <tabs :data="menus"/>
          <Nuxt />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import Nav from "../components/nav/index.vue"
import Header from "../components/header/index.vue"
import Tabs from "../components/tabs/index.vue"
import { authMenus } from "../utils"

export default {
  data() {
    return {
      menus: authMenus
    }
  },
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
    position: relative;
  }
</style>