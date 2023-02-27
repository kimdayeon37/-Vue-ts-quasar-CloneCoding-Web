<script setup lang="ts">
import { ref, onMounted } from "vue";

interface IProps {
  img: string;
  title: string;
  profile:string;
  channel: string;
  count: number;
  group: string;
}

const props = defineProps<IProps>();
</script>
<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <article>
      <q-img class="img" :ratio="16 / 9" :src="props.img" />
      <div class="row q-col-gutter-x-sm q-mt-md">
        <div class="col-auto">
          <q-avatar size="md">
            <q-img src="/src/assets/shm.jpeg" />
          </q-avatar>
        </div>
        <div class="col">
          <div class="text-subtitle1 text-weight-bold" :style="{ lineHeight: '1.1em' }">{{ props.title }}</div>
          <div class="text-caption text-grey-9 q-mt-xs" :class="{ 'menu-bg': $q.dark.isActive }">{{ props.channel }}</div>
          <div class="text-caption text-grey-9 q-mt-xs" :class="{ 'menu-bg': $q.dark.isActive }">{{ props.count }}회</div>

        </div>
      </div>
    </article>
  </div>
</template>

<style>
.img {
border-radius: 10px;
}
.menu-bg {
  color: white !important;
}
</style>
