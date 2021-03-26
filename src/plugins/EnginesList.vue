<template>
  <div class="EnginesList">
    <ul>
      <li v-for=" [key, value] of eMap">
        <button class="eBtn" :key="key" @click="updatee(key)">
          <img :src="value">
        </button>
      </li>
    </ul>
  </div>

  <!--  <button id="aa" @click="show">btn</button>-->
</template>

<script lang="ts">
import {getAllEngines} from '../store/EnginesList'

export default {
  name: 'EnginesList',
  // emits: ['updatee'],
  props: {
    eid: Number,
    icon: String,
  },
  setup() {
    let eid: number = 1
    let allE = getAllEngines()
    if (allE === undefined) {
      return undefined
    }
    // console.log(allE)
    let eLength: number = allE.length
    let eMap = new Map()
    for (let e of allE ) {
      eMap.set(e.eid , e.icon)
    }
    // console.log(eMap)
    return {eid, eLength, eMap}
  },

  methods: {
    goto() {
      window.location.href = 'https://github.com'
    },
    updatee(key: any){
      // console.log(key)
      this.$parent.updatee(key)
    }
  }
}
</script>

<style scoped>
.EnginesList {
  @apply w-19.5 h-24 ml-1 -mt-1 flex shadow-lg border z-20
  overscroll-auto overflow-auto
}

ul {
  @apply flex-col
}
li {
  @apply w-full flex h-8 p-1 m-auto
}

.eBtn {
  @apply focus:outline-none
}

::-webkit-scrollbar {
  @apply w-3
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-300
}
</style>
