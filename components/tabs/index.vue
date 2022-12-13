<template>
  <div>
    <ul class="flex mt-8">
      <li class="active">
        <a href="#">Information</a>
      </li>
      <li>
        <a href="#">Career</a>
      </li>
      <li>
        <a href="#">Education</a>
      </li>
      <li>
        <a href="#">Gallery</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  border-bottom: 1px solid #52526B;
  padding: 0;
}

ul li {
  padding: 10px 16px;
  position: relative;
}

ul li a {
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