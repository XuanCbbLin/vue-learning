<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import CardVue from "./components/Card.vue";
import Loading from "./components/Loading.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <CardVue />
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>

  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
</template>

<style></style>
