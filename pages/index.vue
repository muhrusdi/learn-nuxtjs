<template>
  <div>
    <home/>
  </div>
</template>

<script>
import Home from "../containers/home/index.vue"

export default {
  middleware: 'auth',
  mounted() {
    this.getProfile()
  },
  fetchOnServer: false,
  components: {
    home: Home
  },
  methods: {
    getProfile(options) {
      this.$store.dispatch('profile/getProfile', options)
    }
  }
}
</script>