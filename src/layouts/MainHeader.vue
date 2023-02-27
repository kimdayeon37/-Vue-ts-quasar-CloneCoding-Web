<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="headerbar.toggleLeftDrawer" />

      <q-toolbar-title>
        <q-avatar>
          <q-img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        Clone Coding
      </q-toolbar-title>
      <q-btn dense flat round icon="invert_colors" @click="toggleDark" />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { useHeaderbarStore } from "@/store/modules/headerbar";
const headerbar = useHeaderbarStore();

const $q = useQuasar();
const toggleDark = () => $q.dark.toggle();
</script>
