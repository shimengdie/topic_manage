import { defineStore } from 'pinia';

export const useuserStore = defineStore({
  id: 'user',
  state: () => ({ userInfo: {} }),
  getters: {
    getUserInfo: (state) => state.userInfo,
  },
  actions: {
    
  },
});
