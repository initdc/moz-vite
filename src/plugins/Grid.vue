<template>
<!--  <button @click="show(qid)"> btn</button>-->
  <div class="Grid">
    <div v-for="x in cdCol" class="GridCol">
      <div class="Cards">
        <Card v-for="y in 5" :qid="qid++"></Card>
      </div>
      <Break></Break>
    </div>
  </div>
</template>

<script lang="ts">
import {getAllQuick} from '../store/QuickList'
import {ref, watchEffect} from 'vue'

import Card from './Card.vue'
import Break from "../components/Break.vue";

export default {
  name: 'Grid',
  components: {
    Card, Break
  },
  setup() {
    let ql = getAllQuick()
    if (ql === undefined) {
      return undefined
    }
    let sum = ql.length

    let cdCol: number

    let modNum = sum % 5
    if (modNum !== 0) {
      cdCol = Number(sum / 5) + 1
    } else {
      cdCol = sum / 5
    }
    // console.error(cdCol+` / `+sum)
    let qid: number = 1
    return {cdCol, qid}
  },
  methods: {
    show(obj: any) {
      console.log(obj)
    }
  }
  // created() {
  //   watchEffect(()=>console.log(this.qid))
  // }
}
</script>

<style scoped>
.Grid {
  @apply w-full h-auto flex-col
  /*rounded-lg bg-gradient-to-bl from-gray-50 to-gray-200*/
}

.GridCol {
  @apply w-full flex-col mb-16 mx-auto
}

.Cards {
  @apply w-3/4 flex mx-auto
}
</style>
