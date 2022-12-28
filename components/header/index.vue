<template>
  <div class="header-inner">
    <img :src="image" alt="">
  </div>
</template>

<script>
export default {
  props: ["image"]
}
</script>

<style scoped>
.header-inner {
  height: 240px;
  position: relative;
}

.header-inner img {
  inset: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>