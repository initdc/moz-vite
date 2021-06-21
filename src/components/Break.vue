<template>
  <div :class="lineClass" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FbLine",
  
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
.Break {
  @apply w-full h-10 px-8 mx-auto flex-row;
}

.corner {
  @apply w-12 h-1/2 flex-none ml-0 mx-auto
  text-gray-400 text-center;
}

.bLine {
  @apply w-full h-px flex mx-auto bg-gray-200;
}
</style>
