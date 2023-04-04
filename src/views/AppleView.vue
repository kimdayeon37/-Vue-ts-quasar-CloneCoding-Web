<script setup lang="ts"></script>

<template>
  <link
    href="
https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css
"
    rel="stylesheet"
  />
  <div class="body">
    <div class="header">
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
            <div class="basket">
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
      </div>
    </div>
  </div>
</template>

<style scoped>
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

}

ul.menu > li > a:hover {
  opacity: 1;
}

.basket {
  width: 290px;
  padding : 12px 20px;
  border: 1px solid #D2D2D2;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #fff;
  position: absolute;
  top: 47px;
  right: -12px;
}
.basket .arrow {
  width: 20px;
  height: 10px;
  overflow: hidden;
  position: absolute;
  top: -10px;
  right: 12px;
}
.basket .arrow::before {
  content: "";
  width: 12px;
  height: 12px;
  border: 1px solid #D2D2D2;
  background-color: #FFF;
  transform: rotate(45deg);
  transform-origin: 0 0;
  position: absolute;
  top: 0;
  left: 50%;
}
.basket .message {
  padding: 30px 0;
  font-size: 13px;
  color: #6E6E6E;
  text-align: center;
}
.basket ul {
  margin-top: 10px;
}
.basket ul li {
  border-top: 1px solid #D2D2D2;
}
.basket ul li a {
  display: block;
  padding: 14px;
  font-size: 13px;
  color: #0071E3;
}
.basket ul li a:hover {
  text-decoration: underline;
}
</style>
