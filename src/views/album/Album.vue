<template>
  <div class="album">
    <masonry-layout>
      <img src="https://s1.ax1x.com/2020/06/01/tJWrtI.md.jpg" alt="">
      <img src="https://s1.ax1x.com/2020/06/01/tJRpZ9.md.jpg" alt="">
      <img src="https://s1.ax1x.com/2020/06/01/tJRiPx.md.jpg" alt="">
      <img src="https://s1.ax1x.com/2020/06/01/tJ2zqJ.md.jpg" alt="">
      <img src="https://s1.ax1x.com/2020/06/01/tJ2xr4.md.jpg" alt="">
      <img src="https://s1.ax1x.com/2020/06/01/tJRkRK.md.jpg" alt="">
      <img src="https://s1.ax1x.com/2020/06/01/tJRFG6.md.jpg" alt="">
      <img src="https://s1.ax1x.com/2020/06/01/tJRAxO.md.jpg" alt="">
      <img src="https://s1.ax1x.com/2020/06/01/tJRZse.md.jpg" alt="">
      <img src="https://s1.ax1x.com/2020/06/01/tJReqH.md.jpg" alt="">
    </masonry-layout>
  </div>
</template>

<script>
import MasonryLayout from 'components/common/masonrylayout/MasonryLayout';

export default {
  name: "Album",
  components: {
    MasonryLayout
  }
}
</script>

<style scoped>
.album{
  margin-top: 10px;
}
img{
  width: 100%;
  height: auto;
  margin-top: 10px;
  box-shadow: #333 2px 2px 5px;
}
</style>