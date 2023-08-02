<script setup lang="ts">
import { useHeaderbarStore } from "@/store/modules/headerbar";
import { useQuasar } from "quasar";

const headerbar = useHeaderbarStore();

const $q = useQuasar();
const toggleDark = () => $q.dark.toggle();
import { ref, onMounted, onBeforeUnmount } from "vue";

const isBasketVisible = ref(false);

function toggleBasket(event: MouseEvent) {
  console.log(isBasketVisible.value);
  event.stopPropagation();
  isBasketVisible.value = !isBasketVisible.value;
  console.log(isBasketVisible.value);
}

function hideBasket() {
  isBasketVisible.value = false;
}

onMounted(() => {
  // When the entire screen is clicked, hide the menu.
  window.addEventListener("click", hideBasket);
});

onBeforeUnmount(() => {
  // Clean up the event listener to avoid memory leaks.
  window.removeEventListener("click", hideBasket);
});

// search
// const headerEl = document.querySelector('header')
// const searchWrapEl=headerEl.querySelector('.searh-wrap')
// const searchStarterEl = headerEl.querySelector('.search-starter')
// const searchCloserEl = searchWrapEl.querySelector('.search-closer')
// const searchShadowEl = searchWrapEl.querySelector('.shadow')

// searchStarterEl.addEventListener('click', showSearch)
// searchCloserEl.addEventListener('click', hideSearch)
// searchShadowEl.addEventListener('click', hideSearch)

// function showSearch() {
//   headerEl.classList.add('searching')
// }
// function hideSearch() {
//   headerEl.classList.remove('searching')
// }
const headerEl = ref<HTMLElement>();
const headerMenuEls: { value: HTMLElement[] } = { value: [] };
const searchWrapEl = ref<HTMLElement>();
const searchStarterEl = ref<HTMLElement>();
const searchCloserEl = ref<HTMLElement>();
const searchShadowEl = ref<HTMLElement>();
const searchInputEl = ref<HTMLElement>();
const searchDelayEls: { value: HTMLElement[] } = { value: [] };

function showSearch(): void {
  if (headerEl.value) {
    headerEl.value.classList.add("searching");
    document.documentElement.classList.add("fixed");
    headerMenuEls.value.reverse().forEach(function (el, index) {
      el.style.transitionDelay = (index * 0.4) / headerMenuEls.value.length + "s";
    });
    // .reverse() 사용하지 않고 원래 순서대로 반복 처리.
    searchDelayEls.value.forEach(function (el, index) {
      el.style.transitionDelay = (index * 0.4) / searchDelayEls.value.length + "s";
    });

    // 검색 인풋 요소가 나타난 후 바로 동작!
    setTimeout(() => {
      if (searchInputEl.value !== undefined) {
        searchInputEl.value.focus();
      }
    }, 600);
  }
}

function hideSearch(): void {
  if (headerEl.value) {
    headerEl.value.classList.remove("searching");
    document.documentElement.classList.remove("fixed");
    headerMenuEls.value.reverse().forEach(function (el, index) {
      el.style.transitionDelay = (index * 0.4) / headerMenuEls.value.length + "s";
    });
    searchDelayEls.value.reverse().forEach(function (el, index) {
      el.style.transitionDelay = (index * 0.4) / searchDelayEls.value.length + "s";
    });
    searchDelayEls.value.reverse();
    
      //searchInputEl.value = ''
  }
}

onMounted(() => {
  headerEl.value = document.querySelector("header") as HTMLElement;
  headerMenuEls.value = Array.from(headerEl.value?.querySelectorAll("ul.menu>li") || []);
  searchWrapEl.value = headerEl.value?.querySelector(".search-wrap") as HTMLElement;
  searchStarterEl.value = headerEl.value?.querySelector(".search-starter") as HTMLElement;
  searchCloserEl.value = searchWrapEl.value?.querySelector(
    ".search-closer"
  ) as HTMLElement;
  searchShadowEl.value = searchWrapEl.value?.querySelector(".shadow") as HTMLElement;
  searchInputEl.value = searchInputEl.value?.querySelector("input") as HTMLElement;
  searchDelayEls.value = Array.from(searchWrapEl.value?.querySelectorAll("li") || []);

  if (searchStarterEl.value) {
    searchStarterEl.value.addEventListener("click", showSearch);
  }
  if (searchCloserEl.value) {
    searchCloserEl.value.addEventListener("click", hideSearch);
  }
  if (searchShadowEl.value) {
    searchShadowEl.value.addEventListener("click", hideSearch);
  }
});
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
      <!-- Header -->
      <header>
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
            <li class="search-starter">
              <a href="javascript:void(0)" @click="showSearch">검색</a>
            </li>
            <li class="basket-starter">
              <a href="javascript:void(0)" @click="toggleBasket">장바구니</a>
              <div class="basket" :class="{ show: isBasketVisible }">
                <div class="arrow"></div>
                <div class="message">장바구니가 비어있습니다.</div>
                <ul>
                  <li><a href="javascript:void(0)">장바구니</a></li>
                  <li><a href="javascript:void(0)">저장된 항목</a></li>
                  <li><a href="javascript:void(0)">주문</a></li>
                  <li><a href="javascript:void(0)">계정</a></li>
                  <li><a href="javascript:void(0)">로그인</a></li>
                </ul>
              </div>
            </li>
          </ul>

          <div class="search-wrap">
            <div class="search">
              <div class="shadow"></div>
              <div class="textfield">
                <input type="text" placeholder="apple.com 검색" />
                <div class="search-icon"></div>
                <div class="search-closer"></div>
              </div>
              <div class="autocompletes">
                <h3>빠른 링크</h3>
                <ul>
                  <li>
                    <a href="javascript(0)">Apple Store 임시 휴무 관련 자주하는 질문</a>
                  </li>
                  <li><a href="javascript(0)">Apple Store Online에서 쇼핑하기</a></li>
                  <li><a href="javascript(0)">액세사리</a></li>
                  <li><a href="javascript(0)">AirPods</a></li>
                  <li>
                    <a href="javascript(0)">AirTag</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
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

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&family=Roboto:wght@400;500;700&display=swap");

