<script>
import Maincloud from "../components/MainCloud.vue";
import Mainhover from "../components/MainHover.vue";

export default {
  components: {
    Maincloud
  }
}
</script>

<template>
  <div class="body">
    <div class="wrap">
      <div class="left">Portfolio</div>
      <div class="centre">kimdayeon</div>
      <div class="right">frontend&nbsp;</div>
    </div>
  </div>
  <MainHover />
  <Maincloud />
</template>

<style scoped>
.body {
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: system-ui, sans-serif;
  background: #66023c;
  overflow: hidden;
}
.wrap {
  position: relative;
  display: flex;
  justify-content: center;
  gap: 0 3rem;
  width: 100px;
  margin: 0 auto;
  perspective: 10vmin;
  transform: scale(1) translateX(-1rem);
  /* border: 1px dotted blue; */
  background: #66023c;
}
.left,
.right {
  font-size: clamp(2rem, 20vw, 10rem);
  font-weight: 900;
  color: #fcf75e;
  text-transform: uppercase;
  transform-style: preserve-3d;
  transform: scale(1);
  animation: rotate 5s ease-in-out backwards 1s;
}
@keyframes rotate {
  from {
    perspective: 0vmin;
    transform: rotateY(0deg);
  }
}
.left {
  transform-origin: right;
  transform: rotateY(-10deg);
}
.right {
  transform-origin: left;
  transform: rotateY(10deg);
}

.centre {
  font-size: clamp(1rem, 4vw, 1.5rem);
  color: #98ff98;
  line-height: 0.5;
  width: max-content;
  display: grid;
  place-items: center;
  position: absolute;
  top: 55%;
  left: 1.5rem;
  transform-origin: center center;
  transform: translate3d(-25%, 0, 5px) rotate(-90deg);
  transform-style: preserve-3d;
}

@import url("https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&display=swap");
.body2 {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: transparent;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.split h2 {
  font-size: 3.5em;
  font-weight: 100;
  text-align: center;
  font-family: "Roboto Flex";
  font-weight: 300;
  font-style: normal;
  font-stretch: 100%;
  line-height: initial;
  font-variation-settings: "opsz" 48, "slnt" 0, "GRAD" 0, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712;
  font-optical-sizing: auto;
}

.split h2 span {
  display: inline-block;
  white-space: break-spaces;
  transition: font-weight 0.2s ease;
  position: relative;
}

.split h2 span::before,
.split h2 span::after {
  content: attr(data-char);
  position: absolute;
  left: 0;
  color: transparent;
}

.split h2 span::after {
  z-index: 2;
  filter: none;
  color: transparent;
  background: linear-gradient(#2cc8f7, #ceff00) 0% 0% / 400% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>
