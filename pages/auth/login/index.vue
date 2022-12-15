<template>
  <div>
    <login/>
  </div>
</template>

<script>
import Login from "../../../containers/login/index.vue"

export default {
  layout: 'auth',
  components: {
    login: Login
  }
}
</script>