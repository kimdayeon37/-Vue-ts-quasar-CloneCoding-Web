<script>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";

export default {

  setup() {
    const badgeEl = ref(null);

    const handleScroll = () => {
      console.log("scroll!");
      if (window.scrollY > 500) {
        // 배지 숨기기
        gsap.to(badgeEl.value, {
          duration: 0.6,
          opacity: 0,
          display: "none",
        });
      } else {
        // 배지 보이기
        gsap.to(badgeEl.value, {
          duration: 0.6,
          opacity: 1,
          display: "block",
        });
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      badgeEl,
    };
  },

  data() {
    return {
      isFocused: false,
      placeholder: "",
      fadeEls: [],
    };
  },

  methods: {
    focusInput() {
      this.$refs.searchInput.focus();
    },
    onFocus() {
      this.isFocused = true;
      this.placeholder = "통합검색";
    },
    onBlur() {
      this.isFocused = false;
      this.placeholder = "";
    },
  },
  // // new Swiper(선택자, 옵션)
  //   new Swiper('.notice-line .swiper-container', {
  //     direction: 'vertical',
  //     autoplay: true,
  //     loop: true
  //   });
};
</script>

<template>
  <div class="body">
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
            <input
              ref="searchInput"
              type="text"
              @focus="onFocus"
              @blur="onBlur"
              :placeholder="placeholder"
            />
            <div class="material-icons">search</div>
          </div>
        </div>
        <ul class="main-menu">
          <li class="item">
            <div class="item__name">COFFEE</div>
            <div class="item__contents">
              <div class="contents__menu">
                <ul class="inner">
                  <li>
                    <h4>커피</h4>
                    <ul>
                      <li>스타벅스 원두</li>
                      <li>스타벅스 비아</li>
                      <li>스타벅스 오리가미</li>
                    </ul>
                  </li>
                  <li>
                    <h4>에스프레소 음료</h4>
                    <ul>
                      <li>도피오</li>
                      <li>에스프레소 마키아또</li>
                      <li>아메리카노</li>
                      <li>마키아또</li>
                      <li>카푸치노</li>
                      <li>라떼</li>
                      <li>모카</li>
                      <li>리스트레또 비안코</li>
                    </ul>
                  </li>
                  <li>
                    <h4>커피 이야기</h4>
                    <ul>
                      <li>스타벅스 로스트 스팩트럼</li>
                      <li>최상의 아라비카 원두</li>
                      <li>한 잔의 커피가 완성되기까지</li>
                      <li>클로버® 커피 추출 시스템</li>
                    </ul>
                  </li>
                  <li>
                    <h4>최상의 커피를 즐기는 법</h4>
                    <ul>
                      <li>커피 프레스</li>
                      <li>푸어 오버</li>
                      <li>아이스 푸어 오버</li>
                      <li>커피 메이커</li>
                      <li>리저브를 매장에서 다양하게 즐기는 법</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="contents__texture">
                <div class="inner">
                  <h6>나와 어울리는 커피 찾기</h6>
                  <p>스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.</p>
                  <h6>최상의 커피를 즐기는 법</h6>
                  <p>여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.</p>
                </div>
              </div>
            </div>
          </li>
          <li class="item">
            <div class="item__name">MENU</div>
            <div class="item__contents">
              <div class="contents__menu">
                <ul class="inner">
                  <li>
                    <h4>음료</h4>
                    <ul>
                      <li>콜드 브루</li>
                      <li>브루드 커피</li>
                      <li>에스프레소</li>
                      <li>프라푸치노</li>
                      <li>블렌디드 음료</li>
                      <li>스타벅스 피지오</li>
                      <li>티(티바나)</li>
                      <li>기타 제조 음료</li>
                      <li>스타벅스 주스(병음료)</li>
                    </ul>
                  </li>
                  <li>
                    <h4>푸드</h4>
                    <ul>
                      <li>베이커리</li>
                      <li>케익</li>
                      <li>샌드위치 & 샐러드</li>
                      <li>따뜻한 푸드</li>
                      <li>과일 & 요거트</li>
                      <li>스낵 & 미니 디저트</li>
                      <li>아이스크림</li>
                    </ul>
                  </li>
                  <li>
                    <h4>상품</h4>
                    <ul>
                      <li>머그</li>
                      <li>글라스</li>
                      <li>플라스틱 텀블러</li>
                      <li>스테인리스 텀블러</li>
                      <li>보온병</li>
                      <li>액세서리</li>
                      <li>커피 용품</li>
                      <li>패키지 티(티바나)</li>
                    </ul>
                  </li>
                  <li>
                    <h4>카드</h4>
                    <ul>
                      <li>실물카드</li>
                      <li>e-Gift 카드</li>
                    </ul>
                  </li>
                  <li>
                    <h4>메뉴 이야기</h4>
                    <ul>
                      <li>콜드 브루</li>
                      <li>스타벅스 티바나</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="contents__texture">
                <div class="inner">
                  <h6>스타벅스 티바나</h6>
                  <p>
                    다양한 찻잎과 향신료 등 개성있는 재료로 새로운 맛과 향의 티를
                    선보입니다.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="item">
            <div class="item__name">STORE</div>
            <div class="item__contents">
              <div class="contents__menu">
                <ul class="inner">
                  <li>
                    <h4>매장 찾기</h4>
                    <ul>
                      <li>퀵 검색</li>
                      <li>지역 검색</li>
                      <li>My 매장</li>
                    </ul>
                  </li>
                  <li>
                    <h4>매장 이야기</h4>
                    <ul>
                      <li>청담스타</li>
                      <li>티바나 인스파이어드 매장</li>
                      <li>파미에파크</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="contents__texture">
                <div class="inner">
                  <h6>매장 찾기</h6>
                  <p>보다 빠르게 매장을 찾아보세요.</p>
                  <h6>청담스타</h6>
                  <p>스타벅스 1,000호점인 청담스타점을 만나보세요.</p>
                </div>
              </div>
            </div>
          </li>
          <li class="item">
            <div class="item__name">RESPONSIBILITY</div>
            <div class="item__contents">
              <div class="contents__menu">
                <ul class="inner">
                  <li>
                    <h4>지역 사회 참여 활동</h4>
                    <ul>
                      <li>회망배달 캠페인</li>
                      <li>재능기부 카페 소식</li>
                      <li>커뮤니티 스토어</li>
                      <li>청년인재 양성</li>
                      <li>우리 농산물 사랑 캠페인</li>
                      <li>우리 문화 지키기</li>
                    </ul>
                  </li>
                  <li>
                    <h4>환경보호 활동</h4>
                    <ul>
                      <li>환경 발자국 줄이기</li>
                      <li>일회용 컵 없는 매장</li>
                      <li>커피 원두 재활용</li>
                    </ul>
                  </li>
                  <li>
                    <h4>윤리 구매</h4>
                    <ul>
                      <li>윤리적 원두 구매</li>
                      <li>공정무역 인증</li>
                      <li>커피 농가 지원 활동</li>
                    </ul>
                  </li>
                  <li>
                    <h4>글로벌 사회 공헌</h4>
                    <ul>
                      <li>윤리경영 보고서</li>
                      <li>스타벅스 재단</li>
                      <li>지구촌 봉사의 달</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="contents__texture">
                <div class="inner">
                  <h6>커피원두 재활용</h6>
                  <p>스타벅스 커피 원두를 재활용 해보세요.</p>
                </div>
              </div>
            </div>
          </li>
          <li class="item">
            <div class="item__name">MY STARBUCKS REWARDS</div>
            <div class="item__contents">
              <div class="contents__menu">
                <ul class="inner">
                  <li>
                    <h4>마이 스타벅스 리워드</h4>
                    <ul>
                      <li>마이 스타벅스 리워드 소개</li>
                      <li>등급 및 혜택</li>
                      <li>스타벅스 별</li>
                      <li>자주하는 질문</li>
                    </ul>
                  </li>
                  <li>
                    <h4>스타벅스 카드</h4>
                    <ul>
                      <li>스타벅스 카드 소개</li>
                      <li>스타벅스 카드 갤러리</li>
                      <li>등록 및 조회</li>
                      <li>충전 및 이용안내</li>
                      <li>분실신고/환불신청</li>
                      <li>자주하는 질문</li>
                    </ul>
                  </li>
                  <li>
                    <h4>스타벅스 카드 e-Gift</h4>
                    <ul>
                      <li>스타벅스 카드 e-Gift 소개</li>
                      <li>이용안내</li>
                      <li>선물하기</li>
                      <li>자주하는 질문</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="contents__texture">
                <div class="inner">
                  <h6>스타벅스 카드 등록하기</h6>
                  <p>카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.</p>
                </div>
              </div>
            </div>
          </li>
          <li class="item">
            <div class="item__name">WHAT'S NEW</div>
            <div class="item__contents">
              <div class="contents__menu">
                <ul class="inner">
                  <li>
                    <h4>프로모션 & 이벤트</h4>
                    <ul>
                      <li>전체</li>
                      <li>스타벅스 카드</li>
                      <li>마이 스타벅스 리워드</li>
                      <li>온라인</li>
                      <li>2017 스타벅스 플래너</li>
                    </ul>
                  </li>
                  <li>
                    <h4>새소식</h4>
                    <ul>
                      <li>전체</li>
                      <li>상품 출시</li>
                      <li>스타벅스의 문화</li>
                      <li>스타벅스 사회공헌</li>
                      <li>스타벅스 카드출시</li>
                    </ul>
                  </li>
                  <li>
                    <h4>매장별 이벤트</h4>
                    <ul>
                      <li>일반 매장</li>
                      <li>신규 매장</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="contents__texture">
                <div class="inner">
                  <h6>매장별 이벤트</h6>
                  <p>스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.</p>
                  <h6>소셜 스타벅스</h6>
                  <p>다양한 스타벅스 SNS 채널을 통해 스타벅스를 만나보세요!</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="badges" ref="badgeEl">
        <div class="badge">
          <img src="../assets/starbucksImages/badge1.jpg" alt="Badge" />
        </div>
        <div class="badge">
          <img src="../assets/starbucksImages/badge2.jpg" alt="Badge" />
        </div>
      </div>
    </div>

    <!-- VISUAL-->
    <section class="visual">
      <div class="inner">
        <div class="title fade-in">
          <img
            src="../assets/starbucksImages/visual_title.png"
            alt="starbucks delightful start to the years"
          />
          <a href="javescript:void(0)" class="btn btn--brown">자세히 보기</a>
        </div>
        <div class="fade-in">
          <img
            src="../assets/starbucksImages/visual_cup1.png"
            alt="new oatmeal latte"
            class="cup1 image"
          />
          <img
            src="../assets/starbucksImages/visual_cup1_text.png"
            alt="오트밀라떼"
            class="cup1 text"
          />
        </div>
        <div class="fade-in">
          <img
            src="../assets/starbucksImages/visual_cup2.png"
            alt="new caramel mocha"
            class="cup2 image"
          />
          <img
            src="../assets/starbucksImages/visual_cup2_text.png"
            alt="카라멜 모카"
            class="cup2 text"
          />
        </div>
        <div class="fade-in">
          <img
            src="../assets/starbucksImages/visual_spoon.png"
            alt="Spoon"
            class="spoon"
          />
        </div>
      </div>
    </section>

    <!--NOTICE-->
    <section class="notice">
      <!--NOTICE LINE-->
    </section>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap");

/*COMMON*/
.body {
  font-family: "Nanum Gothic", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: #333;
  height: 3000px;
}
a {
  text-decoration: none;
}
img {
  /* img(인라인 요소) 하단에 Baseline 공백을 제거 */
  display: block;
}
.inner {
  width: 1100px;
  margin: 0 auto;
  position: relative;
}
.btn {
  width: 130px;
  padding: 10px;
  border: 2px solid #333;
  border-radius: 4px;
  color: #333;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  display: block;
  transition: 0.4s;
}

.btn:hover {
  background-color: #333;
  color: #fff;
}

.btn.btn--reverse {
  background-color: #333;
  color: #fff;
}
.btn.btn--reverse:hover {
  background-color: transparent;
  color: #333;
}
.btn.btn--brown {
  color: #592b18;
  border-color: #592b18;
}
.btn.btn--brown:hover {
  color: #fff;
  background-color: #592b18;
}
.btn.btn--gold {
  color: #d9aa8a;
  border-color: #d9aa8a;
}
.btn.btn--gold:hover {
  color: #fff;
  background-color: #d9aa8a;
}
.btn.btn--white {
  color: #fff;
  border-color: #fff;
}
.btn.btn--white:hover {
  color: #333;
  background-color: #fff;
}

/*HEADER*/
.header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9;
  background-color: #f6f5f0;
  border-bottom: 1px solid #c8c8c8;
}
.header > .inner {
  height: 120px;
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
  padding: 11px 16px;
  display: block;
  font-size: 13px;
  color: #656565;
}
.header .sub-menu ul.menu li a:hover {
  color: #000;
}
.header .sub-menu .search {
  position: relative;
  height: 34px;
}
.header .sub-menu .search input {
  width: 36px;
  height: inherit;
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
  right: 5px;
  margin: auto;
  transition: 0.4s;
}
.header .sub-menu .search.focused .material-icons {
  opacity: 0;
}

