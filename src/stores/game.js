import { defineStore } from 'pinia'

export const useGameStore = defineStore({
  id: 'counter',
  state: () => ({
    gold: 0,
    buildings: []
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2
  // },
  actions: {
    incrementGold(by = 1) {
      this.gold += by
    },
    addBuilding(building) {
      this.buildings.push(building)
      this.gold -= 50
    }
  },
  persist: true,
})