<script setup>
import items from "@/assets/vocab.json";
import { ref, computed } from "vue";

import VueDrawingCanvas from "vue-drawing-canvas";


let stats = {};
if (!localStorage.getItem("stats")) {
  stats = {
    counter: 0,
  };
} else {
  stats = JSON.parse(localStorage.getItem("stats"));
}

const isRevealed = ref(false);
const item = ref(undefined);

generateRandomExercise();

async function generateRandomExercise() {
  isRevealed.value = false;
  item.value = items["items"][Math.floor(Math.random() * items["items"].length)];
}
</script>

<template>
  <main class="">
    <div class="card m-4 bg-gray-900" v-if="item">
      <div class="card-body">
        <h2 class="card-title my-2 text-2xl">Draw a fitting picture.</h2>
        <h3 class="text-3xl my-2">{{item.EG}} — {{item.EN}}</h3>

        <span class="uppercase">{{item.extra_info}}</span>

        <div class="grid grid-cols-2 gap-4">
          <!-- <button class="btn btn-primary" @click="isRevealed = true">A</button>
          <button class="btn btn-primary" @click="isRevealed = true">B</button>
          <button class="btn btn-primary" @click="isRevealed = true">C</button>
          <button class="btn btn-primary" @click="isRevealed = true">D</button> -->
        </div>
      </div>
      <VueDrawingCanvas class="m-5"/>
    </div>
  </main>
</template>
