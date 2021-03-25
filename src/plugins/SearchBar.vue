<template>
  <div class="Search">
    <div class="SearchBar">
      <div id="innerSearch">
        <a id="engines" :href="index" target="_blank">
          <img id="icon" :src="icon">
        </a>
        <button id="select" @click="eshow = !eshow">▼</button>
        <input id="input" @keyup.enter="search(input,query)" v-model="input" placeholder="Search something">
        <button id="search" @click="search(input,query)">search</button>
      </div>
    </div>
    <EnginesList v-show="eshow"></EnginesList>
    {{ eshow }}
  </div>
</template>

<script lang="ts">
import EnginesList from "./EnginesList.vue";
import {ref, watchEffect} from "vue";
import {getEngine} from "../store/EnginesList";

export default {
  components: {EnginesList},
  props: {
    eshow: Boolean,
    eid: Number,
    icon: String,
    index: String,
    query: String,
  },
  setup() {
    // for (const [key, value] of Object.entries(qid)) {
    //   var qidVal = Number(value)
    //   console.log(value)
    // }
    //
    // if (!qidVal) {
    //   let icon, description, origin, quick = ref('sample')
    //   return {icon, description, origin, quick}
    // }
    //
    let input: string = ''
    let eid = 1
    let eshow = ref(false)

    let el = getEngine(eid)
    if (el === undefined) {
      let icon, index, query = ref('undefined')
      return {icon, index, query}
    }

    let icon = el.icon
    let index = el.index
    let query = el.query

    return {input, eshow, icon, index, query}
  },
  methods: {
    search(input: string, query: string) {
      if (input !== '') {
        window.location.href = query + input
      }
    }
  }

}
</script>

<style scoped>
.Search {
  @apply w-1/2 h-36 mx-auto flex-col
}

.SearchBar {
  @apply w-full h-12 flex bg-gray-100 shadow-lg rounded
}

#innerSearch {
  @apply w-auto h-auto m-1 flex flex-grow bg-white border
}

#engines {
  @apply w-16 h-full ml-0 my-auto flex bg-gray-50
  focus:outline-none
}

#icon {
  @apply p-1 m-auto
}

#select {
  @apply w-3 pt-2 flex bg-gray-300 text-gray-100 text-center
  hover:bg-gray-400 hover:text-gray-500
  focus:outline-none
}

#input {
  @apply w-auto flex-grow p-2 text-gray-700
  focus:outline-none
  focus:ring-1 focus:ring-inset focus:ring-blue-300
}

#search {
  @apply w-14 flex-none mr-0 bg-gray-500 shadow-lg
  text-center font-bold tracking-tight text-gray-200
  hover:bg-gray-600
  focus:outline-none
  focus:shadow-inner-lg active:text-gray-400
}
</style>
