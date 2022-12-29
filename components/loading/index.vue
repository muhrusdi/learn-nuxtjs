<template>
  <div style="min-height: 4px;">
    <v-progress-linear
      v-model="value"
      color="light-blue"
      :active="show"
      :indeterminate="query"
      :query="true"
      style="z-index: 999999"
    ></v-progress-linear>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      value: 24,
      show: true,
      query: false,
      interval: 0
    }
  },
  watch: {
    loadings: {
        immediate: true,
        handler(load) {
          this.loading = load || {}
        }
     }
  },
  computed: {
    ...mapGetters({
      loadings: "profile/loadings"
    })
  }
}
</script>