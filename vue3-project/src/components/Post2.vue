<template>
  <div></div>
  <input v-model="title" />
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const title = ref("Post2");
    return {
      title,
    };
  },
};
</script>

<style></style>
