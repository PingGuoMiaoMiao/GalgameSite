<script setup lang="ts">
import Header from "./components/Header.vue";
import Background_Carousel from "./components/Background_Carousel.vue";
</script>

<template>
  <div class="background-carousel-wrapper">
    <Background_Carousel />
  </div>

  <div class="header-wrapper">
    <Header />
  </div>
    <router-view></router-view> <!-- 路由视图 -->

</template>

<style scoped>
.background-carousel-wrapper {
  position: absolute; /* 绝对定位以覆盖整个背景 */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1; /* 确保背景在其他内容下面 */
}
</style>