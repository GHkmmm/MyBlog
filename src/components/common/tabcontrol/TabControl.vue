<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" @click="itemClick(index)">
      {{item}}
      <div class="triangle" v-show="currentIndex == index"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
      this.$emit("itemClick", index);
    }
  }
}
</script>

<style>
.tab-control {
  line-height: 48px;
  background-color: #828A8D;
  display: flex;
  color: #eee;
}
.tab-control * {
  flex: 1;
  text-align: center;
  cursor: pointer;
}
.triangle{
  width: 0;
  height: 0;
  border-right: 12px solid transparent;
  border-bottom: 12px solid #fff;
  border-left: 12px solid transparent;
  margin: 0 auto;
}
</style>