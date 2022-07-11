<template>
  <button v-for="tab in tabs" :key="tab" @click="currentTab = tab.text">
    {{ tab.text }}
  </button>

  <keep-alive include="Post">
    <component :is="currentTab" />
  </keep-alive>
</template>

<script>
import { reactive, ref, shallowRef } from "vue";
import Post from "./Post.vue";
import Post2 from "./Post2.vue";

export default {
  components: {
    Post,
    Post2,
  },
  setup() {
    const currentTab = ref("Post");

    const tabs = reactive([
      { text: "Post", component: Post },
      { text: "Post2", component: Post2 },
    ]);

    return {
      currentTab,
      tabs,
    };
  },
};
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>
