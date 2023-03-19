<script setup lang="ts">
import { ref } from "vue";
import FeedsHover from "../components/instagram/InstagramFeeds.vue";
import ReelsHover from "../components/instagram/InstagramReels.vue";
import InstaMobile from "../components/instagram/InstaMobile.vue";


const tab = ref("feeds");
// const leftDrawerOpen = ref(false);
// const toggleLeftDrawer = () => {
//   leftDrawerOpen.value = !leftDrawerOpen.value;
// };
</script>

<template>
  <q-page class="q-pa-lg border" :class="{ 'dark-bg': $q.dark.isActive }">
    <br />
    <div class="desktop">
      <div class="row justify-center q-gutter-xl q-pb-md">
        <q-avatar class="profile-img">
          <q-img src="/src/assets/shm.jpeg" />
        </q-avatar>
        <div class="col-4 q-col-gutter-sm">
          <div class="col-12 row q-gutter-sm">
            <div class="row items-center">
              <div class="nickname">hm_son7</div>
              <q-icon
                name="img:https://img.icons8.com/color/480/instagram-verification-badge.png"
                size="25px"
              />
            </div>
            <div class="q-gutter-sm">
              <q-btn
                label="팔로우"
                class="col mycolor"
                :class="{ 'dark-bg': $q.dark.isActive }"
              />
              <q-btn
                label="메세지 보내기"
                class="col mycolor"
                :class="{ 'dark-bg': $q.dark.isActive }"
              />
            </div>
          </div>
          <div class="row q-gutter-lg count">
            <div>게시물 <b>189</b></div>
            <div>팔로워 <b>1143</b></div>
            <div>팔로우 <b>209</b></div>
          </div>
          <div class="col">
            <div><b>Son HeungMin(손흥민)🇰🇷</b></div>
            <div>@spursofficial ⚽️🇰🇷🇬🇧 @adidasfootball</div>
            <div>
              <a href="www.facebook.com/HeungMinSonOfficial"
                >www.facebook.com/HeungMinSonOfficial</a
              >
            </div>
          </div>
        </div>
      </div>
      <br /><br />

      <div class="row">
        <q-tabs
          v-model="tab"
          class="full-width"
          switch-indicator
          narrow-indicator
          :inline-label="$q.screen.gt.sm"
        >
          <q-tab name="feeds" label="게시물" icon="grid_on" />
          <q-tab name="reels" label="릴스" icon="slideshow" />
        </q-tabs>
      </div>
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="feeds">
              <div class="row justify-center q-col-gutter-lg">
                <FeedsHover class="col-4" v-for="i in 9" :key="i" :idx="i" />
              </div>
            </q-tab-panel>

            <q-tab-panel name="reels">
              <div class="row justify-center q-col-gutter-lg">
                <ReelsHover class="col-3" v-for="i in 4" :key="i" :idx="i" />
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </div>
    </div>

    <!-----mobile version---->
    <InstaMobile />
    <!----------------------->
  </q-page>
</template>

<style scoped lang="scss">
@import "@/style/mixin";
</style>
