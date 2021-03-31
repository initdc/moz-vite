<template>
  <div class="Search">
    <!--    <button @click="eshowoff" >{{ eShow }}</button>-->
    <div class="SearchBar">
      <div class="innerSearch">
        <a class="engines" :href="index" target="_blank" rel="nofollow">
          <img class="icon" :src="icon">
        </a>
        <button class="select" @click="eShow = !eShow">▼</button>
        <input class="input" @focus="eshowoff" @keyup.enter="search(input,query)" v-model="input"
               placeholder="Search something">
        <button class="search" @click="search(input,query)">search</button>
      </div>
    </div>
    <EnginesList v-if="eShow"></EnginesList>
  </div>
</template>

<script lang="ts">
import EnginesList from "./EnginesList.vue";
import {ref, watchEffect} from "vue";
import {getEngine} from "../store/EnginesList";

export default {
  components: {EnginesList},
  props: {
    eShow: Boolean,
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
    let eShow = ref(false)
    let eid
    let lEid = localStorage.getItem('eid')
    // console.log(typeof lEid, lEid)
    if (lEid) {
      eid = Number(lEid)
    } else {
      eid = 1
    }

    let el = getEngine(eid)
    if (el === undefined) {
      let icon, index, query = ref('undefined')
      return {icon, index, query}
    }

    let icon = ref(el.icon)
    let index = ref(el.index)
    let query = ref(el.query)

    return {input, eShow, icon, index, query}
  },
  // created() {
  //   let eid = Number( localStorage.getItem('eid'))
  //   let eSid = String(eid)
  //   console.warn(typeof eSid, eSid )
  //   if (eid) {
  //     this.updatee(eid)
  //   } else {
  //     localStorage.setItem('eid','1')
  //   }
  // },
  methods: {
    search(input: string, query: string) {
      if (input !== '') {
        window.location.href = query + input
      }
    },
    eshowoff() {
      this.eShow = false
    },
    updatee(eid: any) {
      // console.warn('catched child event')
      localStorage.setItem('eid', String(eid))
      let el = getEngine(eid)
      if (el === undefined) {
        let icon, index, query = ref('undefined')
        return {icon, index, query}
      }

      this.icon = ref(el.icon)
      this.index = ref(el.index)
      this.query = ref(el.query)

      this.eshowoff()
      // return {icon, index, query}
    }
  }

}
</script>

<style scoped>
.Search {
  @apply w-1/2 h-36 mx-auto flex-col mb-8 z-10
}

.SearchBar {
  @apply w-full h-12 flex bg-gray-100 shadow-lg rounded
}

.innerSearch {
  @apply w-auto h-auto m-1 flex flex-grow bg-white border
}

.engines {
  @apply w-16 h-full ml-0 my-auto flex bg-gray-50
  focus:outline-none
}

.icon {
  @apply p-1 m-auto
}

.select {
  @apply w-3 pt-2 flex bg-gray-300 text-gray-100 text-center
  hover:bg-gray-400 hover:text-gray-500
  focus:outline-none
}

.input {
  @apply w-auto flex-grow p-2 text-gray-700
  focus:outline-none
  focus:ring-1 focus:ring-inset focus:ring-blue-300
}

.search {
  @apply w-14 flex-none mr-0 bg-gray-500 shadow-lg
  text-center font-bold tracking-tight text-gray-200
  hover:bg-gray-600
  focus:outline-none
  focus:shadow-inner-lg active:text-gray-400
}
</style>
