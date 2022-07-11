<template>
  <div>
    <slot :text="greetingMessage" :count="2"></slot>
  </div>
</template>

<script setup>
const greetingMessage = "hello";
</script>

<style></style>
