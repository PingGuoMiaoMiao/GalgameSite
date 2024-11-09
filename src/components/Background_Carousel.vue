<template>
  <div class="carousel">
    <div class="carousel-slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div
          class="carousel-slide"
          v-for="(slide, index) in slides"
          :key="index"
          :style="{ backgroundImage: `url(${slide.image})` }"
      >
        <div class="item">{{ slide.text }}</div>
      </div>
    </div>
    <button class="prev" @click="prevSlide">❮</button>
    <button class="next" @click="nextSlide">❯</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const slides = [
  {
    image: "/2500x1527-px-animal-ArseniXC-cat-original-signed-1910243-wallhere.com.jpg",
    text: 'First Slide',
  },
  {
    image: '/2500x1527-px-animal-ArseniXC-cat-original-signed-1910243-wallhere.com.jpg',
    text: 'Second Slide',
  },
  {
    image: '/2500x1527-px-animal-ArseniXC-cat-original-signed-1910243-wallhere.com.jpg',
    text: 'Third Slide',
  },
];

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length;
};

// Auto slide every 3 seconds
onMounted(() => {
  setInterval(nextSlide, 3000);
});
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 100vh; /* 设置为全屏高度 */
  overflow: hidden;
}

.carousel-slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.carousel-slide {
  min-width: 100%;
  box-sizing: border-box;
  position: relative; /* 允许绝对定位内部内容 */
  background-size: cover; /* 背景图像覆盖整个区域 */
  background-position: center; /* 背景图像居中 */
  height: 100vh; /* 确保轮播的每一张幻灯片都占满全高 */
}

.carousel-slide.active {
  opacity: 1;
}

.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 10;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.item {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
}
</style>