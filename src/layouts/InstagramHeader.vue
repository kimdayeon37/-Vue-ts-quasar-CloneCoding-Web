<script setup lang="ts">
import { ref } from "vue";
import { useHeaderbarStore } from "@/store/modules/headerbar";
import { useQuasar } from "quasar";

const headerbar = useHeaderbarStore();

const isSearchFocus = ref(false);
const clickSearch = () => {
  isSearchFocus.value = !isSearchFocus.value;
};

const $q = useQuasar();
const toggleDark = () => $q.dark.toggle();
</script>

<template>
  <q-header class="bg-white text-black" :class="{ 'dark-bg': $q.dark.isActive }">
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
          @click="$router.push('/instagram')"
            class="filter size-m"
            :class="{ 'filter-bg': $q.dark.isActive }"
            src="../assets/instagram_logo_icon.svg"
          />
          <div class="search row items-center" v-if="$q.screen.width >= 1150">
            <div
              v-if="!isSearchFocus"
              @click="clickSearch"
              class="col row items-center justify-start"
            >
              <q-icon name="search" class="search-img" />
            </div>
            <input @click="clickSearch" class="col-grow" placeholder="검색" />
            <div
              v-if="isSearchFocus"
              class="after-click col row items-center justify-between"
            >
              <div class="exit-search col row justify-end" @click="clickSearch">⨉</div>
            </div>
          </div>

          <div class="q-gutter-sm">
            <q-btn color="primary" label="로그인" />
            <q-btn color="white" text-color="black" label="가입하기" />
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
      </div>
    </q-toolbar>
  </q-header>
</template>

<style scoped lang="scss">
.dark-bg {
  background-color: #1d1d1d !important;
}
.menu-bg {
  color: white !important;
}
.search {
  width: 30%;
  border-radius: 10px;
  background-color: #efefef;
}
.search-img {
  margin-left: 10px;
  width: 15px;
  height: 15px;
}
.filter {
    cursor: pointer;
}

.filter-bg {
  filter: invert(100%) sepia(9%) saturate(1%) hue-rotate(3deg) brightness(300%)
    contrast(100%);
}

.col-grow {
  padding: 8px;
  border-radius: 10px;
  background-color: #efefef;
  border: none;
}
.col-grow:focus {
  outline: none;
}
.exit-search{
  margin-right: 10px;
}
</style>
