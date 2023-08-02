<script setup lang="ts">
import NaviApple from '@/components/apple/NaviApple.vue'
import HeroApple from "@/components/apple/HeroApple.vue";
import PowerApple from "@/components/apple/PowerApple.vue";

</script>

<template>
  <html>
    <body>
      <NaviApple />
      <HeroApple />
      <PowerApple />
    </body>
  </html>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&family=Roboto:wght@400;500;700&display=swap");
html {
  --color-white: #FFF;
  --color-black: #000;
  --color-font: #1D1D1D;
  --color-font-darkgray: #6E6E6E;
  --color-font-middlegray: #b7b7b7;
  --color-font-lightgray: #F5F5F5;
  --color-link: #0071E3;
  --color-link-focus: #81B9F1;
  --color-border: #D2D2D2;
  --color-header: #3A3A3A;
  --color-section: #F5F5F5;
  --color-shadow: rgba(0, 0, 0, .4);
}
html.fixed {
  position: fixed;
  overflow-y: scroll;
  width: 100%;
}
body {
  height: 10000px;
  font-size: 16px;
  line-height: 1;
  font-family: "Roboto", "Noto Sans KR", sans-serif;
  word-break: keep-all;
  color: var(--color-font);
}
a {
  color: var(--color-font);
  text-decoration: none;
}
img {
  display: block;
  user-select: none;
  -webkit-user-drag: none;
}
/* Inner */
.inner {
  max-width: 980px;
  margin: 0px auto;
  padding: 0 20px;
  position: relative;
}
/* Background image text 화면에서 없앰 */
.bgtext {
  display: block;
  text-indent: -9999px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

</style>
