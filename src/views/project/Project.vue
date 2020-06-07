<template>
  <div class="project-list">
    <div class="project">
      <div class="pro-info">
        <h2 class="pro-title">Vue.js 商城项目</h2>
        <p class="pro-direction">该项目基于Vue脚手架开发，整个项目包括46组件，2896行代码，适合前端初学者进行练习 </p>
        <div class="pro-link-btn">
          <button type="button" class="btn btn-dark" onclick="javascript:window.location.href='https://github.com/GHkmmm/mall'">GitHub地址</button>
          <button type="button" class="btn btn-light">预览</button>
        </div>
      </div>
      <div class="my-swiper">
        <project-swiper />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectSwiper from './childComps/ProjectSwiper';

export default {
  name: "Project",
  components: {
    ProjectSwiper
  }
}
</script>

<style>
.project{
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: center;
}
.pro-info{
  width: 60%;
  padding-right: 10px;
  margin-top: 60px;
}
.pro-title{
  color: #666;
  text-align: center;
}
.pro-direction{
  padding-top: 40px;
  font-family: PingFangSC-Thin, sans-serif;
  text-indent: 30px;
}
.pro-link-btn{
  display: flex;
  justify-content: center;
}
.pro-link-btn button{
  margin: 10px 10px;
}
.my-swiper{
  width: 20%;
}
a{
  color: #fff;
  text-decoration: none;
}
@media (max-width: 802px) {
  .project{
    flex-direction: column;
    align-items: center;
  }
  .pro-info{
    width: 100%;
  }
  .my-swiper{
    width: 60%;
  }
}
</style>