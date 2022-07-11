<template>
  <ul>
    <li>
      <template v-if="child.length > 0">
        <h2 class="has-child" :class="{ 'is-open': isOpen }" @click="isOpen = !isOpen">{{ title }}</h2>
        <Menu v-show="isOpen" v-for="c in child" :title="c.name" :child="c.childNodes" :url="c.url" />
      </template>
      <a :href="url" target="_blank" v-else>{{ title }}</a>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
  url: String,
  child: {
    type: Array,
    default: [],
  },
});

const isOpen = ref(false);
</script>

<style></style>
