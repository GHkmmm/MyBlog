<template>
  <div>
    <div class="main-page" ref="mainPage">
      <nav-bar @toLogin="toLogin"/>
      <personal-info />
      <tab-control :titles="titles" @itemClick="itemClick" class="my-tab-control"/>
      <router-view keep-alive></router-view>
    </div>
    <toast ref="myToast"/>
    <login-card ref="loginWindow"
                @closeLoginWindow="closeLoginWindow"
                @loginReq = "LoginReq"
                @registerReq = "RegisterReq"
                v-show="isShowLoginWindow" />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import PersonalInfo from 'components/content/personlinfo/PersonalInfo';
import TabControl from 'components/common/tabcontrol/TabControl';
import LoginCard from 'components/common/logincard/LoginCard';
import Toast from 'components/common/toast/Toast';

export default {
  name: "App",
  components: {
    NavBar,
    PersonalInfo,
    TabControl,
    LoginCard,
    Toast
  },
  data(){
    return {
      titles: [
        "文章",
        "影集",
        "个人项目"
      ],
      users: [
        {
          username: 'admin',
          password: '123'
        }
      ],
      isShowLoginWindow: false
    }
  },
  created(){
    this.$bus.$on("DeleteBlog", () => {
      if(!this.$store.state.isLogin){
        this.$refs.myToast.err('您未登陆');
      }else{
        console.log("true");
        this.$refs.myToast.suc("正在跳转");
      }
    })
  },
  methods: {
    /**
     * 登陆窗口险关操作
     */
    toLogin() {
      if(!this.$store.state.isLogin){
        const mainPageStyle = this.$refs.mainPage.style;
        mainPageStyle.opacity = `20%`;
        this.isShowLoginWindow = true;
      }else{
        this.$refs.myToast.warn('注销成功')
        this.$store.state.isLogin = false;
      }
    },
    closeLoginWindow(){
      const mainPageStyle = this.$refs.mainPage.style;
      mainPageStyle.opacity = `100%`;
      this.isShowLoginWindow = false;
    },
    LoginReq(user){
      for(let i=0;i<this.users.length;i++){
        if(user.username === this.users[i].username && user.password === this.users[i].password){
          this.$refs.myToast.suc('登陆成功');
          this.closeLoginWindow();
          this.$store.state.isLogin = true;
          break;
        }else if(i===this.users.length-1){
          this.$refs.myToast.err('账号或密码错误');
          continue;
        }
      }
    },
    RegisterReq(user){
      this.users.push(user);
      console.log(this.users);
      this.$refs.myToast.suc('注册成功');
      this.closeLoginWindow();
    },

    //选项卡的点击事件
    itemClick(index){
      switch(index){
        case 0:
          this.$router.push('/blog');
          break;
        case 1:
          this.$router.push('/album');
          break;
        case 2:
          this.$router.push('/project');
          break;
      }
    }
  }
}
</script>

<style>
.my-tab-control{
  position: sticky;
  top: 56px;
  z-index: 50;
}
</style>
