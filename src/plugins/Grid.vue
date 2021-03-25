<template>
  <div class="Grid">
    <button>qid is: {{ qidVal }}</button>
    <div v-for="x in cdCol" class="GridCol">
      <div class="Cards" >
        <Card :qid="setqid()" v-on:update="qidVal++"></Card>
        <Card :qid="setqid()" v-on:update="qidVal++"></Card>
        <Card :qid="setqid()" v-on:update="qidVal++"></Card>
        <Card :qid="setqid()" v-on:update="qidVal++"></Card>
        <Card :qid="setqid()" v-on:update="qidVal++"></Card>
      </div>
      <Break></Break>
    </div>
  </div>
</template>

<script lang="ts">
import {getQuick, getAllQuick} from '../store/QuickList.ts'
import { ref, watchEffect } from 'vue'

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

    let modNum = sum % 5
    if (modNum !== 0) {
      var cdCol = parseInt(sum/5 ) +1
    }else {
      var cdCol = sum/5
    }
    // console.error(cdCol+` / `+sum)
    let qidVal :Number = ref(1)
    let qid :Number
    return { cdCol, qidVal, qid }
  },
  created() {
    watchEffect(() => console.log(this.qidVal))
  },
  methods: {
    setqid() {
      return this.qidVal
    },
    update() {
      this.qidVal++
    }
  }
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
