<template>
  <section class="hero">
    <div class="inner">
      <h1 class="bgtext">iPad</h1>
      <div class="figures">
        <figure>
          <img
            src="/src/assets/images/hero_ipad.jpg"
            alt="iPad와 Smart Keyboard 및 Apple Pencil"
          />
          <figcaption class="bgtext">
            <div class="caption-camera">
              센터 스테이지 기술이 적용된 새로운 울트라 와이드 전면 카메라
            </div>
            <div class="caption-chip">A13 BIONIC 칩 전격 탑재</div>
            <div class="caption-storage">저장 용량은 64GB부터</div>
          </figcaption>
        </figure>
      </div>
    </div>
    <h2 class="bgtext">매사를 더욱 쉽게.</h2>
    <p class="pricing">₩449,000부터</p>
    <p class="description">
      강력한 성능에 간편함과 다재다능까지 갖춘 새로워진 iPad. 당신이 어떤 일을 즐겨하든
      함께할 수 있도록 디자인되었습니다. 작업, 취미, 공부, 소통 등. 이 모든 것을 부담 없이
      누릴 수 있죠.
    </p>
    <div class="links">
      <a href="javascript:void(0)" class="link">이벤트 시청하기</a>
      <a href="javascript:void(0)" class="link">iPad를 선택하는 이유</a>
    </div>
  </section>
</template>

<style scoped>
img {
  display: block;
  user-select: none;
  -webkit-user-drag: none;
}
p {
  line-height: 1.6;
}
/* Background image text 화면에서 없앰 */
.bgtext {
  display: block;
  text-indent: -9999px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

/* Hero */
.hero {
  background-color: #f5f5f5;
}
.hero .inner {
  padding-bottom: 110px;
}
.hero h1 {
  width: 221px;
  height: 91px;
  background-image: url("/src/assets/images/hero_ipad_text.png");
  position: absolute;
  transform: translate(624px, 235px);
  z-index: 1;
}
.hero .figures {
  height: 808px;
}
.hero figure {
  transform: translate(74px, -64px);
}
.hero figcaption .caption-camera {
  width: 120px;
  height: 84px;
  background-image: url("/src/assets/images/hero_ipad_caption_camera.png");
  transform: translate(43px, -230px);
}
.hero figcaption .caption-chip {
  width: 95px;
  height: 43px;
  background-image: url("/src/assets/images/hero_ipad_caption_chip.png");
  transform: translate(589px, -380px);
}
.hero figcaption .caption-storage {
  width: 80px;
  height: 43px;
  background-image: url("/src/assets/images/hero_ipad_caption_storage.png");
  transform: translate(627px, -300px);
}
.hero h2 {
  width: 738px;
  height: 145px;
  margin: 0 auto;
  background-image: url("/src/assets/images/hero_headline.png");
}
.hero p.pricing {
  margin-top: 40px;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
}
.hero p.description {
  width: 80%;
  margin: 18px auto 0;
  font-size: 19px;
  text-align: center;
}
.hero .links {
  margin-top: 30px;
}

/* Links */
.links {
  display: flex;
  justify-content: center;
  gap: 40px;
}
a.link {
  color: #0071e3;
  font-size: 19px;
  line-height: 1.3;
  text-decoration: none;
}
a.link:hover {
  text-decoration: underline;
}
a.link::after {
  content: " >";
}
</style>
