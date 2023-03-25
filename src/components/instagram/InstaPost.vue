<template>
  <div class="post">
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage: `url(${data.userImage})` }"></div>
      <span class="profile-name">{{ data.name }}</span>
    </div>
    <div
      :class="data.filter"
      class="post-body"
      :style="{ backgroundImage: `url(${data.postImage})` }"
      @click="$store.commit('좋아요')"
    ></div>

    <div class="post-content">
      <p>{{ $store.state.likes }} Likes</p>
      <p>
        <strong>{{ data.name }}</strong> {{ data.content }}
      </p>
      <p class="date">{{ data.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>
<style scoped>
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
  margin-top: -8px;
}
</style>
