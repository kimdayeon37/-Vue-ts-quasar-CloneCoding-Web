import { defineStore } from "pinia";

export const useHeaderbarStore = defineStore("headerbar", {
  state: () => ({
    leftDrawerOpen: false
  }),
  getters: {},
  actions: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },
});