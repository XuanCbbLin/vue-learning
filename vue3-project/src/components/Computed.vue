<template>
  <button @click="fullName = 'ssss xuan'">點我</button>
</template>

<script setup>
import { computed, ref } from "vue";

const firstName = ref("John");
const lastName = ref("Doe");

const fullName = computed({
  // getter
  get() {
    return firstName.value + " " + lastName.value;
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    [firstName.value, lastName.value] = newValue.split(" ");
  },
});
</script>

<style></style>
