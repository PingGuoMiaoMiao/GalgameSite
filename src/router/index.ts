// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // 确保这些组件存在
import About from '../views/About.vue';
// 其他视图组件的导入
import KRKR from '../views/KRKR.vue';
import PC from '../views/PC.vue';
import Community from '../views/Community.vue';
import User from '../views/User.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/krkr',
        name: 'KRKR',
        component: KRKR,
    },
    {
        path: '/pc',
        name: 'PC',
        component: PC,
    },
    {
        path: '/community',
        name: 'Community',
        component: Community,
    },
    {
        path: '/user',
        name: 'User',
        component: User,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;