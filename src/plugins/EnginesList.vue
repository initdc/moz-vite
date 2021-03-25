<template>
  <div>
    List
    <ul>
      <li v-for="v in object">
        {{ v }}
      </li>
    </ul>
  </div>

</template>

<script>
import {getEngine} from '../store/EnginesList.ts'

export default {
  name: 'EnginesList',
  props: {
    object: Object
  },
  setup() {
    let e = getEngine(1)
    let object = e
    return {object}
  }
}
</script>

<style scoped>

</style>
