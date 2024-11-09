<!-- src/views/Home.vue -->
<template>
  <h1>Home Page</h1>
  <div class="container">
  <div class="left">
    <div class="User">
      <div class="User-header">
        <h1 class="User-header-title">苹果喵喵</h1>
      </div>
      <div class="User-picture">
        <img src="/微信图片_20240725191505.jpg" alt="用户分享的图片" />
      </div>
    </div>
  </div>
    <div class="right">
    <h1>欢迎来到苹果喵喵Galgame</h1>
    <p class="title">a</p>
    <div class="login">
      <button>登录</button>
    </div>
    <div class="register">
      <p>没有注册点这里-></p>
      <button>注册</button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
<style>
.container {
  display: flex;
  margin: 60px;
  align-items: center; /* 垂直居中子元素 */
  position: relative; /* 使.container相对定位，以便z-index生效 */
}

.left, .right {
  flex: 1; /* 让.left和.right平分剩余空间，或者根据需要设置具体的flex值 */
  text-align: center; /* 如果需要 */
}

.User-picture {
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  display: flex; /* 如果需要居中图片（虽然在这个场景下不是必需的） */
  align-items: center; /* 居中图片（垂直） */
  justify-content: center; /* 居中图片（水平），但注意这里可能不会按预期工作，因为img已经填充了整个容器 */
}.User-picture img {
   width: 100%;
   height: 100%;
   object-fit: cover;
 }

</style>