.header .main-menu {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: flex;
}
.header .main-menu .item .item__name {
  padding: 10px 20px 34px 20px;
  font-family: Arial, sans-serif;
  font-size: 13px;
}
.header .main-menu .item:hover .item__name {
  background-color: #2c2a29;
  color: #669900;
  border-radius: 6px 6px 0 0;
}
.header .main-menu .item .item__contents {
  width: 100%;
  position: fixed;
  left: 0;
  display: none;
}
.header .main-menu .item:hover .item__contents {
  display: block;
}
.header .main-menu .item .item__contents .contents__menu {
  background-color: #2c2a29;
  height: 200px;
}
.header .main-menu .item .item__contents .contents__menu > ul {
  display: flex;
  padding: 20px 0;
}
.header .main-menu .item .item__contents .contents__menu > ul > li {
  width: 220px;
}
.header .main-menu .item .item__contents .contents__menu > ul > li h4 {
  padding: 3px 0 12px 0;
  font-size: 14px;
  color: #fff;
}

.header .main-menu .item .item__contents .contents__menu > ul > li ul li {
  padding: 5px 0;
  font-size: 12px;
  color: #999;
  cursor: pointer;
}
.header .main-menu .item .item__contents .contents__menu > ul > li ul li:hover {
  color: #669900;
}
.header .main-menu .item .item__contents .contents__texture {
  padding: 26px 0;
  font-size: 12px;
  background-image: url("../assets/starbucksImages/main_menu_pattern.jpg");
}
.header .main-menu .item .item__contents .contents__texture h6 {
  color: #999;
  font-weight: 700;
}
.header .main-menu .item .item__contents .contents__texture p {
  color: #669900;
  margin: 4px 0 14px;
}

