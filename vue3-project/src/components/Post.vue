<template>
  <div></div>
  <input v-model="title" />
</template>

<script>
import { ref } from "vue";

export default {
  setup(props, { emit }) {
    const title = ref("Post");

    //       created() {
    //     this.$emit('update', `${this.$options.name} Created.`);
    //   },
    //   mounted() {
    //     this.$emit('update', `${this.$options.name} Mounted.`);
    //   },
    //   unmounted() {
    //     this.$emit('update', `${this.$options.name} Unmounted.`);
    //   }

    return {
      title,
    };
  },
};
</script>

<style></style>
