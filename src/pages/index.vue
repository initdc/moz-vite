<template>
  <div class="flex-row">
    <Spacing></Spacing>
    <EnginesList></EnginesList>
    <Logo class="flex m-auto"></Logo>
    <SearchBar></SearchBar>
    <Spacing></Spacing>
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
import EnginesList from '../plugins/EnginesList.vue'
export default {
  name: 'index',
  components: { EnginesList, Spacing, Grid, SearchBar, Logo, Footer,Break },
}
</script>

<style scoped>
#ending {
  @apply h-32
}

</style>

