<script setup lang="ts">
import { ref } from "vue";
const props = defineProps(["idx"]);

const mouseoverItem = ref<number>();
const mouseoverEvent = (idx: number) => (mouseoverItem.value = idx);
const mouseoutEvent = () => (mouseoverItem.value = undefined);
</script>
<template>
  <div class="container">
    <q-img
      src="/src/assets/feeds1.jpeg"
      ratio="1"
      @mouseover="mouseoverEvent(idx)"
      @mouseout="mouseoutEvent"
    >
      <div
        :class="{ hidden: mouseoverItem !== idx }"
        class="absolute-full text-subtitle2 flex flex-center"
      >
        ♥︎ 155 &nbsp; 💬 12324
      </div>
    </q-img>
  </div>
</template>
<style scoped>
.container {
  position: relative;
  display: flex;
}
</style>
