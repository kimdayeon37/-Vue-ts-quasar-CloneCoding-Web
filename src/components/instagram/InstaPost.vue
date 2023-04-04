<template>
  <div class="post">
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage: `url(${data.userImage})` }"></div>
      <span class="profile-name">{{ data.name }}&nbsp;</span>
      <p class="date">• {{ data.date }}</p>
    </div>
    <div class="post-body1">
      <div
        :class="data.filter"
        class="post-body"
        :style="{ backgroundImage: `url(${data.postImage})` }"
        @click="$store.commit('좋아요', idx)"
      ></div>

      <div class="row justify-between">
        <div class="col-4 q-gutter-md">
          <q-icon
            name="favorite_border"
            class="heart"
            size="25px"
            @click="[$store.commit('좋아요', idx)]"
          />
          <q-icon name="chat_bubble_outline" size="25px" />
          <q-icon name="send" size="25px" />
        </div>
        <div class="col-4">
          <q-icon name="turned_in_not" class="bookmark" size="30px" />
        </div>
      </div>
    </div>

    <div class="post-content">
      <b>좋아요 {{ $store.state.likes[idx] }}개 {{ $store.state.heart[idx] }}</b>
      <p>
        <strong>{{ data.name }}</strong> {{ data.content }}
      </p>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    idx: Number,
  },
};
</script>
<style scoped>
hr {
  background: #efefef;
  margin-left: -5px;
  width: 450px;
  height: 1px;
  border: 0;
}
.post {
  width: 100%;
  padding: 50px 0px 0px 100px;
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
  font-weight: bold;
}
.post-header {
  height: 10px;
}
.post-body {
  margin-top: 30px;
  background-image: url("https://placeimg.com/640/480/animals");
  width: 450px;
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  padding: 10px;
}
.heart {
  margin-left: 14px;
}
.bookmark {
  margin-left: -250px;
}
</style>
