<template>
  <q-header elevated class="bg-black text-white">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="headerbar.toggleLeftDrawer" />
      <a class="logo"> 4 Web Clone Coding </a>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { useHeaderbarStore } from "@/store/modules/headerbar";
const headerbar = useHeaderbarStore();

</script>

<style scoped>
.logo {
  position: relative;
  font-size: 29.2px;
  font-weight: bold;
  color: white;
  margin-left: 30px;
  padding-top: 10px;
  font-family: "NotoSansKR";
  transition: 0.3s;
}

</style>
