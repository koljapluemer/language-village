<script setup>
import items from "@/assets/vocab.json";
import { ref, computed } from "vue";

import VueDrawingCanvas from "vue-drawing-canvas";

import { useGameStore } from "@/stores/game";
const gameStore = useGameStore();


let stats = {};
if (!localStorage.getItem("stats")) {
  stats = {
    counter: 0,
  };
} else {
  stats = JSON.parse(localStorage.getItem("stats"));
}

let drawings = {};
if (!localStorage.getItem("drawings")) {
  drawings = []
} else {
  drawings = JSON.parse(localStorage.getItem("drawings"));
}



const isRevealed = ref(false);
const item = ref(undefined);

const canvasData = ref({
  color: "#bb2020",
});

generateRandomExercise();

async function generateRandomExercise() {
  isRevealed.value = false;
  item.value =
    items["items"][Math.floor(Math.random() * items["items"].length)];
}

const vueCanvasDrawing = ref(null);

function safeAndNext() {
  const canvasData = vueCanvasDrawing.value.getAllStrokes();
  // convert to JSON and append to drawings:
  drawings.push({
    item: item.value,
    canvasData,
  });
  localStorage.setItem("drawings", JSON.stringify(drawings))
  vueCanvasDrawing.value.reset();
  gameStore.incrementGold(10);
  generateRandomExercise();
}
</script>

<template>
  <main class="">
    <div class="card m-4 bg-gray-900" v-if="item">
      <div class="card-body">
        <h2 class="card-title my-2 text-2xl">Draw a fitting picture.</h2>
        <h3 class="text-3xl my-2">{{ item.EG }} — {{ item.EN }}</h3>

        <span class="uppercase">{{ item.extra_info }}</span>

        <div class="grid grid-cols-2 gap-4">
          <!-- <button class="btn btn-primary" @click="isRevealed = true">A</button>
          <button class="btn btn-primary" @click="isRevealed = true">B</button>
          <button class="btn btn-primary" @click="isRevealed = true">C</button>
          <button class="btn btn-primary" @click="isRevealed = true">D</button> -->
        </div>
      </div>
      <div id="canvas-wrapper" class="m-5">
        <VueDrawingCanvas :color="canvasData.color" ref="vueCanvasDrawing" />
        <div id="canvas-tools" class="my-2 flex gap-4 items-center">
          <div class="flex gap-2 items-center">
            <label for="color">Color:</label>
            <input name="color" type="color" v-model="canvasData.color" />
          </div>

          <button
            type="button"
            class="btn"
            @click.prevent="$refs.vueCanvasDrawing.reset()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-file-earmark"
              viewBox="0 0 16 16"
            >
              <path
                d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"
              />
            </svg>
            Reset
          </button>
          <button class="btn btn-primary" @click="safeAndNext">
            Save & Next
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