header {
  --header-height: 44px;
  background-color: var(--color-header);
  position: relative;
  z-index: 9;
}
header .inner {
  max-width: 1020px;
  margin-left: 175px;
}
header ul.menu {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  gap: 40px;
}
header ul.menu > li {
  display: flex;
  position: relative;
  transition: 0.4s;
}

header ul.menu > li a {
  padding: 0 10px;
  font-size: 11px;
  display: flex;
  align-items: center;
  color: var(--color-font-lightgray);
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
header ul.menu > li.apple-logo > a,
header ul.menu > li.search-starter > a,
header ul.menu > li.basket-starter > a {
  width: 14px;
  text-indent: -9999px;
  background-repeat: no-repeat;
  background-position: center 13px;
}
header ul.menu > li.apple-logo > a {
  background-image: url("../assets/images/header_apple.svg");
}
header ul.menu > li.search-starter > a {
  background-image: url("../assets/images/header_search.svg");
}
header ul.menu > li.basket-starter > a {
  background-image: url("../assets/images/header_bag.svg");
}

header ul.menu > li > a:hover {
  opacity: 1;
}

/* Header Menu Basket */
header .basket {
  width: 290px;
  padding: 12px 20px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  box-sizing: border-box;
  background-color: var(--color-white);
  position: absolute;
  top: 47px;
  right: -12px;
  visibility: hidden;
  transition: 0.4s;
  opacity: 0;
}
header .show {
  visibility: visible;
  opacity: 1;
}
header .basket .arrow {
  width: 20px;
  height: 10px;
  overflow: hidden;
  position: absolute;
  top: -10px;
  right: 12px;
}
header .basket .arrow::before {
  content: "";
  width: 12px;
  height: 12px;
  border: 1px solid var(--color-border);
  background-color: var(--color-white);
  transform: rotate(45deg);
  transform-origin: 0 0;
  position: absolute;
  top: 0;
  left: 50%;
}
header .basket .message {
  padding: 30px 0;
  font-size: 13px;
  color: var(--color-font-darkgray);
  text-align: center;
}
header .basket ul {
  margin-top: 10px;
}
header .basket ul li {
  border-top: 1px solid var(--color-border);
}
header .basket ul li a {
  display: block;
  padding: 14px;
  font-size: 13px;
  color: var(--color-link);
}
header .basket ul li a:hover {
  text-decoration: underline;
}

/* Header / Search */
header .search-wrap {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  opacity: 0;
  transition: 0.4s;
}
header .search {
  max-width: 680px;
  margin: 0 auto;
  position: relative;
}
header .search .shadow {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: var(--color-shadow);
  top: 0;
  left: 0;
}
header .search .textfield {
  position: relative;
}
header .search input {
  width: 100%;
  height: var(--header-height);
  padding: 0 40px;
  border: none;
  outline: none;
  box-sizing: border-box;
  background-color: transparent;
  font-size: 17px;
  color: var(--color-white);
}
header .search .search-icon {
  width: 40px;
  height: var(--header-height);
  background-image: url("../assets/images/header_search.svg");
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.4;
}
header .search .search-closer {
  width: 40px;
  height: var(--header-height);
  background-image: url("../assets/images/header_close.svg");
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  opacity: 0.4;
}

header .search .search-closer:hover {
  opacity: 1;
}

header .search .autocompletes {
  width: 100%;
  padding: 26px 40px 20px;
  border-radius: 0 0 18px 18px;
  box-sizing: border-box;
  background-color: var(--color-white);
  position: absolute;
  top: 44px;
  left: 0;
}

header .search .autocompletes h3 {
  font-size: 12px;
  color: var(--color-font-darkgray);
  margin-top: 12px;
}
header .search .autocompletes ul li a {
  display: block;
  margin: 0 -14px;
  padding: 10px 0 10px 30px;
  font-size: 14px;
  cursor: pointer;
}
header .search .autocompletes ul li:hover a {
  background-color: var(--color-section);
  color: var(--color-link);
}

header.searching ul.menu > li {
  transform: scale(0.7);
  opacity: 0;
}
header.searching .search-wrap {
  visibility: visible;
  opacity: 1;
  transition-delay: 0.2s;
}

/* Search Animation */
/* 스타일을 한 번에 지정 */
header .search input,
header .search .search-icon,
header .search .autocompletes h3,
header .search .autocompletes li {
  transition: 0.6s;
  transform: translate(100px, 0);
}
header.searching ul.menu > li {
  transform: scale(0.7);
  opacity: 0;
}
header.searching .search-wrap {
  transition-delay: 0.2s;
  opacity: 1;
  visibility: visible;
}
header.searching .search input,
header.searching .search .search-icon,
header.searching .search .autocompletes h3,
header.searching .search .autocompletes li {
  transition-delay: 0.2s;
  transform: translate(0, 0);
}
</style>
