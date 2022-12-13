<template>
  <div>
    <ul class="flex mt-8">
      <li v-for="menu in menus" :key="menu.id" :class="(menu.path === getPath) ? 'active' : ''">
        <NuxtLink :to="menu.path">{{menu.label}}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script> 
import { menus } from "../../utils"

export default {
  data() {
    return {
      menus,
    }
  },
  computed: {
    getPath() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
ul {
  border-bottom: 1px solid #52526B;
  padding: 0;
}

ul li {
  position: relative;
}

ul li a {
  padding: 10px 16px;
  display: block;
  color: #818191;
}

ul li.active:after {
  position: absolute;
  height: 2px;
  left: 0;
  right: 0;
  content: " ";
  background-color: #54B78A;
  bottom: 0;

}

ul li.active a {
  color: #54B78A;
  font-weight: medium;
}
</style>