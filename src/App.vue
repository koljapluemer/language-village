<script setup>
import words from "./words.js";
import { ref, computed } from "vue";

const dividend = ref(0);
const divisor = ref(1.09);
const guess = ref(0);
const results = ref([]);

const homeCurrency = ref("EUR");
const foreignCurrency = ref("USD");

let unitsPracticedToday = 0;
let unitsPracticedYesterday = 0;

const items = {
  أب: ["عب"],
  "أبو سمبل": ["عبو سمبل", "أبو ثمبل", "أبو زمبل", "أبو صمبل"],
};
// same with localStorage stats
let stats = {};
if (!localStorage.getItem("stats")) {
  stats = {
    counter: 0,
  };
} else {
  stats = JSON.parse(localStorage.getItem("stats"));
}

let isRevealed = ref(false);

generateRandomExercise();

async function generateRandomExercise() {
  isRevealed.value = false;
  //  select random item from items array
  const randomItem = Object.keys(items)[
    Math.floor(Math.random() * Object.keys(items).length)
  ];

  // TODO: need some way to handle secret
  const response = await fetch(``);
  const data = await response.json();
  console.log(data);

}
</script>

<template>
  <main class="">
    <div class="card m-4 bg-gray-900">
      <div class="card-body">
        <h2 class="card-title my-2 text-4xl">What is the correct spelling?</h2>

        <button class="btn btn-secondary mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
          />
        </svg>
        (Re)play word
        </button>

        <div class="grid grid-cols-2 gap-4">
          <button class="btn btn-primary" @click="isRevealed = true">A</button>
          <button class="btn btn-primary" @click="isRevealed = true">B</button>
          <button class="btn btn-primary" @click="isRevealed = true">C</button>
          <button class="btn btn-primary" @click="isRevealed = true">D</button>
        </div>
      </div>
    </div>
  </main>
</template>
