<template>
  <div class="login-card flex flex-column flex-center">
    <img src="~assets/img/close.svg" class="close-btn" alt="" @click="closeLoginWindow">
    <slot name="title"><h1>登陆</h1></slot>
    <div class="username flex flex-column flex-center">
      <input type="text" placeholder="用户名"
            @focus="UsernameInputFoucs"
            @blur="UsernameInputBlur"
            v-model="user.username">
      <div class="input-bottom-bar" ref="usernameBottomBar"></div>
      <span class="tip">{{nameTip}}</span>
    </div>
    <div class="password flex flex-column flex-center">
      <input type="text" placeholder="密码" 
            @focus="PasswordInputFoucs" 
            @blur="PasswordInputBlur"
            v-model="user.password">
      <div class="input-bottom-bar" ref="passwordBottomBar"></div>
      <span class="tip">{{pwTip}}</span>
    </div>
    <div class="loginBtn" @click="Login">
      <button class="btn btn-secondary btn-lg btn-block">登陆</button>
    </div>
    <div class="registerBtn" @click="Register">
      <button class="btn btn-lg btn-block btn-primary">注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginCard",
  data(){
    return{
      user:{
        username: '',
        password: ''
      },
      usernameBottomBarStyle: null,
      passwordBottomBarStyle: null,
      nameTest: null,
      passwordTest: null,
      nameTip: "",
      pwTip: ""
    }
  },
  mounted(){
    this.initEle();
  },
  methods: {
    UsernameInputFoucs(){
      this.usernameBottomBarStyle.width = `60%`;
      this.usernameBottomBarStyle.transition = `.6s`;
    },
    UsernameInputBlur(){
      this.usernameBottomBarStyle.width = `0`;
      const name = /^[\u4E00-\u9FA5a-zA-Z0-9_]{1,10}$/;
      this.nameTest = name.test(this.user.username);
      if(this.nameTest==true){
        this.nameTip = ""
      }else{
        this.nameTip = "请输入1～10位用户名"
      }
    },
    PasswordInputFoucs(){
      this.passwordBottomBarStyle.width = `60%`;
      this.passwordBottomBarStyle.transition = `.6s`;
    },
    PasswordInputBlur(){
      this.passwordBottomBarStyle.width = `0`;
      const password = /^[a-zA-Z0-9_]{3,10}$/;
      this.passwordTest = password.test(this.user.password);
      if(this.passwordTest==true){
        this.pwTip = ""
      }else{
        this.pwTip = "请输入3～10位的密码"
      }
    },

    //显示登陆窗口
    // showLoginWindow(){
    //   this.$emit("showLoginWindow");
    // },
    //关闭登陆窗口 
    closeLoginWindow(){
      this.$emit("closeLoginWindow");
    },

    Login(){
      if(this.nameTest && this.passwordTest){
        this.$emit("loginReq",this.user);
      }
    },
    Register(){
      if(this.nameTest && this.passwordTest){
        this.$emit("registerReq",this.user);
      }
    },

    //初始化元素
    initEle(){
      this.usernameBottomBarStyle = this.$refs.usernameBottomBar.style;
      this.passwordBottomBarStyle = this.$refs.passwordBottomBar.style;
    }
  }
}
</script>

<style>
.login-card{
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 99;
  transform: translate(-50%, -50%);
  background-color: #fff;

  box-shadow: #666 2px 2px 5px;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
}
.username,
.password{
  width: 100%;
  margin: 10px 0;
}
.username input,
.password input{
  width: 60%;
  height: 40px;
  outline: none;
  border: 0;
  background-color: #eee;
  border-radius: 5px 5px 0 0;
}
.input-bottom-bar{
  width: 0;
  height: 2px;
  background-color: #06c;
}
.close-btn{
  width: 35px;
  height: 35px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}
.loginBtn{
  width: 60%;
}
.registerBtn{
  width: 60%;
  margin-top: 10px;
}
.tip{
  color: #bf4800
}

.flex{
  display: flex;
}
.flex-column{
  flex-direction: column;
}
.flex-center{
  justify-content: center;
  align-items: center;
}
@media (min-width: 802px) {
  .login-card{
    width: 35vw;
    height: 50vh;
  }
}

@media (max-width: 802px) {
  .login-card{
    width: 300px;
    height: 50vh;
  }
}
</style>