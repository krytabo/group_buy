<template>
<!--  <lottie-player src="http://vip.qdxin.cn/lin/wb/json/xinzt-loading.json"
                 speed="1"
                 id="lott"
                 style="position:fixed;width: 100%;height: 100%;z-index: 5;background: #fff;"
                 class="lottie-player"
                 autoplay
                 loop
  >
  </lottie-player>-->
  <n-card class="card h-full ">
    <div class="absolute coming_soon">
      <lottie-player class=" w-full h-96" src="https://assets1.lottiefiles.com/packages/lf20_zmrp62ng.json"
                     background="transparent" speed="1"  loop autoplay>
      </lottie-player>
      <!--<iframe class=" w-full h-96" src="https://embed.lottiefiles.com/animation/96654"></iframe>-->
      <p class="text-4xl font-bold">COMING SOON</p>
    </div>
  </n-card>
</template>

<script>
  export default {
    name: ""
  };
</script>

<style scoped lang="scss">

.coming_soon {
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
}
</style>