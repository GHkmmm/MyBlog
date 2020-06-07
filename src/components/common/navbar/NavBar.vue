<template>
  <div class="my-navbar">
    <nav class="navbar navbar-expand-sm navbar-dark">
      <a class="navbar-brand" href="#">GHkmmm</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">主页 <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">链接</a>
          </li>
          <li class="nav-item" @click="Login">
            <a class="nav-link" href="#">{{login}}</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-md-0">
          <input class="form-control" type="text" placeholder="搜索文章">
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    login(){
      if(!this.$store.state.isLogin){
        return "登陆";
      }else{
        return "注销"
      }
    }
  },
  methods: {
    Login() {
      this.$emit("toLogin")
    }
  }
}
</script>

<style>
.my-navbar{
  width: 100%;
  position: fixed;
  background-color: #000;
  z-index: 98;
}
</style>