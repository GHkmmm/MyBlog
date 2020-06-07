<template>
  <div class="masonry-layout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MasonryLayout"
}
</script>

<style scoped>
.masonry-layout{
  height: 100%;
}
@media (min-width: 822px) {
  .masonry-layout{
    column-count: 4;
  }
}
@media (max-width: 822px) {
  .masonry-layout{
    column-count: 3;
  }
}
@media (max-width: 575px) {
  .masonry-layout{
    column-count: 2;
  }
}
</style>