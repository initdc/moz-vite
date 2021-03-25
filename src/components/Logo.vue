<template>
  <!--  <iframe src="https://time.is/zh/just" title=""></iframe>-->
  <div class="cPlugin">
    <p id="clock"></p>
  </div>
</template>
<script lang="ts">

export default {
  mounted() {
    function currentTime() {
      let date = new Date(); /* creating object of Date class */
      let hour = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();
      hour = updateTime(hour);
      min = updateTime(min);
      sec = updateTime(sec);
      let clock = document.getElementById("clock")
      if (clock === null) {
        return null
      }
      clock.innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
      let t = setTimeout(function () {
        currentTime()
      }, 999); /* setting timer */
    }

    function updateTime(k: any) {
      if (k < 10) {
        return "0" + k;
      } else {
        return k;
      }
    }

    currentTime(); /* calling currentTime() function to initiate the process */
  }
}
</script>
<style>
.cPlugin {
  @apply w-1/3 h-48 flex mb-8

}
#clock {
  @apply w-full m-auto text-center text-6xl bg-gray-500 text-gray-100 font-black
  border-4 border-gray-200 shadow-lg

}

</style>
