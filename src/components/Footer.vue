<template>
  <div class="Footer">
    <div id="line"></div>
    <div id="context">
      <ul>
        <li>A <a href="https://fib.one" target="_blank">fibone™</a> project</li>
        <li>Copyleft <span class="copyleft">©</span> 2021</li>
      </ul>
      <ul>
        <li>
          Issue on
          <a href="https://github.com/initdc/moz-vite" target="_blank"
            >Github</a
          >
        </li>
        <li>
          <a href="https://www.patreon.com/1drv" target="_blank">Donation</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.Footer {
  @apply w-full h-16 flex-col bottom-0 bg-gray-50;
}

#line {
  @apply w-full h-px bottom-16 bg-gray-200;
}

#context {
  @apply w-11/12 h-16 flex m-auto;
}

ul {
  @apply w-full m-auto;
}

li {
  @apply text-right text-sm text-gray-500 font-light;
}
a {
  @apply font-normal;
}
.copyleft {
  @apply inline-block transform rotate-180;
}
</style>
