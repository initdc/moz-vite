<template>
  <div class="Card">
    <div class="innerCard">
      <a :href="origin" target="_blank">
        <div class="iconArea">
          <img class="icon" :src="icon">
        </div>
        <div class="description">
          <p>{{ description }}</p>
        </div>
      </a>
      <div class="quickLink">
        {{ quick }}
      </div>
    </div>
  </div>
</template>

<script>
import {getQuick} from '../store/QuickList.ts'
import {ref} from 'vue'

export default {
  name: 'Card',
  emits: ['update'],
  props: {
    qid: Number,
    icon: String,
    description: String,
    origin: String,
    quick: String,
  },
  setup(qid) {
    // console.log(qid)
    for (const [key, value] of Object.entries(qid)) {
      var qidVal = Number(value)
      // console.log(value)
    }

    if (!qidVal) {
      let icon, description, origin, quick = ref('sample')
      return {icon, description, origin, quick}
    }

    let ql = getQuick(qidVal)

    if (ql === undefined) {
      let icon, description, origin, quick = ref('undefined')
      return {icon, description, origin, quick}
    }

    let icon = ql.icon
    let description = ql.description
    let origin = ql.origin
    let quick = ql.quick
    if (quick === null) {
      quick = 'null'
    }

    return { icon, description, origin, quick }
  },
  beforeCreate() {
    this.$emit('update')
  },
}
</script>

<style scoped>
.Card {
  @apply w-32 h-40 flex-none mx-auto rounded-lg bg-gray-50 shadow-lg
}

.innerCard {
  @apply w-auto h-auto flex-col m-1 rounded
  bg-gradient-to-bl from-gray-300 to-gray-50
  hover:shadow-inner
}

.iconArea {
  @apply w-3/4 h-20 flex mx-auto
}

.icon {
  @apply h-3/4 flex m-auto
}

.description {
  @apply w-full h-12 mx-auto
  text-sm text-center text-gray-600
}

.quickLink {
  @apply w-full h-6 mx-auto
  text-sm text-center text-gray-400
}
</style>
