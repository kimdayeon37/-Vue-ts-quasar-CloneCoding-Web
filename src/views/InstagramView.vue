<script setup lang="ts">
import { ref } from "vue";
import FeedsHover from "../components/InstagramFeeds.vue";
import ReelsHover from "../components/InstagramReels.vue";
import { useHeaderbarStore } from "@/store/modules/headerbar";
import "../style/_mixin.scss";

const headerbar = useHeaderbarStore();

const tab = ref("feeds");
const text = ref("");
// const leftDrawerOpen = ref(false);
// const toggleLeftDrawer = () => {
//   leftDrawerOpen.value = !leftDrawerOpen.value;
// };
</script>

<template>
  <q-header class="bg-white text-black">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="headerbar.toggleLeftDrawer" />
      <div class="topbar row">
        <div class="col-md-12 offset-md-5">
          <div class="row q-gutter-xl justify-between items-center">
            <div class="logo row">
              <img class="filter size-m" src="../assets/instagram_logo_icon.svg" />
            </div>
            <div class="searchbar">
              <q-input v-model="text" input-class="text-right" class="q-ml-md">
                <template v-slot:append>
                  <q-icon v-if="text === ''" name="search" />
                  <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
                </template>
              </q-input>
            </div>

            <div class="q-gutter-sm">
              <q-btn color="primary" label="로그인" />
              <q-btn color="white" text-color="black" label="가입하기" />
            </div>
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
  <div class="q-pa-lg border">
    <br />
    <div class="desktop">
      <div class="row col-12 justify-center q-gutter-xl">
        <q-avatar class="profile-img">
          <q-img src="/src/assets/shm.jpeg" />
        </q-avatar>
        <div class="col-4 row q-col-gutter-sm">
          <div class="col-12 row q-gutter-sm">
            <div class="row items-center">
              <div class="nickname">hm_son7</div>
              <q-icon
                name="img:https://img.icons8.com/color/480/instagram-verification-badge.png"
                size="25px"
              />
            </div>
            <div class="q-gutter-sm">
              <q-btn label="팔로우" class="col mycolor" />
              <q-btn label="메세지 보내기" class="col mycolor" />
            </div>
          </div>
          <div class="col-12 row q-gutter-lg info">
            <div>게시물 <b>189</b></div>
            <div>팔로워 <b>1143</b></div>
            <div>팔로우 <b>209</b></div>
          </div>
          <div class="col-12 column">
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
        <div class="col-sm-8 offset-sm-2 border">
          <q-tabs
            v-model="tab"
            class="tabs"
            align="center"
            switch-indicator
            narrow-indicator
          >
            <q-icon
              name="img:https://cdn2.iconfinder.com/data/icons/instagram-outline/19/13-512.png"
              size="20px"
            />
            <q-tab name="feeds" label="게시물" />

            <q-icon
              name="img:https://cdn3.iconfinder.com/data/icons/instagram-latest/1000/Instagram_reels-512.png"
              size="20px"
            />
            <q-tab name="reels" label="릴스" />
          </q-tabs>
        </div>
      </div>
    </div>
  </div>
  <!-------------- mobile ----------->
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
          <q-btn size="12px" label="팔로우" class="col mobile-mycolor" />
          <q-btn size="12px" label="메세지 보내기" class="col mobile-mycolor" />
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
  </div>
  <!------------------->
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8">
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="feeds">
          <div class="row justify-center q-col-gutter-lg">
            <FeedsHover class="col-4" v-for="n in 9" :key="`xl-${n}`" />
          </div>
        </q-tab-panel>

        <q-tab-panel name="reels">
          <div class="row justify-center q-col-gutter-lg">
            <ReelsHover class="col-3" v-for="n in 4" :key="`xl-${n}`" />
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<style scoped lang="scss">
.desktop {
  display: block;
}
.mobile {
  display: none;
}
.filter {
  filter: invert(100%) sepia(38%) saturate(49%) hue-rotate(333deg) brightness(10%)
    contrast(94%);
}
.q-pa-lg {
  background-color: #fafafa;
}
.mycolor {
  background-color: #efefef;
  border-radius: 8px;
  font-weight: bold;
}
.nickname {
  font-size: 1.9em;
}
.profile-img {
  width: 150px;
  height: auto;
}
.info {
  font-size: 1.2em;
}
.tabs {
  background-color: #fafafa;
}
.border {
  border-top: #dbdbdb solid 1px;
  margin-right: auto;
}

@media (max-width: 700px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
    margin-top: -50px;
    margin-left: 15px;
  }
  .searchbar {
    display: none;
  }
  .profile-mobile-img {
    width: 90px;
    height: auto;
  }
  .mobile-nickname {
    font-size: 1.3rem;
  }
  .mobile-mycolor {
    background-color: #efefef;
    border-radius: 8px;
    font-weight: bold;
  }
  .info {
    display: none;
  }
}
</style>
