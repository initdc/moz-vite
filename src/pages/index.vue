<template>
  <div id="container">
    <Spacing></Spacing>
    <Logo class="flex m-auto"></Logo>
    <SearchBar></SearchBar>
    <Grid></Grid>
    <Spacing></Spacing>
  </div>
  <Footer id="footer"></Footer>
</template>

<script lang="ts">
import Logo from "../components/Logo.vue";
import Footer from "../components/Footer.vue";
import Break from "../components/Break.vue";
import SearchBar from "../plugins/SearchBar.vue";
import Grid from "../plugins/Grid.vue";
import Spacing from "../components/Spacing.vue";
export default {
  name: "index",
  components: { Spacing, Grid, SearchBar, Logo, Footer, Break },
};
</script>

<style scoped>
#container {
  @apply flex-col mx-auto min-w-2xl max-w-6xl;
}
</style>
