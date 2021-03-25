<template>
  <div id="index" class="flex-row">
    <Spacing></Spacing>
    <Logo class="flex m-auto"></Logo>
    <SearchBar></SearchBar>
    <Grid></Grid>
    <Spacing id="ending"></Spacing>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Logo from '../components/Logo.vue'
import Footer from '../components/Footer.vue'
import Break from '../components/Break.vue'
import SearchBar from '../plugins/SearchBar.vue'
import Grid from '../plugins/Grid.vue'
import Spacing from '../components/Spacing.vue'
export default {
  name: 'index',
  components: {  Spacing, Grid, SearchBar, Logo, Footer,Break }
}
</script>

<style scoped>
#ending {
  @apply h-32
}
</style>

