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

let drawings = {};
if (!localStorage.getItem("drawings")) {
  drawings = [];
} else {
  drawings = JSON.parse(localStorage.getItem("drawings"));
}

const isRevealed = ref(false);
const item = ref(undefined);
const answerOptions = ref([]);

const canvasData = ref({
  color: "#bb2020",
});

generateRandomExercise();

async function generateRandomExercise() {
  isRevealed.value = false;
  item.value = drawings[Math.floor(Math.random() * drawings.length)];

  answerOptions.value = [
    {
      text: item.value.item.EG,
      isCorrect: true,
    },
    {
      text: items["items"][Math.floor(Math.random() * items["items"].length)]
        .EG,
      isCorrect: false,
    },
    {
      text: items["items"][Math.floor(Math.random() * items["items"].length)]
        .EG,
      isCorrect: false,
    },
    {
      text: items["items"][Math.floor(Math.random() * items["items"].length)]
        .EG,
      isCorrect: false,
    },
  ];
  answerOptions.value = answerOptions.value.sort(() => Math.random() - 0.5);
}

const vueCanvasDrawing = ref(null);

function safeAndNext() {
  const canvasData = vueCanvasDrawing.value.getAllStrokes();
  // convert to JSON and append to drawings:
  drawings.push({
    item: item.value,
    canvasData,
  });
  localStorage.setItem("drawings", JSON.stringify(drawings));
  vueCanvasDrawing.value.reset();
  generateRandomExercise();
}
</script>

<template>
  <main class="">
    <div class="card m-4 bg-gray-900" v-if="item">
      <div class="card-body">
        <h2 class="card-title my-2 text-2xl">Match the correct word</h2>
      </div>
      <div id="canvas-wrapper" class="m-5">
        <VueDrawingCanvas
          :color="canvasData.color"
          ref="vueCanvasDrawing"
          :initialImage="item.canvasData"
          :lock="true"
        ></VueDrawingCanvas>

        <div class="grid grid-cols-2 gap-4 my-2">
          <button
            class="btn btn-primary"
            @click="handleAnswer(option.isCorrect)"
            v-for="option in answerOptions"
            :key="option.text"
          >
            {{ option.text }}
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
