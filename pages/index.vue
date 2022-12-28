<template>
  <div>
    <home />
  </div>
</template>

<script>
import Home from "../containers/home/index.vue"

export default {
  fetchOnServer: false,
  components: {
    home: Home
  },
}
</script>