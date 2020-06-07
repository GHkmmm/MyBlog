<template>
  <div class="personal-info">
    <div class="left">
      <img class="avatar" src="~assets/img/avatar.jpeg" alt="">
      <my-label class="my-label" />
    </div>
    <div class="right">
      <div class="text">
        <h2 style="fontSize: 48px">你好</h2>
        <h1 style="fontSize: 60px">陌生人</h1>   
      </div>
      <div class="a">
        <span>项目展示></span>
        <span>摄影作品></span>   
      </div> 
      <div class="social">
        <a class="social-link" href="https://github.com/GHkmmm">
          <img src="~assets/img/github.svg" alt="">
        </a>
        <a class="social-link" href="https://weibo.com/u/5575271038">
          <img src="~assets/img/weibo.png" alt="">
        </a>
        <a class="social-link" href="">
          <img src="~assets/img/wechat.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import MyLabel from './childComps/MyLabel';

export default {
  name: "PersonalInfo",
  components:{
    MyLabel
  }
}
</script>

<style>
.personal-info{
  width: 100%;
  background-color: #191816;

  display: flex;
  align-items: center;
}
.my-label{
  width: 300px;
  margin-top: 20px;
}
.my-label *{
  margin: 5px;
}
.avatar{
  width: 300px;
}

@media (min-width: 822px) {
  .personal-info{
    height: 506px;
  }
  .left{
    margin-left: 100px;
  }
  .right{
    margin-left: 150px;
    width: 500px;
  }
  .text{
    color: #fff;
    animation-name: up;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
  }
  .right span {
    display: inline-block;
    margin-top: 40px;
    margin-right: 20px;
    color: #06c;
    font-size: 24px;
  }
  .social{
    margin-top: 35px;
  }
  .social img{
    width: 55px;
    margin-right: 30px;
    cursor: pointer;
  }
}
@media (max-width: 822px) {
  .personal-info {
    height: 600px;
    flex-direction: column;
    justify-content: center;
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .text{
    display: none;
  }
  .a{
    color: #06c;
    font-size: 24px;
    display: flex;
    justify-content: center;
  }
  .a span{
    margin: 10px;
  }
  .social{
    display: flex;
    justify-content: center;
  }
  .social img{
    width: 45px;
    margin: 0 10px;
  }
}
@keyframes up {
  0%{
    opacity: 0;
    margin-top: 100px;
  }
  100% {
    opacity: 100;
    margin-top: 0;
  }
}
</style>