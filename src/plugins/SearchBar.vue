<template>
  <div class="SearchBar">
    <div id="innerSearch">
      <div id="engines"></div>
      <div id="select"></div>
      <input id="input" placeholder="Search something">
      <button id="search" @click="search">search</button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.SearchBar {
  @apply w-1/2 h-12 flex m-auto bg-gray-100 shadow-lg rounded
}

#innerSearch {
  @apply w-auto h-auto m-1 flex flex-grow bg-white border
}
#engines {
  @apply w-14 flex-none ml-0 bg-gray-50
}
#select {
  @apply w-3 flex-none bg-gray-300
  hover:bg-gray-500
}
#input {
  @apply w-auto flex-grow p-2 text-gray-700
  focus:outline-none
  focus:ring-1 focus:ring-inset focus:ring-blue-300
}
#search {
  @apply w-16 flex-none mr-0 bg-gray-500 shadow-lg
  text-center font-bold tracking-tight text-gray-100
  hover:bg-gray-600
  focus:outline-none
  focus:shadow-inner-lg focus:text-gray-400
}
</style>
