<template>
  <div>
    <register/>
  </div>
</template>

<script>
import Register from "../../../containers/register/index.vue"

export default {
  layout: 'auth',
  components: {
    register: Register
  }
}
</script>