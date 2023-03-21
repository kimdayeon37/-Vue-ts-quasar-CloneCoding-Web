<template>
  <div @click="fire" :class="필터" class="filter-item" :style="`background-image: url(${image})`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    fire() {
      this.emitter.emit("boxclick", this.필터);
    },
  },
  props: {
    image: String,
    필터: String,
  },
};
</script>

<style scoped>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
