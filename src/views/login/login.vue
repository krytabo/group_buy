<template>
  <div class="relative bg h-screen">
    <!--圖片-->
    <div class="absolute w-1/2 vertical left-32 hidden lg:block">

      <lottie :options="LoginAnimation"
              class="h-5/6 w-5/6" />

    </div>
    <!--登入表格-->
    <div class="absolute bg-white lg:rounded-2xl rounded-none lg:shadow-2xl shadow-none p-7 lg:p-10 lg:w-96 w-screen lg:right-32 right-0 vertical">
      <h3 class="mb-4 text-xl font-semibold text-center sm:mb-6 text-2xl">登入賣家中心</h3>

      <n-form ref="formRef" label-placement="top" :model="form" >
        <n-form-item label="帳號" path="user.name">
          <n-input v-model:value="form.name" placeholder="請輸入帳號" />
        </n-form-item>
        <n-form-item label="密碼" path="user.age">
          <n-input v-model:value="form.password" placeholder="請輸入密碼" />
        </n-form-item>
        <div  class="flex w-full">
          <n-checkbox v-model:checked="form.isRead">記住我</n-checkbox>
          <div class="flex-1 text-right">
            <n-button quaternary type="info">忘記密碼？</n-button>
          </div>
        </div>

        <n-button type="info" class="w-full" size="large" strong @click="$router.push('Backstage')">登入</n-button>

        <div  class="flex w-full justify-center items-center mt-5">
          <div>還沒有帳號？</div>
          <div class="text-left">
            <n-button quaternary type="info">立即註冊</n-button>
          </div>
        </div>

        <n-divider>或</n-divider>

      <n-button class="w-full" size="large" strong>使用特約商帳號登入</n-button>

      </n-form>
    </div>

    <footer class="text-center w-screen absolute bottom-5">Copyright © 2022 EZTIT Inc</footer>
  </div>
</template>

<script>
  import { defineComponent, ref } from "vue";
  import Lottie from "vue-lottie";
  import LoginAnimation from "@/js/Lottie/login.json";

  export default defineComponent({
    components:{
      Lottie
    },
    name: "",
    data() {
      return {
        LoginAnimation: { animationData: LoginAnimation, loop: true },
        form:[
          {
            name: '',
            password: '',
            isRead: false,
          }
        ]
      };
    },
    mounted() {

    },
    methods: {

    },
    setup() {
      return {
        value: ref(null)
      };
    }
  });
</script>

<style lang="postcss">

</style>
<style lang="scss">
  .horizontally { //垂直置中
    left: 50%;
    transform:translatex(-50%);
  }
  .vertical { //水平置中
    top: 50%;
    transform:translateY(-50%);
  }
  .v_h { //完全置中
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
  }
  @media (min-width: 1024px) {
    .bg {
      background-color: #E9EBEE;
    }
  }
</style>