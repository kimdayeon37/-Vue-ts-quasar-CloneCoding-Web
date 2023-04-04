<script setup lang="ts">
import YoutubeBoxComp from "../components/YoutubeBox.vue";

import { useQuasar } from "quasar";
import { ref } from "vue";
const leftDrawerOpen = ref(false);
const miniOnOff = ref(true);
const category = ref("all");
const categoryAll = ref(true);

const $q = useQuasar();
const toggleDark = () => $q.dark.toggle();

const q = useQuasar();
const toggleLeftDrawer = () => {
  if (q.screen.width > 790) {
    leftDrawerOpen.value = true;
    miniOnOff.value = !miniOnOff.value;
  } else {
    leftDrawerOpen.value = !leftDrawerOpen.value;
  }
};

const selectCategory = (_category: string) => {
  if (_category == "all") {
    category.value = _category;
    categoryAll.value = true;
  } else {
    category.value = _category;
    categoryAll.value = false;
  }
};

const videoItem = ref<{ group: string; title: string; profile: string; channel: string; count: number; img: string; }[]>([
  { group: "news", title: "뉴스1", profile: "/src/assets/shm.jpeg", channel: "뉴스채널1", count: 100, img: "https://cdn.quasar.dev/img/mountains.jpg"},
  { group: "news", title: "뉴스2", profile: "/src/assets/shm.jpeg", channel: "뉴스채널2", count: 321, img: "https://cdn.quasar.dev/img/mountains.jpg" },
  { group: "news", title: "뉴스3", profile: "/src/assets/shm.jpeg", channel: "뉴스채널3", count: 231, img: "https://cdn.quasar.dev/img/mountains.jpg"},
  { group: "news", title: "뉴스4", profile: "/src/assets/shm.jpeg", channel: "뉴스채널4", count: 111, img: "https://cdn.quasar.dev/img/mountains.jpg" },
  { group: "news", title: "뉴스4", profile: "/src/assets/shm.jpeg", channel: "뉴스채널4", count: 111, img: "https://cdn.quasar.dev/img/mountains.jpg" },

  { group: "music", title: "노래1", profile: "/src/assets/shm.jpeg", channel: "노래채널1", count: 22, img: "https://cdn.quasar.dev/img/parallax2.jpg" },
  { group: "music", title: "노래2", profile: "/src/assets/shm.jpeg", channel: "노래채널2", count: 12, img: "https://cdn.quasar.dev/img/parallax2.jpg" },
  { group: "game", title: "게임1", profile: "/src/assets/shm.jpeg", channel: "게임채널2", count: 131, img: "https://picsum.photos/500/300" },
  { group: "game", title: "게임2", profile: "/src/assets/shm.jpeg", channel: "게임채널2", count: 122, img: "https://picsum.photos/500/300" },


]);

</script>
<template>
  <q-layout>
    <q-header class="header bg-white" :class="{'dark-bg':$q.dark.isActive}">
      <q-toolbar>
        <q-btn dense flat round icon="menu" color="black" :class="{'menu-bg':$q.dark.isActive}" @click="toggleLeftDrawer" />

        <q-toolbar-title class="row items-center">
          <div class="categories row">
            <div class="category" :class="{'button-bg':$q.dark.isActive}" @click="selectCategory('all')">전체</div>
            <div class="category" :class="{'button-bg':$q.dark.isActive}" @click="selectCategory('news')">뉴스</div>
            <div class="category" :class="{'button-bg':$q.dark.isActive}" @click="selectCategory('game')">게임</div>
            <div class="category" :class="{'button-bg':$q.dark.isActive}" @click="selectCategory('music')">음악</div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      :width="230"
      :mini="miniOnOff"
    >

      <q-list class="item-center">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="home" />
            <div class="mini-caption q-mini-drawer-only">홈</div>
          </q-item-section>

          <q-item-section>홈</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="music_video" />
            <div class="mini-caption q-mini-drawer-only">shorts</div>
          </q-item-section>

          <q-item-section>Shorts</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="ondemand_video" />
            <div class="mini-caption q-mini-drawer-only">구독</div>
          </q-item-section>

          <q-item-section>구독</q-item-section>
        </q-item>

        <q-separator v-if="!miniOnOff" />

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="video_library" />
            <div class="mini-caption q-mini-drawer-only">시청기록</div>
          </q-item-section>

          <q-item-section>보관함</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="history" />
            <div class="mini-caption q-mini-drawer-only">시청 기록</div>
          </q-item-section>
          <q-item-section>시청 기록</q-item-section>
        </q-item>

        <q-separator v-if="!miniOnOff" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <div class="q-mx-lg q-mt-md">
        <section class="content">
          <div class="row q-col-gutter-x-md q-col-gutter-y-xl">
            <YoutubeBoxComp
              v-for="(item, idx) in videoItem.filter((e) => {
              if (categoryAll) {
                return true;
              } else {
                return e.group == category;
              }
            })"
              :key="idx"
              :title="item.title"
              :profile="item.profile"
              :channel="item.channel"
              :count="item.count"
              :img="item.img"
            />
          </div>
        </section>
      </div>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.dark-bg{
    background-color: #1D1D1D !important;
}
.button-bg{
  color: white !important;
  font-size: medium;
  cursor: pointer;
  border-radius: 5px;
  background-color: white(0, 0, 0, 0.05);
  padding: 0 10px 2px;
  margin: 6px;
}
.menu-bg {
  /* color: white !important; */
}

.mini-caption {
  font-size: 10px;
  margin: auto;
}
.category {
  color: black;
  font-size: medium;
  cursor: pointer;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0 10px 2px;
  margin: 6px;
}
.category:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
