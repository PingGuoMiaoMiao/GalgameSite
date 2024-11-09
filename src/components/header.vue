<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

let lastScrollTop = 0;
let bg_primary: HTMLElement | null = null;

const handleScroll = () => {
  let scrollTop = document.body.scrollTop || window.pageYOffset;
  if (scrollTop > 100) { // 假设当滚动超过100px时隐藏头部
    if (!bg_primary?.classList.contains('active')) {
      bg_primary?.classList.add('active');
    }
  } else {
    if (bg_primary?.classList.contains('active')) {
      bg_primary?.classList.remove('active');
    }
  }
  lastScrollTop = scrollTop;
};

const items = ref([
  { message: 'Home', path: '/' },
  { message: 'KRKR', path: '/krkr' },
  { message: 'PC', path: '/pc' },
  { message: 'Community', path: '/community' },
  { message: 'User', path: '/user' },
  { message: 'About', path: '/about' }
]);

onMounted(() => {
  bg_primary = document.getElementById("bg_primary");
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header id="bg_primary">
    <router-link class="logo" to="/">.Galgame</router-link>
    <ul>
      <li v-for="item in items" :key="item.message">
        <router-link class="nav-link" :to="item.path">{{ item.message }}</router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
header {
  box-shadow: 0 10px 10px rgba(0,0,0,0.1); /* 添加一个轻微的阴影效果 */
  top: 0;
  position: sticky; /* 或者使用 fixed/absolute 根据你的需求 */
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000; /* 确保在滚动时保持在顶层 */
  transition: 5s;
}

header .logo {
  font-size: 2em; /* 增大字体大小 */
  font-weight: bold;
  color: white; /* 改为白色，与背景色形成对比 */
  text-decoration: none;
  text-transform: uppercase; /* 文本转换为大写 */
  transition: color 0.3s ease; /* 添加颜色过渡效果 */
}

header .logo:hover {
  color: #ddd; /* 鼠标悬停时颜色变浅 */
}

header ul {
  display: flex;
}

header ul li {
  list-style: none;
  padding: 0 30px;
}

header ul li a.nav-link {
  text-decoration: none;
  font-weight: bold;
  color: white; /* 改为白色 */
  padding: 0 30px; /* 调整间距 */
  font-size: 1.2em;
  transition: background-color 0.3s ease, color 0.3s ease; /* 添加背景色和颜色的过渡效果 */
}

header ul li a.nav-link:hover {
  background-color: #666666; /* 鼠标悬停时背景色变深 */
  color: #ddd; /* 鼠标悬停时文字颜色变浅 */
}

header.active {
  transform: translateY(-100%); /* 或者使用 top: -60px，但 transform 提供了更好的过渡效果 */
  transition: transform 0.3s ease; /* 添加过渡效果 */
}
</style>