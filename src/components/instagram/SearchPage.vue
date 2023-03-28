<template>
  <div style="padding: 10px">
    <h4>검색</h4>
    
    <div class="search row items-center">
      <div
        v-if="!isSearchFocus"
        @click="clickSearch"
        class="col row items-center justify-start"
      >
        <q-icon name="search" class="search-img" />
        <input class="col-grow" placeholder="검색" @input="search($event.target.value)" />
      </div>
      <div v-if="isSearchFocus" class="after-click col row items-center justify-between">
        <div class="exit-search col row justify-end" @click="clickSearch">⨉</div>
      </div>
    </div>
    
    <div class="post-header" v-for="(a, i) in follower" :key="i">
      <div class="profile" :style="`background-image: url(${a.image})`"></div>
      <span class="profile-name">{{ a.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  setup() {
    let follower = ref([]);
    let followerOriginal = ref([]);
    let isSearchFocus = ref(false);

    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        follower.value = a.data;
        followerOriginal.value = [...a.data];
      });
    });

    function search(검색어) {
      isSearchFocus.value = !isSearchFocus.value;
      let newFollower = followerOriginal.value.filter((a) => {
        return a.name.indexOf(검색어) != -1;
      });
      follower.value = [...newFollower];
    }
    return { follower, search };
  },
};
</script>

<style scoped>
.search {
  width: 30%;
  border-radius: 10px;
  background-color: #efefef;
}
.search-img {
  margin-left: 10px;
  width: 15px;
  height: 15px;
}
.col-grow {
  padding: 8px;
  border-radius: 10px;
  background-color: #efefef;
  border: none;
}
.col-grow:focus {
  outline: none;
}
.exit-search {
  margin-right: 10px;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 40px;
  padding: 10px;
}
</style>
