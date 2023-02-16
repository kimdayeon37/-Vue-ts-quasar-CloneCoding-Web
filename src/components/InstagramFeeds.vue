<script setup lang="ts">
import { ref } from "vue";

const feedsHover = ref(false);
</script>
<template>
  <div
    @mouseenter="feedsHover = true"
    @mouseleave="feedsHover = false"
    class="container row justify-center items-center"
  >
    <q-img src="/src/assets/feeds1.jpeg" ratio="1" />
    <div v-if="feedsHover" class="hover"></div>
    <div v-if="feedsHover" class="hover-text">
      <div>♥︎ 155 &nbsp; 💬 12324</div>
    </div>
  </div>
</template>
<style scoped>
.container {
  position: relative;
  display: flex;
}
.hover {
  position: absolute;
  width: 92%;
  height: 92%;
  background-color: black;
  opacity: 0.4;
}
.hover-text {
  position: absolute;
  font-size: 1.5em;
  font-weight: bold;
  color: white;
}
</style>
