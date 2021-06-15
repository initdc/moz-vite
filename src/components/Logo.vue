<template>
  <!--  <iframe src="https://time.is/zh/just" title=""></iframe>-->
  <div class="Logo">
    <div class="title">moz.one</div>
    <div id="cShell">
      <p id="clock"></p>
    </div>
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
      let clock = document.getElementById("clock");
      if (clock === null) {
        return null;
      }
      clock.innerText =
        hour + " : " + min + " : " + sec; /* adding time to the div */
      let t = setTimeout(function () {
        currentTime();
      }, 1000); /* setting timer */
    }

    function updateTime(k: any) {
      if (k < 10) {
        return "0" + k;
      } else {
        return k;
      }
    }

    currentTime(); /* calling currentTime() function to initiate the process */
  },
};
</script>
<style>
.Logo {
  @apply w-1/3 h-48 flex-col mb-8 z-0;
}
.title {
  @apply flex-row pr-1
  text-right text-2xl font-medium text-gray-400;
}

#cShell {
  @apply w-full mx-auto bg-gray-100 rounded shadow-lg;
}
#clock {
  @apply m-1 bg-gray-500
  text-center text-6xl  text-gray-100 font-black
  hover:shadow-inner-xl;
}
</style>
