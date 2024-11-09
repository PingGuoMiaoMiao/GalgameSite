import { createApp } from 'vue';
import App from './App.vue'; // Assuming your main component is named App.vue
import router from './router'; // 导入路由
import BackgroundCarousel from './components/Background_Carousel.vue'; // Adjust the path as necessary

const app = createApp(App);

// Register your component globally
app.component('BackgroundCarousel', BackgroundCarousel);
app.use(router); // 使用路由
app.mount('#app');