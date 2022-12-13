<template>
  <nav>
    <div class="nav-inner">
      <div>
        <logo/>
      </div>
      <div class="mt-4 p-4">
        <h1 class="text-2xl font-black">Welcome to Prisign</h1>
        <p class="mt-4 text-gray-300">Is a personal data platform, you can update your information about yourself, customize your profile and change a lot of things</p>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "../brand/index.vue"

export default {
  components: {
    logo: Logo
  }
}
</script>

<style scoped>
  nav {
    background-color: #343747;
    width: 400px;
    min-height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
  }

  .nav-inner {
    padding: 3.25rem 2.875rem;
  }
</style>