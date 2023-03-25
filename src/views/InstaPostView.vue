<template>
  <q-page class="q-pa-sm border" :class="{ 'dark-bg': $q.dark.isActive }">
    <q-layout>
      <q-drawer :breakpoint="790" show-if-above :width="230" :mini="miniOnOff" side="left" bordered>
        <q-list class="item-center">
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>홈</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="search" />
            </q-item-section>

            <q-item-section>검색</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="explore" />
            </q-item-section>

            <q-item-section>탐색 탭</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="slideshow" />
            </q-item-section>

            <q-item-section>릴스</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>
            <q-item-section>메세지</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="favorite_border" />
            </q-item-section>
            <q-item-section>알림</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="add_circle_outline" />
            </q-item-section>
            <q-item-section>만들기</q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="$router.push('/instagram')">
            <q-item-section avatar>
              <q-avatar class="profile-img" style="width: 25px; height: auto">
                <q-img src="/src/assets/shm.jpeg" />
              </q-avatar>
            </q-item-section>
            <q-item-section>프로필</q-item-section>
          </q-item>
        </q-list>
      </q-drawer>

      <q-page-container>
        <div class="q-mx-lg q-mt-xl">
          <section class="content">
            <div class="row q-col-gutter-x-md q-col-gutter-y-xl">
              <div class="header" v-if="step == 1 || step == 2">
                <ul class="header-button-left">
                  <li>Cancel</li>
                </ul>
                <ul class="header-button-right">
                  <li v-if="step == 1" @click="step++">Next</li>
                  <li v-if="step == 2" @click="publish">발행</li>
                </ul>
              </div>
            </div>
          </section>

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
        </div>
      </q-page-container>
    </q-layout>
  </q-page>
</template>

<script>
import InstaContainer from "../components/instagram/InstaContainer.vue";
import axios from "axios";
import { mapMutations, mapState } from "vuex";

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
      카운터: 0,
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

  computed: {
    ...mapState(["name", "age", "likes"]),
    ...mapState({ 작명: "name" }), // object 자료식
  },

  methods: {
    ...mapMutations(["setMore", "좋아요"]),

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
  margin: 0px;
}
ul {
  padding: 5px;
  list-style-type: none;
}

.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0px;
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
