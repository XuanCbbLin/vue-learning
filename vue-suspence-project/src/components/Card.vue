<template>
  <div class="container flex justify-center mx-auto">
    <div class="flex items-start p-7 rounded-xl bg-white shadow-2xl">
      <div class="p-2 border-5 border-solid rounded-1/2 border-green-500">
        <img :src="loadData.pic" class="rounded-1/2 w-36" />
      </div>
      <div class="ml-4">
        <div class="mb-2">WRITTEN BY</div>
        <h2 class="mb-3 text-lg font-semibold">{{ loadData.h2 }}</h2>
        <p>{{ loadData.p }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const loadData = await new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      h2: "Matt Maribojoc",
      p: "I run a VueJS community over at https://learnvue.co, develop web sites, and post whatever I find cool on the Internet.",
      pic: "https://cdn-images-1.medium.com/fit/c/100/100/2*EcZb9cndrhTF7_d74dv2Fg.png",
    });
  }, 2000);
});
</script>

<style></style>
