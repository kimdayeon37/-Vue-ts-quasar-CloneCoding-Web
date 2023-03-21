Post
<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
  </div>


  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기버튼</button>

  <InstaContainer
    :data="data"
    :image="image"
    @writePost="context = $event"
    :step="step"
  />

  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        multiple
        accept="image/*"
        type="file"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import InstaContainer from "../components/instagram/InstaContainer.vue";
import axios from "axios";

export default {
  data() {
    return {
      data: [
        {
          name: "Kim Hyun",
          userImage: "https://placeimg.com/100/100/arch",
          postImage: "https://placeimg.com/640/480/arch",
          likes: 36,
          date: "May 15",
          liked: false,
          content: "오늘 무엇을 했냐면요 아무것도 안했어요 ?",
          filter: "perpetua",
        },
        {
          name: "John Doe",
          userImage: "https://placeimg.com/200/200/people",
          postImage: "https://placeimg.com/640/480/people",
          likes: 20,
          date: "Apr 20",
          liked: false,
          content: "흔한 자랑스타그램",
          filter: "clarendon",
        },
        {
          name: "Minny",
          userImage: "https://placeimg.com/100/100/animals",
          postImage: "https://placeimg.com/640/480/animals",
          likes: 49,
          date: "Apr 4",
          liked: false,
          content: "우리집 개는 화장실 물도 내림",
          filter: "lofi",
        },
      ],
      더보기: 0,
      step: 0,
      image: "",
      context: "",
      myfilter: "",
    };
  },
  mounted() {
    this.emitter.on("boxclick", (a) => {
      this.myfilter = a;
    });
  },
  components: {
    InstaContainer,
  },
  methods: {
    publish() {
      let mydata = {
        name: "John Doe",
        userImage: "https://placeimg.com/200/200/people",
        postImage: this.image,
        likes: 20,
        date: "Apr 20",
        liked: false,
        content: this.context,
        filter: this.myfilter,
      };
      this.data.unshift(mydata);
      this.step = 0;
    },
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.더보기}.json`)
        .then((결과) => {
          console.log(결과.data);
          this.data.push(결과.data);
          this.더보기++;
        })
        .catch((err) => {
          alert("err");
        });
    },
    // 업로드한 이미지 출력
    upload(e) {
      let file = e.target.files; // e.target.files에 업로드한 파일 모두 담겨있음.
      console.log(file[0]);
      let url = URL.createObjectURL(file[0]);
      console.log(url);
      this.image = url;
      this.step++;
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
