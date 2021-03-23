<template>
  <div class="Grid">
    <div v-for="x in cdCol" class="GridCol">
      <div class="Cards">
        <Card v-for="y in 5" :qid=qid></Card>
      </div>
      <Break></Break>
    </div>
  </div>
</template>

<script>
import {getQuick, getAllQuick} from '../store/QuickList.ts'
import { ref } from 'vue'

import Card from './Card.vue'
import Break from "../components/Break.vue";
export default {
  name: 'Grid',
  components: {
    Card, Break
  },
  setup() {
    let ql = getAllQuick()
    let sum = ql.length
    let cdCol = parseInt(sum/5 ) +1
    console.error(cdCol+`/ `+sum)
    let qid = ref(1)
    return {cdCol, qid }
  },
}
</script>

<style scoped>
.Grid {
  @apply w-full h-auto flex-col
  /*rounded-lg bg-gradient-to-bl from-gray-50 to-gray-200*/
}
.GridCol {
  @apply w-full flex-col mt-16 mx-auto
}
.Cards {
  @apply w-2/3 flex mx-auto
}
</style>
