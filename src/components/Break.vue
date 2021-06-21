<template>
  <div :class="lineClass" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FoLine",
  
  props: {
    direc: {
      type: String,
      validator(value: string): boolean {
        return ["hor", "ver"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    lineClass(): string {
      if (this.direc === "ver") {
        return "_line-ver";
      }
      return "_line-hor";
    },
  },
});
</script>

<style scoped>
._line-hor {
  @apply my-4;
}
</style>