/* BADGE */
.header .badges {
  position: absolute;
  top: 132px;
  right: 12px;
}
.header .badges .badge {
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 12px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

/* VISUAL */
.visual {
  margin-top: 70px;
  background-image: url("../assets/starbucksImages/visual_bg.jpg");
  background-position: center;
}
.visual .inner {
  height: 646px;
}
.visual .title {
  position: absolute;
  top: 88px;
  left: -10px;
}
.visual .title .btn {
  position: absolute;
  top: 259px;
  left: 173px;
}
.visual .cup1.image {
  position: absolute;
  bottom: 0;
  right: -47px;
}
.visual .cup1.text {
  position: absolute;
  top: 50px;
  right: 171px;
}
.visual .cup2.image {
  position: absolute;
  bottom: 0;
  right: 162px;
}
.visual .cup2.text {
  position: absolute;
  top: 321px;
  right: 416px;
}
.visual .spoon {
  position: absolute;
  bottom: 0;
  right: 275px;
}
.visual .fade-in {
  opacity: 1;
}

/*NOTICE*/
/*NOTICE LINE*/
.notice .notice-line {
  position: relative;
}
.notice .notice-line .bg-left {
  width: 50%;
  height: 100%;
  background-color: #333;
  position: absolute;
  top: 0;
  left: 0;
}
.notice .notice-line .bg-right {
  width: 50%;
  height: 100%;
  background-color: #f6f5ef;
  position: absolute;
  top: 0;
  right: 0;
}
.notice .notice-line .inner {
  height: 62px;
  z-index: 1;
  display: flex;
}
.notice .notice-line .inner__left {
  width: 60%;
  height: 100%;
  background-color: #333;
  display: flex;
  align-items: center;
}
.notice .notice-line .inner__left h2 {
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  margin-right: 20px;
}
.notice .notice-line .inner__left .swiper-container {
  height: 62px;
  flex-grow: 1;
}
.notice .notice-line .inner__left .swiper-slide {
  height: 62px;
  display: flex;
  align-items: center;
}
.notice .notice-line .inner__left .swiper-slide a {
  color: #fff;
}
.notice .notice-line .inner__left .notice-line__more {
  width: 62px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.notice .notice-line .inner__left .notice-line__more .material-icons {
  color: #fff;
  font-size: 30px;
}
.notice .notice-line .inner__right {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.notice .notice-line .inner__right h2 {
  font-size: 17px;
  font-weight: 700;
}
.notice .notice-line .inner__right .toggle-promotion {
  width: 62px;
  height: 62px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.notice .notice-line .inner__right .toggle-promotion .material-icons {
  font-size: 30px;
}
</style>
