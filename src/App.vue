<script setup>
import { useGameStore } from "@/stores/game";
const gameStore = useGameStore();

function build(building) {
  gameStore.addBuilding(building);
}
</script>

<template>
  <header class="w-full">
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <router-link class="link" to="/game/draw">Drawings</router-link>
            <router-link class="link" to="/game/matchdrawings"
              >Match Drawings</router-link
            >
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <router-link class="btn btn-ghost text-xl" to="/">
          lang village
        </router-link>
      </div>
      <div class="navbar-end">
        <div class="badge badge-info gap-2 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>

          Gold: {{ gameStore.gold }}
        </div>
      </div>
    </div>
  </header>

  <router-view></router-view>

  <footer class="w-full fixed bottom-0">
    <div class="navbar bg-base-100">
      <div class="navbar-start"></div>
      <div class="navbar-center flex gap-2">
        <button class="btn" @click="build('image-creator')">Build Image Creator</button>
        <button class="btn" @click="build('image-matcher')">Build Image Matcher</button>
      </div>
      <div class="navbar-end"></div>
    </div>
  </footer>
</template>
