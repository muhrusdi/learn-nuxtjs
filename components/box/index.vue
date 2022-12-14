<template>
  <div class="box">
    <div class="flex justify-between">
      <div>
        <div>
          <h3 class="text-xl font-medium">{{title}}</h3>
          <p class="text-sm mt-1 text-gray-400">{{description}}</p>
        </div>
      </div>
      <div>
        <slot name="rightContent"/>
      </div>
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  props: ["title", "description"]
}
</script>

<style scoped>
.box {
  margin-top: 3rem;
  padding: 24px;
  border: 1px solid #818191;
  border-radius: 8px;
}
</style>