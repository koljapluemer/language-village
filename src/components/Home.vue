<script setup>
import { useGameStore } from "@/stores/game";
const gameStore = useGameStore();
</script>

<template>
  <!-- <router-link class="btn m-2" to="/game/draw">Drawings</router-link>
<router-link class="btn m-2" to="/game/matchdrawings">Match Drawings</router-link> -->
  <div class="grid grid-cols-4 gap-4" id="village">
    <div class="card" v-for="building in gameStore.buildings">
      {{ building }}
      <img
        src="@/assets/Tiles/building_center_N.png"
        class="w-20"
        alt="building"
      />
    </div>
  </div>
</template>
