<template>
<!-- Navigation -->
<nav>
    <div class="shadow"></div>
    <div class="contents-bg"></div>
    <div class="inner">
      <h1>iPad</h1>
      <div class="menu-toggler"></div>
      <ul class="menu">
        <li class="active"><a href="javascript:void(0)">개요</a></li>
        <li><a href="javascript:void(0)">iPad를 선택하는 이유</a></li>
        <li><a href="javascript:void(0)">제품 사양</a></li>
      </ul>
      <button href="javascript:void(0)" class="btn">구입하기</button>
    </div>
  </nav>
</template>

<style scoped>
a {
  color: #1d1d1d;
  text-decoration: none;
}
/* Btn */
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  padding: 0 10px;
  border: none;
  border-radius: 100px;
  outline: none;
  font-size: 11px;
  line-height: 1;
  color: #fff;
  background-color: #0071e3;
  cursor: pointer;
}
.btn:hover {
  opacity: .7;
}
.btn:focus {
  box-shadow: 0 0 0 4px #81b9f1;
}
/* Navigation */
nav {
  --nav-height: 52px;
  border-bottom: 1px solid #d2d2d2;
  background-color: rgba(255, 255, 255, .7);
  backdrop-filter: blur(20px);
  top: 0px;

  position: sticky;
  z-index: 8;
}
nav .inner {
  max-width: 1000px;
  height: 52px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
nav h1 {
  flex-grow: 1;
  font-size: 22px;
  font-weight: 500;
}
nav .menu {
  display: flex;
  gap: 12px;
  margin-right: 18px;
}
nav .menu li a {
  display: block;
  padding: 6px;
  font-size: 11px;
}
nav .menu li.active a {
  opacity: .5;
  cursor: default;
}
nav .menu li:hover a {
  color: #0071e3;
}
nav .menu li.active:hover a {
  color: #1d1d1d;
}

</style>
