<template>
  <swiper>
    <swiper-item>
      <img src="~assets/img/projects/mall/home1.png" alt="">
    </swiper-item>
    <swiper-item>
      <img src="~assets/img/projects/mall/home2.png" alt="">  
    </swiper-item>
    <swiper-item>
      <img src="~assets/img/projects/mall/detail1.png" alt="">
    </swiper-item>
    <swiper-item>
      <img src="~assets/img/projects/mall/detail2.png" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper/index";

export default {
  name: "ProjectSwiper",
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style>

</style>