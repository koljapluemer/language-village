<script setup>
import sentences from "@/assets/eg_sentences.json";
import { ref, computed } from "vue";

import VueDrawingCanvas from "vue-drawing-canvas";

import { useGameStore } from "@/stores/game";
const gameStore = useGameStore();

const isRevealed = ref(false);
const item = ref(undefined);
const items = sentences["sentences"];

generateRandomExercise();

function generateRandomExercise() {
  const randomItem = items[Math.floor(Math.random() * items.length)];
  item.value = randomItem;
}

function handleAnswer() {
  generateRandomExercise();
}
</script>

<template>
  <main class="">
    <div class="card m-4 p-4 bg-gray-900">
      <div class="card-body">
        <h2 class="card-title my-2 text-2xl">Translate the sentence</h2>

        <h3 class="text-4xl my-10">{{ item }}</h3>

        <button class="btn btn-primary" @click="handleAnswer">Show Next</button>
      </div>
    </div>
  </main>
</template>
