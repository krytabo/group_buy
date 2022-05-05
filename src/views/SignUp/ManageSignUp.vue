<template>
  <div class="bg">
    <div class="flex h-screen">
      <!--圖片-->
      <div class="hidden w-2/3 lg:block">
        <div class="vertical absolute left-32 w-1/2">
          <lottie :options="LoginAnimation" class="h-full w-full" />
        </div>
      </div>
      <!--登入表格-->
      <div class="w-screen items-center bg-white p-7 lg:w-1/3 lg:p-10">
        <div class="vertical relative w-full">
          <h3 class="mb-4 text-center text-xl text-2xl font-semibold sm:mb-6">註冊</h3>
          <n-form ref="formRef" label-placement="top" :model="form" :rules="rules">
            <n-form-item label="手機號碼" path="phone">
              <n-input v-model:value="form.phone" placeholder="請輸入手機號碼" />
            </n-form-item>
            <n-button type="info" class="w-full" size="large" strong @click="handleValidateClick">註冊</n-button>

            <div class="mt-4">
              <div>點擊「下一步」繼續註冊<br />即表示您已閱讀並同意億集的<n-button quaternary text tag="a" target="_blank" type="info" href="/manage_login">註冊服務條款</n-button></div>
            </div>

            <n-divider>或</n-divider>

            <div class="mt-5 flex w-full items-center justify-center">
              <div>已經有帳號了嗎？</div>
              <div class="text-left">
                <n-button quaternary type="info" @click="$router.push('manage_login')">登入</n-button>
              </div>
            </div>
          </n-form>
        </div>
      </div>
    </div>

    <footer class="absolute bottom-5 w-screen text-center">Copyright © 2022 EZTIT Inc</footer>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Lottie from "vue-lottie";
import LoginAnimation from "@/js/Lottie/manage_login.json";

export default defineComponent({
  components: {
    Lottie,
  },
  name: "",
  data() {
    return {
      formRef: "",
      LoginAnimation: { animationData: LoginAnimation, loop: true },
      form: [
        {
          phone: "",
        },
      ],
      rules: {
        phone: {
          required: true,
          message: "請輸入手機號碼",
          trigger: ["input"],
        },
      },
    };
  },
  mounted() {},
  methods: {},
  setup() {
    return {
      handleValidateClick(e) {
        e.preventDefault();
        formRef.value?.validate((errors) => {
          if (!errors) {
            message.success("Valid");
          } else {
            console.log(errors);
            message.error("Invalid");
          }
        });
      },
    };
  },
});
</script>

<style lang="postcss"></style>
<style lang="scss">
.horizontally {
  //垂直置中
  left: 50%;
  transform: translatex(-50%);
}
.vertical {
  //水平置中
  top: 50%;
  transform: translateY(-50%);
}
.v_h {
  //完全置中
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
}
@media (min-width: 1024px) {
  .bg {
    background-color: #407bff;
  }
}
</style>
