<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="headerbar.toggleLeftDrawer" />

      <header>
        <nav class="navegation-static con row">
          <a class="logo"> 2023 </a>

          <ul class="menu cell-right">
            <li class="cell">
              <a href="#home" class="active"> Home </a>
            </li>
            <li class="cell">
              <a href="#about" class=""> About </a>
            </li>
            <li class="cell">
              <a href="#portfolio" class=""> Portfolio </a>
            </li>
            <li class="cell">
              <a href="#contact" class=""> Contact </a>
            </li>
          </ul>
        </nav>
      </header>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { useHeaderbarStore } from "@/store/modules/headerbar";
const headerbar = useHeaderbarStore();

</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

html {
  font-family: "NotoSansKR", sans-serif, "Headline R";
}
/* 노말라이즈 */
body,
ul,
li,
h1 {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

/* 라이브러리 */
.con {
  margin: 0 auto;
}

.img-box > img {
  width: 100%;
  display: block;
}

.row::after {
  content: "";
  display: block;
  clear: both;
}

.cell {
  float: left;
  box-sizing: border-box;
}

.cell-right {
  float: right;
  box-sizing: border-box;
}

.margin-0-auto {
  margin: 0 auto;
}

.height-100p {
  height: 100%;
}

.width-50p {
  width: 50%;
}

.height-50p {
  height: 50%;
}

.height-33p {
  height: 33.3333%;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.text-align-center {
  text-align: center;
}

.line-height-0-ch-only {
  line-height: 0;
}

.line-height-0-ch-only > * {
  line-height: normal;
}

.relative {
  position: relative;
}

.absolute-left {
  position: absolute;
  left: 0;
}

.absolute-right {
  position: absolute;
  right: 0;
}

.absolute-middle {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.width-100p {
  width: 100%;
}

.table {
  display: table;
}

.table-cell {
  display: table-cell;
}

.vertical-align-top {
  vertical-align: top;
}

.vertical-align-middle {
  vertical-align: middle;
}

.vertical-align-bottom {
  vertical-align: bottom;
}

body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

[data-position] {
  opacity: 0;
  position: relative;
  -webkit-transition: all 1s;
  -moz-transition: all 1s;
  -o-transition: all 1s;
  transition: all 1s;
  display: inline-block;
}

[data-position="left"] {
  left: 100px;
}

[data-position="right"] {
  right: 100px;
}

[data-position="bottom"] {
  bottom: 100px;
}

[data-position="top"] {
  top: 100px;
}

/* top-bar */

.navegation-static {
  z-index: 100;
  transition: all 0.3s ease;
  padding: 0px;
  width: 100%;
  color: #fff;
}

.navegation-static > a.logo {
  position: relative;
  font-size: 29.2px;
  font-weight: bold;
  color: #ebd134;
  margin-left: 30px;
  padding-top: 10px;
  font-family: "NotoSansKR";
  transition: 0.3s;
}

.navegation-static > ul {
  font-family: "NotoSansKR";
  font-weight: bold;
  transition: 0.3s;
  text-align: center;
  position: fixed;
  right: 80px;
  color: #fff;
  top: 0;
}

.navegation-static > ul li {
  margin-right: 60px;
  margin-top: 10px;
}

.navegation-static > ul li a {
  display: block;
  font-size: 30px;
  transition: 0.3s;
}

.active {
  color: #ebd134;
  border-bottom: 4px solid #ebd134;
}

a {
  font-size: 14px;
  line-height: 30px;
}
</style>
