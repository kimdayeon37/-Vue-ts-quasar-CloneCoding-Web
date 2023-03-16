<template>
  <div class="mobile">
    <div class="row">
      <q-avatar class="profile-mobile-img">
        <q-img src="/src/assets/shm.jpeg" />
      </q-avatar>
      <div class="column q-pl-lg">
        <div class="row items-center">
          <div class="mobile-nickname q-mb-sm">hm_son7</div>
          <q-icon
            name="img:https://img.icons8.com/color/480/instagram-verification-badge.png"
            size="20px"
          />
        </div>
        <div class="q-gutter-sm">
          <q-btn
            size="12px"
            label="팔로우"
            class="col mycolor"
            :class="{ 'dark-bg': $q.dark.isActive }"
          />
          <q-btn
            size="12px"
            label="메세지 보내기"
            class="col mycolor"
            :class="{ 'dark-bg': $q.dark.isActive }"
          />
        </div>
      </div>
    </div>
    <br />
    <div><b>Son HeungMin(손흥민)🇰🇷</b></div>
    <div>@spursofficial ⚽️🇰🇷🇬🇧 @adidasfootball</div>
    <div>
      <a href="www.facebook.com/HeungMinSonOfficial"
        >www.facebook.com/HeungMinSonOfficial</a
      >
    </div>
    <br />

    <div class="border row justify-around q-pt-sm q-pb-sm">
      <div class="col column flex-center">
        <div>게시물</div>
        <div><b>189</b></div>
      </div>
      <div class="col column flex-center">
        <div>팔로워</div>
        <div><b>1145만</b></div>
      </div>
      <div class="col column flex-center">
        <div>팔로우</div>
        <div><b>209</b></div>
      </div>
    </div>
    <q-tabs v-model="tab" class="border tabs" align="center" switch-indicator>
      <q-tab name="feeds">
        <q-icon
          name="img:https://cdn2.iconfinder.com/data/icons/instagram-outline/19/13-512.png"
          size="20px"
        />
      </q-tab>
      <q-tab name="reels">
        <q-icon
          name="img:https://cdn3.iconfinder.com/data/icons/instagram-latest/1000/Instagram_reels-512.png"
          size="20px"
        />
      </q-tab>
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="feeds">
        <div class="row justify-center q-col-gutter-lg">
          <FeedsHover class="col-4" v-for="i in 9" :key="i" :idx="i"/>
        </div>
      </q-tab-panel>

      <q-tab-panel name="reels">
        <div class="row justify-center q-col-gutter-lg">
          <ReelsHover class="col-3" v-for="i in 4" :key="i" :idx="i" />
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FeedsHover from "./InstagramFeeds.vue";
import ReelsHover from "./InstagramReels.vue";
const tab = ref("feeds");
</script>
<style scoped lang="scss">
@import "@/style/mixin";
</style>
