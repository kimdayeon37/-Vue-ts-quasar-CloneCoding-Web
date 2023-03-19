<script setup lang="ts">
import { ref } from "vue";
import { useHeaderbarStore } from "@/store/modules/headerbar";
import { useQuasar } from "quasar";

const headerbar = useHeaderbarStore();

const isSearchFocus = ref(false);
const searchVal = ref("");

const $q = useQuasar();
const toggleDark = () => $q.dark.toggle();
</script>

<template>
  <q-header class="header bg-white text-black" :class="{'dark-bg':$q.dark.isActive}">
    <q-toolbar>
      <q-btn dense flat round icon="menu" :class="{'menu-bg':$q.dark.isActive}" @click="headerbar.toggleLeftDrawer" />
        <img src="/src/assets/youtube_logo_icon.svg" />
      <q-space />

      <div class="search row items-center" v-if="$q.screen.width >= 710">
        <q-input
          class="col-grow"
          v-model="searchVal"
          outlined
          rounded
          dense
          placeholder="검색"
          @focus="isSearchFocus = true"
          @blur="isSearchFocus = false"
        >
          <template v-if="isSearchFocus" #prepend>
            <q-icon name="search" />
          </template>
          <template #append>
            <div class="keyboard">
              <q-icon name="keyboard" />
            </div>
            <q-btn
              class="search-btn"
              icon="search"
              unelevated
              color="grey-3"
              text-color="black"
              rounded
            />
          </template>
        </q-input>

        <q-btn
          class="q-ml-sm"
          :class="{'menu-bg':$q.dark.isActive}"
          icon="mic"
          round
          text-color="black"
          unelevated
        />
      </div>

      <q-space />

      <q-btn flat round icon="more_vert" class="q-mr-sm" :class="{'menu-bg':$q.dark.isActive}" />

      <q-btn outline rounded color="primary" :class="{'menu-bg':$q.dark.isActive}" icon="account_circle" label="로그인" />
      <q-btn dense flat round icon="invert_colors" :class="{'menu-bg':$q.dark.isActive}" @click="toggleDark" />
    </q-toolbar>
  </q-header>
</template>

<style lang="scss" scoped>
.dark-bg{
    background-color: #1D1D1D !important;
}
.q-toolbar {
  height: 56px;
}
.menu-bg {
  // color: white !important;
}
.search {
  width: 50%;
  &-btn {
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    border-color: #c9c9c9;
    max-width: 60px;
    width: 100%;
    height: 40px;
    margin: -12px;
  }
}
.keyboard {
  margin: 20px;
}
</style>
