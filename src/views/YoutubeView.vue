<script setup lang="ts">
import { ref } from "vue";
import { useHeaderbarStore } from "@/store/modules/headerbar";
const headerbar = useHeaderbarStore();

const text = ref("");
</script>

<template>
  <q-header class="bg-white text-black">
    <div class="row no-wrap">
      <q-toolbar class="col-2">
        <q-btn dense flat round icon="menu" @click="headerbar.toggleLeftDrawer" />

        <img src="../assets/youtube_logo_icon.svg" />
      </q-toolbar>

      <q-toolbar class="col-8 justify-center">
        <q-input v-model="text" input-class="text-right" class="q-ml-xl">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
      </q-toolbar>
      <q-toolbar class="col-2">
        <q-space />
        <q-btn flat round icon="img:/src/assets/video.png" class="q-mr-md" />
        <q-btn flat round icon="img:/src/assets/alarm.png" class="q-mr-md" />
        <q-btn flat round icon="img:/src/assets/my.png" />
      </q-toolbar>
    </div>
  </q-header>

  <q-drawer v-model="headerbar.leftDrawerOpen" side="left" bordered>
    <q-list bordered separator>
      <q-item clickable v-ripple to="/">
        <q-item-section>home</q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/instagram">
        <q-item-section @click="headerbar.toggleLeftDrawer">instagram</q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/youtube">
        <q-item-section @click="headerbar.toggleLeftDrawer">youtube</q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/apple">
        <q-item-section @click="headerbar.toggleLeftDrawer">apple</q-item-section>
      </q-item>
    </q-list>
    <!-- drawer content -->
  </q-drawer>
  <!------------------------------------------------------------------------------->
  <div class="q-pa-lg">
    <br />
  </div>
</template>

<style scope></style>
