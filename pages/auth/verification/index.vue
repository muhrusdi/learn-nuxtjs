<template>
  <div>
    <verification/>
  </div>
</template>

<script>
import Verification from "../../../containers/verification/index.vue"

export default {
  layout: 'auth',
  components: {
    verification: Verification
  }
}
</script>