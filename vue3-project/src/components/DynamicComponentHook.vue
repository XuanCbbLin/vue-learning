<template>
  <button v-for="tab in tabs" :key="tab" :class="['tab-button', { active: currentTab === tab }]" @click="currentTab = tab">
    {{ tab }}
  </button>

  <component :is="currentTabComponent" @update="notify"></component>

  <ul class="inspector">
    <li v-for="m in msgs" :key="m">{{ m }}</li>
  </ul>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import Post from "./Post.vue";
import Post2 from "./Post2.vue";

export default {
  components: { Post, Post2 },
  setup() {
    const currentTab = ref("Post");
    const tabs = reactive(["Post", "Post2"]);
    const msgs = reactive([]);

    const currentTabComponent = computed(() => currentTab.value);
    const notify = (val) => {
      msgs.push(val);
    };

    return {
      currentTab,
      tabs,
      msgs,
      currentTabComponent,
      notify,
    };
  },
};
</script>

<style scoped>
.active {
  color: red;
}
</style>
