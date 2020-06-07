<template>
  <div class="blog">
    <card class="col-lg-3 col-sm-4 col-xs-6 my-card" :blog="blog" v-for="(blog, index) in blogs" :key="index" />
    <div class="col-lg-3 col-sm-4 col-xs-6 add">
      <img src="~assets/img/add.svg" alt="" @click="ShowAddBlogWindow">
    </div>

    <add-blog-window v-if="isShowAddBlogWindow"
                    @closeAddBlogWindow="closeAddBlogWindow"
                    @AddBlog="AddBlog"/>
  </div>
</template>

<script>
import Card from 'components/common/card/Card';
import AddBlogWindow from './childComps/AddBlogWindow';

export default {
  name: "Blog",
  components: {
    Card,
    AddBlogWindow
  },
  data(){
    return {
      blogs: [
        {
          title: "安卓访问本地存储内容遇到的问题",
          watcher: 2,
          comment: 0,
          like: 0
        },
        {
          title: "浅谈对vue的认识",
          watcher: 10,
          comment: 0,
          like: 1
        },
        {
          title: "为什么vue中的data需要定义成一个函数 并返回一个对象",
          watcher: 3,
          comment: 0,
          like: 0
        },
        {
          title: "js中操作数组的方法",
          watcher: 4,
          comment: 0,
          like: 0
        },
        {
          title: "html语义化的意义",
          watcher: 5,
          comment: 1,
          like: 0
        }
      ],
      isShowAddBlogWindow: false
    }
  },
  methods: {
    ShowAddBlogWindow(){
      if(this.$store.state.isLogin){
        this.isShowAddBlogWindow = !this.isShowAddBlogWindow
      }else{
        this.$toast.err("您还未登陆")
      }
    },
    closeAddBlogWindow(){
      this.isShowAddBlogWindow = false;
    },
    AddBlog(blog){
      this.blogs.push(blog);
      this.closeAddBlogWindow();
    }
  }
}
</script>

<style>
.blog{
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.my-card{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  margin-top: 10px;
}
.add{
  display: flex;
  justify-content: center;
  align-items: center;
}
.add img{
  width: 40%;
  cursor: pointer
}
</style>