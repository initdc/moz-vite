<template>
  <div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Footer from "../components/Footer.vue";

export default {
  components: { Footer },
};
</script>
<style scoped>
Footer {
  @apply fixed flex bottom-0;
}
</style>
