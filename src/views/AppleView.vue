<script setup lang="ts">
import { ref } from "vue";
import { useHeaderbarStore } from "@/store/modules/headerbar";
const headerbar = useHeaderbarStore();

const text = ref("");
</script>

<template>
  <q-header elevated class="bg-white text-black">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="headerbar.toggleLeftDrawer" />
      <div class="topbar row">
        <div class="col-md-12 offset-md-12">
          <div class="row q-gutter-xl justify-between items-center">
            <div class="logo row">
              <img class="filter size-m" src="../assets/apple_logo_icon.svg" />
            </div>

            <q-input v-model="text" input-class="text-right" class="q-ml-md">
              <template v-slot:append>
                <q-icon v-if="text === ''" name="search" />
                <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
              </template>
            </q-input>
          </div>
        </div>
      </div>
    </q-toolbar>
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

<style scope>

</style>
