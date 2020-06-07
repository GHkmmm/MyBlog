<template>
  <div class="" @mouseenter="TouchCard" @mouseleave="LeaveCard" v-if="isShowBlog">
    <div class="card">
      <slot></slot>
      <div class="blog-title" ref="blogTitle">{{blog.title}}</div>
      <div class="bottom-info d-flex justify-content-around">
        <div class="watcher">
          <img src="~assets/img/card/watcher.svg" alt="">
          <span>{{blog.watcher}}</span>
        </div>
        <div class="comment">
          <img src="~assets/img/card/comment.svg" alt="">
          <span>{{blog.comment}}</span>
        </div>
        <div class="like">
          <img src="~assets/img/card/like.svg" alt="">
          <span>{{blog.like}}</span>
        </div>
      </div>
      <div class="more" ref="more">
        <div class="learn-more-btn">了解更多</div>
      </div>
      <img class="delete-blog-btn" 
            ref="deleteBlogBtn" 
            src="~assets/img/card/delete.svg" 
            alt=""
            @click="deleteBlog">
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    blog: {
      type: Object,
      default: {}
    }
  },
  data(){
    return {
      isShowBlog: true,
      timer: null
    }
  },
  mounted(){
    // this.changeFontSize();
  },
  methods: {
    TouchCard(){
      this.timer = setTimeout(()=>{
        let moreStyle = this.$refs.more.style;
        let cardHeight = this.$refs.more.clientHeight;
        let blogTitleStyle = this.$refs.blogTitle.style;
        let deleteBlogBtn = this.$refs.deleteBlogBtn.style;

        moreStyle.transform = `translateY(-${cardHeight}px)`;
        moreStyle.transition = `.6s`;

        blogTitleStyle.filter = `blur(4px)`;
        blogTitleStyle.transform = `scale(0.9)`;
        blogTitleStyle.transition = `.6s`;
        
        deleteBlogBtn.transform = `translateY(40px)`;
        deleteBlogBtn.transition = `.6s`;
      },1000)
    },
    LeaveCard(){
      clearTimeout(this.timer);
      let moreStyle = this.$refs.more.style;
      let cardHeight = this.$refs.more.clientHeight;
      let blogTitleStyle = this.$refs.blogTitle.style;
      let deleteBlogBtn = this.$refs.deleteBlogBtn.style;

      moreStyle.transform = `translateY(${cardHeight}px)`;

      blogTitleStyle.filter = `blur(0)`;
      blogTitleStyle.transform = `scale(1)`;

      deleteBlogBtn.transform = `translateY(0)`;
    },

    deleteBlog(){
      if(this.$store.state.isLogin){
        this.isShowBlog = false;
      }else{
        this.$bus.$emit("DeleteBlog")
      }
    }

    // changeFontSize(){
    //   var card = document.getElementsByClassName("card")[0];
    //   var title = document.getElementsByClassName("bog-title")[0];
    //   var zoom = card.offsetWidth/300;
    //   title.style.zoom = zoom;
    //   title.style.transform = `scale(${zoom})`;
    // }
  }
}
</script>

<style scoped>
.card{
  height: 0;
  background-color: #fff;
  color: #666;
  /* 修改paddingBottom的值来改变容器高度 */
  padding-bottom: 125%;

  border-radius: 10px;

  overflow: hidden;
}
.card:hover{
  box-shadow: 2px 2px 5px;
  transform: scale(1.01);
  transition: .6s;
}

.blog-title{
  text-align: center;
  padding-top: 40%;
}

.bottom-info{
  width: 100%;
  display: flex;

  position: absolute;
  bottom: 5px;
  left: 0;
}
.bottom-info *{
  /* flex: 1; */
  font-size: 18px;
  color: #bfbfbf;
}
.watcher img,
.comment img,
.like img{
  width: 25px;
  height: auto;
}
.watcher span,
.comment span,
.like span{
  margin-left: 5px;
}

.more{
  width: 100%;
  height: 70px;
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 18px;

  bottom: -70px;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background-color: #eee;
  border-radius: 20px 20px 0 0;
}
.learn-more-btn{
  width: 50%;
  line-height: 30px;
  margin: 0 auto;
  background-color: #06c;
  color: #fff;
  border-radius: 50px;
  margin-bottom: 5px;
  cursor: pointer;
}

.delete-blog-btn{
  width: 35px;
  position: absolute;
  top: -35px;
  right: 5px;
  cursor: pointer;
}
</style>