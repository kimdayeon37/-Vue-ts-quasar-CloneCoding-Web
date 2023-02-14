<script setup lang="ts">
import { ref } from "vue";

const reelsHover = ref(false);
const playHover = ref(false);
</script>
<template>
  <div
    @mouseenter="reelsHover = true"
    @mouseleave="reelsHover = false"
    class="container row justify-center items-center"
  >
    <q-img src="/src/assets/feeds1.jpeg" :ratio="9 / 16">
      <div class="bottom-left" @mouseenter="playHover = false" @mouseleave="playHover = true">
        <div v-view="playHover" class="playcount">
          <div>► 834만회</div>
        </div>
      </div>
    </q-img>

    <div v-if="reelsHover" class="hover"></div>
    <div v-if="reelsHover" class="hover-text">
      <div>♥︎ 155 &nbsp; 💬 12324</div>
    </div>
  </div>
</template>
<style scoped>
.container {
  position: relative;
  display: flex;
}
.text-subtitle2 {
  background-color: black;
  opacity: 0.5;
}
.bottom-left {
  position: absolute;
  bottom: 0px;
}
.playcount {
  font-size: 1.5em;
  font-weight: bold;
  color: white;
}
.hover {
  position: absolute;
  width: 85%;
  height: 90%;
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
