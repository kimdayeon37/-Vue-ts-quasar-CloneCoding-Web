<script setup lang="ts">
import { ref } from "vue";
import { useHeaderbarStore } from "@/store/modules/headerbar";
import { useQuasar } from "quasar";

const headerbar = useHeaderbarStore();

const isSearchFocus = ref(false);
const searchVal = ref("");

const $q = useQuasar();
const toggleDark = () => $q.dark.toggle();

const tab = ref("feeds");
const text = ref("");
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
          <img class="filter size-m" :class="{ 'filter-bg': $q.dark.isActive }" src="../assets/instagram_logo_icon.svg" />
          <div class="search row items-center" v-if="$q.screen.width >= 670">
            <q-input
              class="col-grow"
              v-model="searchVal"
              outlined
              square
              dense
              placeholder="검색"
              @focus="isSearchFocus = true"
              @blur="isSearchFocus = false"
            >
              <template #prepend>
                <q-icon name="search" />
              </template>
            </q-input>
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
  width: 20%;
}
.filter {
        filter: invert(100%) sepia(98%) saturate(99%) hue-rotate(333deg) brightness(100%)
          contrast(2%);
      }

.filter-bg{
  filter: invert(100%) sepia(98%) saturate(99%) hue-rotate(333deg) brightness(100%)
          contrast(2%);
      }

</style>
