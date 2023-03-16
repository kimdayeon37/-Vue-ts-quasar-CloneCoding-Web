<script>
const color = `255 255 255`;

const splitText = () => {
  const split = document.querySelector(".split");
  const textContainer = split.querySelector("h2");
  const text = textContainer.innerHTML;

  textContainer.innerHTML = "";

  const lines = text.split(/<br\s*\/?>/i);

  lines.forEach((line) => {
    const lineDiv = document.createElement("div");
    split.querySelector("h2").appendChild(lineDiv);

    [...line].forEach((char) => {
      const span = document.createElement("span");
      span.dataset.char=char;
      span.textContent = char === "" ? "&nbsp;" : char;
      lineDiv.appendChild(span);
    });
  });
};

const addHoverEvent = () => {
  const h2 = document.querySelector(".split h2");
  const spans = h2.querySelectorAll("span");
  
  const max = 1000;
  spans.forEach((span, index) => {
    span.addEventListener("mouseover", function () {
      this.style.fontWeight = max;
      this.style.textShadow = `0 0 0 rgb(${color} / 1)`
      setFontWeight(spans, index, -1, max * 0.8);
      setFontWeight(spans, index, -2, max * 0.6);
      setFontWeight(spans, index, 1, max * 0.8);
      setFontWeight(spans, index, 2, max * 0.6);
    });
    span.addEventListener("mouseout", function () {
      this.style.backgroundColor = "";
      this.style.fontSize = "";
      this.style.textShadow = ``
      resetFontWeight(spans, index, -1);
      resetFontWeight(spans, index, -2);
      resetFontWeight(spans, index, 1);
      resetFontWeight(spans, index, 2);
    });
  });
  h2.addEventListener("mouseout", function () {
    spans.forEach((span, index) => {
      resetFontWeight(spans, index, -1);
      resetFontWeight(spans, index, -2);
      resetFontWeight(spans, index, 1);
      resetFontWeight(spans, index, 2);
    });
  });
};

const setFontWeight = (spans, index, offset, weight) => {
  if (spans[index + offset]) {
    console.log(index)
    spans[index + offset].style.fontWeight = weight + "";
    spans[index + offset].style.textShadow = `0 0 0 rgb(${color} / ${1 * (weight/10)/1.2}%)`
    
  }
};

const resetFontWeight = (spans, index, offset) => {
  if (spans[index + offset]) {
    spans[index + offset].style.fontWeight = "";
    spans[index + offset].style.textShadow = "";
  }
};

const init = () => {
  splitText();
  addHoverEvent();
};

</script>

<template>
    <div class="split">
  <h2>Hello World I'm a text,<br/> hover me to see the magic </h2>
</div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&display=swap");

* {
  -webkit-font-smoothing: antialiased;
}
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: #000;
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

.split h2 span::after{
  z-index: 2;
  filter: none;
  color: transparent;
   background: linear-gradient(#2cc8f7, #ceff00) 0% 0% / 400% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


</style>