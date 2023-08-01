<script setup lang="ts">
import NaviApple from "@/components/apple/NaviApple.vue";
import HeroApple from "@/components/apple/HeroApple.vue";

</script>

<template>
  <html>
    <body>
      <NaviApple />
      <HeroApple />
    </body>
  </html>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&family=Roboto:wght@400;500;700&display=swap");
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
  color: #1d1d1d;
}
a {
  color: #1d1d1d;
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
</style>
