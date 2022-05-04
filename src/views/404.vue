<template>
  <div class="z-100 absolute bottom-60 w-full space-y-4 text-center text-white sm:bottom-32">
    <p class="text-2xl">您訪問的頁面不存在</p>
  </div>

  <div class="section_wrapper h-screen" style="background: #232247">
    <lottie :options="ErrorAnimation" class="h-full w-full" />
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import ErrorAnimation from "@/js/Lottie/404";
export default {
  components: {
    Lottie,
  },
  name: "",
  data() {
    return {
      ErrorAnimation: { animationData: ErrorAnimation, loop: true },
    };
  },
};
</script>

<style lang="scss"></style>
