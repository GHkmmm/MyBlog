<template>
  <div class="or-toast" ref="toast">
    {{text}}
  </div>
</template>

<script>
export default {
  name: "Toast",
  data(){
    return{
      text: '登陆成功'
    }
  },
  methods: {
    suc(text ='成功', duration = 2000){
      this.show(duration, text, 'suc');
    },
    err(text ='失败', duration = 2000){
      this.show(duration, text, 'err');
    },
    warn(text='警告', duration = 2000){
      this.show(duration, text, 'warn')
    },
    show(duration, text, state){
      const ToastStyle = this.$refs.toast.style;
      this.text = text;
      ToastStyle.top = `70px`
      ToastStyle.transition = `.6s`;
      setTimeout(function(){
        ToastStyle.top = `-50px`
      }, duration)
      switch(state){
        case 'suc':
          ToastStyle.backgroundColor = '#4FA846';
          break;
        case 'err':
          ToastStyle.backgroundColor = '#DC4245';
          break;
        case 'warn':
          ToastStyle.backgroundColor = '#F9C132'
      }
    }
  }
}
</script>

<style>
.or-toast{
  width: 120px;
  line-height: 45px;

  position: fixed;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

  background-color: #4FA846;
  color: #fff;
  text-align: center;

  border-radius: 30px;
}
</style>