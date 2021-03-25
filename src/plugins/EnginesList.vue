<template>
  <div class="EnginesList">
    <ul>
      <li v-for=" eIcon of eIcons">
        <button class="eBtn" @click="$emit('updatee')" :id="eid++">
          <img :src="eIcon">
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
  emits: ['updatee'],
  props: {
    eid: Number,
    icon: String,
  },
  setup() {

    let eid :number = 1
    let allE = getAllEngines()
    if (allE === undefined) {
      return undefined
    }
    let eLength: number = allE.length
    let eIcons = []
    for (let x = 0; x < eLength; x++) {
      let eIcon = allE[x].icon
      // console.log(eIcon)
      eIcons[x] = eIcon
    }
    // console.log(eIcons)
    return {eid, eLength, eIcons}
  },
}
</script>

<style scoped>
.EnginesList {
  @apply w-19.5 h-24 ml-1 -mt-1 flex shadow-lg border
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
