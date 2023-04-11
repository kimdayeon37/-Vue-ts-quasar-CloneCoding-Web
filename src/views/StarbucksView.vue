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
                <p>다양한 찻잎과 향신료 등 개성있는 재료로 새로운 맛과 향의 티를 선보입니다.</p>
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
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap');

/*COMMON*/
body {
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    color: #333;
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

  /*HEADER*/
.header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 9;
    background-color: #F6F5F0;
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
    transition: width .4s;
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
    transition: .4s;
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

</style>
