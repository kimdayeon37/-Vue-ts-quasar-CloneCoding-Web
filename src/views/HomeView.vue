<script>

export default {
  data() {
    return {
      isFocused: false,
      placeholder: '',
    };
  },
  methods: {
    focusInput() {
      this.$refs.searchInput.focus();
    },
    onFocus() {
      this.isFocused = true;
      this.placeholder = '통합검색';
    },
    onBlur() {
      this.isFocused = false;
      this.placeholder = '';
    },
  },
};


</script>

<template>
  <!--HEADER-->
  <div class="header">
    <div class="inner">
      <a href="/" class="logo">
        <img src="../assets/starbucksImages/starbucks_logo.png" alt="STARBUCKS" />
      </a>

      <div class="sub-menu">
        <ul class="menu">
          <li>
            <a href="/signin">Sign In</a>
          </li>
          <li>
            <a href="javascirpt:void(0)">My Starbucks</a>
          </li>
          <li>
            <a href="javascirpt:void(0)">Customer Service & Ideas</a>
          </li>
          <li>
            <a href="javascirpt:void(0)">Find a Store</a>
          </li>
        </ul>
        <div class="search" :class="{ focused: isFocused }" @click="focusInput">
          <input ref="searchInput" type="text" @focus="onFocus" @blur="onBlur" :placeholder="placeholder" />
          <div class="material-icons">search</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap');

/* COMMON */
body {
  color: #333;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  font-family: "Nanum Gothic", sans-serif;
}
img {
  display: block;
}
a {
  text-decoration: none;
}

/* HEADER */
.header {
  background-color: #f6f5f0;
  border-bottom: 1px solid #c8c8c8;
}
.header .inner {
  width: 1100px;
  height: 120px;
  margin: 0 auto;
  position: relative;
}
.header .logo {
  height: 75px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.header .sub-menu {
  position: absolute;
  top: 10px;
  right: 0;
  display: flex;
}
.header .sub-menu ul.menu {
  font-family: Arial, sans-serif;
  display: flex;
}
.header .sub-menu ul.menu li {
  position: relative;
}
.header .sub-menu ul.menu li::before {
  content: "";
  width: 1px;
  height: 12px;
  background-color: #e5e5e5;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}
.header .sub-menu ul.menu li:first-child::before {
  display: none;
}
.header .sub-menu ul.menu li a {
  font-size: 12px;
  padding: 11px 16px;
  display: block;
  color: #656565;
}
.header .sub-menu ul.menu li a:hover {
  color: #000;
}
.header .sub-menu .search {
  height: 34px;
  position: relative;
}
.header .sub-menu .search input {
  width: 36px;
  height: 34px;
  padding: 4px 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  color: #777;
  font-size: 12px;
  transition: width 0.4s;
}
.header .sub-menu .search input:focus {
  width: 190px;
  border-color: #669900;
}
.header .sub-menu .search .material-icons {
  height: 24px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
}
</style>
