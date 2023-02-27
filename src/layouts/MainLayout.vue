<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";
import { useHeaderbarStore } from "@/store/modules/headerbar";
import { useQuasar } from "quasar";
const headerbar = useHeaderbarStore();

const MainHeaderComp = defineAsyncComponent(() => import('./MainHeader.vue'))
const InstagramHeaderComp = defineAsyncComponent(() => import('./InstagramHeader.vue'))
const YoutubeHeaderComp = defineAsyncComponent(() => import('./YoutubeHeader.vue'))

const leftMenuItem = ref<{ url: string; text: string }[]>([
  { url: "/", text: "Home" },
  { url: "/instagram", text: "Instagram" },
  { url: "/youtube", text: "Youtube" },
  { url: "/apple", text: "Apple" },
]);

const $q = useQuasar();
const toggleDark = () => $q.dark.toggle();
</script>

<template>
  <q-layout view="hHh LpR fFf">
    <!-- Header layout -->
    <MainHeaderComp v-if="$route.name !== 'youtube'" :drawer="headerbar.leftDrawerOpen" @update:drawer="headerbar.toggleLeftDrawer"/>
    <InstagramHeaderComp v-if="$route.name === 'instagram'" :drawer="headerbar.leftDrawerOpen" @update:drawer="headerbar.toggleLeftDrawer" />
    <YoutubeHeaderComp v-if="$route.name === 'youtube'" :drawer="headerbar.leftDrawerOpen" @update:drawer="headerbar.toggleLeftDrawer" />
    <!-- drawer content -->
    <q-drawer show-if-above v-model="headerbar.leftDrawerOpen" side="left" :width="240">
      <q-list bordered separator>
        <q-item
          clickable
          v-ripple
          v-for="(item, idx) in leftMenuItem"
          :key="idx"
          :to="item.url"
        >
          <q-item-section @click="headerbar.toggleLeftDrawer">{{
            item.text
          }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="z-index">
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style lang="scss" scoped>
  .z-index {
    position: relative;
    z-index: 1;
  }
</style>
