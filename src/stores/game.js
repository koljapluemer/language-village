import { defineStore } from 'pinia'

export const useGameStore = defineStore({
  id: 'counter',
  state: () => ({
    gold: 0
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2
  // },
  actions: {
    incrementGold(by = 1) {
      this.gold += by
    }
  },
  persist: true,
})