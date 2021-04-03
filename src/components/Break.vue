<template>
  <div class="Break">
    <div class="corner">
      {{tag}}
    </div>
    <div class="bLine"></div>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    tag:String
  }
}
</script>

<style scoped>
.Break {
  @apply w-full h-10 px-8 mx-auto flex-row
}

.corner {
  @apply w-12 h-1/2 flex-none ml-0 mx-auto
  text-gray-400 text-center
}

.bLine {
  @apply w-full h-px flex mx-auto bg-gray-200
}
</style>
