<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

let bg_primary: HTMLElement | null = null;

const handleScroll = () => {
  let scrollTop = document.body.scrollTop || window.pageYOffset;
  if (scrollTop > 100) { // Hide header when scrolling down past 100px
    if (!bg_primary?.classList.contains('active')) {
      bg_primary?.classList.add('active');
    }
  } else {
    if (bg_primary?.classList.contains('active')) {
      bg_primary?.classList.remove('active');
    }
  }
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
  box-shadow: 0 10px 10px rgba(0,0,0,0.1);
  top: 0;
  position: sticky;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
  transition: transform 0.3s ease;
}

header .logo {
  font-size: 2em;
  font-weight: bold;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

header .logo:hover {
  color: #ddd;
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
  color: white;
  padding: 0 30px;
  font-size: 1.2em;
  transition: background-color 0.3s ease, color 0.3s ease;
}

header ul li a.nav-link:hover {
  background-color: #666666;
  color: #ddd;
}

header.active {
  transform: translateY(-100%);
}
</style>