<script setup lang="ts">
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
      <link
        href="
https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css
"
        rel="stylesheet"
      />
      <div class="col"></div>
      <div class="col-6">
        <div class="body">
          <div class="header">
            <div class="q-gutter-x-xl">
              <div class="inner">
                <ul class="menu">
                  <li class="apple-logo"><a href="javascript:void(0)">Apple</a></li>
                  <li><a href="javascript:void(0)">Mac</a></li>
                  <li><a href="javascript:void(0)">iPad</a></li>
                  <li><a href="javascript:void(0)">iPone</a></li>
                  <li><a href="javascript:void(0)">Watch</a></li>
                  <li><a href="javascript:void(0)">AirPods</a></li>
                  <li><a href="javascript:void(0)">TV 및 홈</a></li>
                  <li><a href="javascript:void(0)">엔터테인먼트</a></li>
                  <li><a href="javascript:void(0)">액세서리</a></li>
                  <li><a href="javascript:void(0)">고객지원</a></li>
                  <li class="search-starter"><a href="javascript:void(0)">검색</a></li>
                  <li class="basket-starter">
                    <a href="javascript:void(0)">장바구니</a>
                    <div class="dropdown-content">
                      <a href="#">장바구니가 비었습니다</a>
                      <a href="#">장바구니가 비었습니다</a>
                      <a href="#">장바구니가 비었습니다</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col"></div>

      <!-- <q-btn
            dense
            flat
            round
            icon="invert_colors"
            :class="{ 'menu-bg': $q.dark.isActive }"
            @click="toggleDark"
          /> -->
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

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&family=Roboto:wght@400;500;700&display=swap");
.body {
  font-size: 16px;
  line-height: 1;
  font-family: "Roboto", "Noto Sans KR", sans-serif;
}
.header {
  background-color: #3a3a3a;
}
.inner {
  max-width: 1020px;
  margin: 0 auto;
}
ul.menu {
  height: 44px;
  display: flex;
  justify-content: space-between;
}
ul.menu > li {
  display: flex;
  position: relative;
}

ul.menu > li a {
  padding: 0 10px;
  font-size: 11px;
  display: flex;
  align-items: center;
  color: #f5f5f5;
  opacity: 0.8;
  text-decoration: none;
}

ul.menu > li.apple-logo > a,
ul.menu > li.search-starter > a,
ul.menu > li.basket-starter > a {
  width: 14px;
  text-indent: -9999px;
  background-repeat: no-repeat;
  background-position: center 13px;
}
ul.menu > li.apple-logo > a {
  background-image: url("../assets/images/header_apple.svg");
}
ul.menu > li.search-starter > a {
  background-image: url("../assets/images/header_search.svg");
}
ul.menu > li.basket-starter > a {
  background-image: url("../assets/images/header_bag.svg");
  margin-left: 10px;
}
ul.menu > li > a:hover {
  opacity: 1;
}
.dropdown-content{
  display : none;
  position : absolute;
  z-index : 1; /*다른 요소들보다 앞에 배치*/
  font-weight: 400;
  background-color: #f9f9f9;
  min-width : 800px;
}
.dropdown-content a{
  display : block;
  text-decoration : none;
  color : rgb(37, 37, 37);
  font-size: 12px;
  padding : 12px 20px;
}
.dropdown-content a:hover{
  background-color : #ececec
}

.basket-starter:hover .dropdown-content {
  display: block;
}

</style>
