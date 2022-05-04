<template>
  <n-card class="card h-full ">
    <div class="absolute coming_soon">
      <!--<lottie-player class=" w-full h-96" src="https://assets1.lottiefiles.com/packages/lf20_zmrp62ng.json"
                     background="transparent" speed="1"  loop autoplay>
      </lottie-player>-->
      <lottie :options="ComingSoon" class="w-full h-96" />
      <p class="text-4xl font-bold">COMING SOON</p>
    </div>
  </n-card>
</template>

<script>
  import Lottie from "vue-lottie";
  import ComingSoon from "@/js/Lottie/comingsoon.json";
  export default {
    components:{
      Lottie
    },
    name: "",
    data() {
      return {
        ComingSoon: { animationData: ComingSoon, loop: true },
      };
    },
  };
</script>

<style scoped lang="scss">

.coming_soon {
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
}
</style>