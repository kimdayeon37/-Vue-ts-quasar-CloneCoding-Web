<script setup lang="ts">
import { ref } from "vue";
import { useHeaderbarStore } from "@/store/modules/headerbar";
import { useQuasar } from "quasar";

const headerbar = useHeaderbarStore();

const $q = useQuasar();
const toggleDark = () => $q.dark.toggle();
</script>

<template>
  <q-header class="menu text-white" :class="{ 'dark-bg': $q.dark.isActive }">
    <q-toolbar>
      <q-btn
        dense
        flat
        round
        icon="menu"
        :class="{ 'menu-bg': $q.dark.isActive }"
        @click="headerbar.toggleLeftDrawer"
      />
      <div class="col-md-7 offset-md-2">
        <div class="row q-gutter-xl justify-between items-center">
          <img
            class="filter"
            :class="{ 'filter-bg': $q.dark.isActive }"
            src="../assets/apple_logo_icon.svg"
          />
          <div class="search row items-center" v-if="$q.screen.width >= 700">
            <div class="store">스토어</div>
            <div class="store">Mac</div>
            <div class="store">iPad</div>
            <div class="store">iPhone</div>
            <div class="store">Watch</div>
            <div class="store">AirPods</div>
            <div class="store">TV 및 홈</div>
            <div class="store">엔터테인먼트</div>
            <div class="store">액세러리</div>
            <div class="store">고객지원</div>
          </div>
          <div class="add-img">
            <img src="../assets/search.svg" />
            <img src="../assets/bag.svg" />
          </div>

          <q-btn
            dense
            flat
            round
            icon="invert_colors"
            :class="{ 'menu-bg': $q.dark.isActive }"
            @click="toggleDark"
          />
        </div>
      </div>
    </q-toolbar>
  </q-header>
</template>

<style scoped lang="scss">
.dark-bg {
  background-color: #1d1d1d !important;
}
.menu {
  background-color: #454545;
}
.menu-bg {
  color: gray !important;
}

.filter {
  filter: invert(100%) sepia(98%) saturate(99%) hue-rotate(333deg) brightness(100%)
    contrast(90%);
}

.filter-bg {
  filter: invert(100%) sepia(98%) saturate(99%) hue-rotate(333deg) brightness(100%)
    contrast(10%);
}
.add-img {
    filter: invert(100%) sepia(98%) saturate(99%) hue-rotate(333deg) brightness(100%)
    contrast(90%);
}
</style>
