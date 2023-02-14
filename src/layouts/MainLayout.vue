<script setup lang="ts">
import { ref } from "vue";
import { useHeaderbarStore } from "@/store/modules/headerbar";
const headerbar = useHeaderbarStore();
</script>

<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="headerbar.toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Clone Coding
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="headerbar.leftDrawerOpen" side="left" bordered>
      <q-list bordered separator>
        <q-item clickable v-ripple to="/">
          <q-item-section @click="headerbar.toggleLeftDrawer">home</q-item-section>
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

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>