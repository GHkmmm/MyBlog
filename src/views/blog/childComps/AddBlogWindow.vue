<template>
  <div class="add-blog-window flex flex-column flex-center">
    <img src="~assets/img/close.svg" class="close-btn" alt="" @click="closeAddBlogWindow">
    <h1>添加博客</h1>
    <div class="blog-title flex flex-column flex-center">
      <input type="text" placeholder="标题"
            @focus="blogTitleInputFoucs"
            @blur="blogTitleInputBlur"
            v-model="blog.title">
      <div class="input-bottom-bar" ref="blogBottomBar"></div>
    </div>
    <div class="content flex flex-column flex-center">
      <input type="text" placeholder="内容"
            @focus="ContentInputFoucs" 
            @blur="ContentInputBlur"
            v-model="blog.content">
      <div class="input-bottom-bar" ref="contentBottomBar"></div>
    </div>
    <div class="add-btn" @click="AddBlog">
      <button class="btn btn-secondary btn-lg btn-block">添加</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddBlogWindow",
  data() {
    return {
      blog:{
        title: "",
        watcher: 0,
        comment: 0,
        like: 0,
        content: ""
      }
    }
  },
  mounted(){
    this.initEle();
  },
  methods: {
    blogTitleInputFoucs(){
      this.blogBottomBarStyle.width = `60%`;
      this.blogBottomBarStyle.transition = `.6s`;
    },
    blogTitleInputBlur(){
      this.blogBottomBarStyle.width = `0`;
    },
    ContentInputFoucs(){
      this.contentBottomBarStyle.width = `60%`;
      this.contentBottomBarStyle.transition = `.6s`;
    },
    ContentInputBlur(){
      this.contentBottomBarStyle.width = `0`;
    },
    closeAddBlogWindow(){
      this.$emit("closeAddBlogWindow");
    },

    AddBlog(){
      this.$emit("AddBlog",this.blog);
    },
    //初始化元素
    initEle(){
      this.blogBottomBarStyle = this.$refs.blogBottomBar.style;
      this.contentBottomBarStyle = this.$refs.contentBottomBar.style;
    }
  }
}
</script>

<style>
.add-blog-window{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;

  box-shadow: #666 2px 2px 5px;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
}
.close-btn{
  width: 35px;
  height: 35px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}
.blog-title,
.content{
  width: 100%;
  margin: 10px 0;
}
.blog-title input,
.content input{
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
.add-btn{
  width: 60%;
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
  .add-blog-window{
    width: 35vw;
    height: 50vh;
  }
}

@media (max-width: 802px) {
  .add-blog-window{
    width: 300px;
    height: 50vh;
  }
}
</style>