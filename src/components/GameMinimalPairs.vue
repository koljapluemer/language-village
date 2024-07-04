<template>
  <div id="score-holder" class="flex gap-2 justify-center mt-10"></div>
  <div class="card m-4 bg-gray-900">
    <div class="card-body">
      <h2 class="card-title my-2 text-2xl">What is the correct spelling?</h2>

      <audio controls class="my-8">
        <source src="" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div class="grid grid-cols-2 gap-4">
        {% for variation in spelling_alternatives %}
        <button class="btn text-3xl">
          {{ variation[0] }}
        </button>
        {% endfor %}
      </div>
    </div>
    <!-- link reloading the page and thus going to next item, initially hidden -->
    <a href="/" class="hidden btn btn-primary mt-10" id="next-link"
      >Next Exercise</a
    >
  </div>

  <p class="m-10">
    <a href="https://forvo.com/" title="Pronunciations by Forvo"
      ><img
        src="https://api.forvo.com/byforvoblue.gif"
        width="120"
        height="40"
        alt="Pronunciations by Forvo"
        style="border: 0"
    /></a>
  </p>
</template>
