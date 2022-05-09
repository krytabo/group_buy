<template>
  <div class="bg">
    <div :class="{ StepHidden: step1 }" class="flex h-screen">
      <!--圖片-->
      <div class="hidden w-2/3 lg:block">
        <div class="vertical absolute left-32 w-1/2">
          <Vue3Lottie :animationData="LoginAnimation" class="h-full w-full" />
        </div>
      </div>
      <!--登入表格-->
      <div class="w-screen items-center bg-white p-7 lg:w-1/3 lg:p-10">
        <div class="vertical relative w-full">
          <h3 class="mb-4 text-center text-xl text-2xl font-semibold sm:mb-6">註冊</h3>
          <n-form ref="formRef" label-placement="top" :model="form" :rules="rules">
            <n-form-item label="手機號碼" path="phone">
              <n-input v-model:value="form.phone" placeholder="請輸入手機號碼" clearable />
            </n-form-item>
            <n-button type="info" class="w-full" size="large" strong @click="submitForm('formRef')">註冊</n-button>

            <div class="mt-4">
              <div>點擊「下一步」繼續註冊<br />即表示您已閱讀並同意億集的 <a href="/termsOfService" target="_blank" class="text-blue-500">註冊服務條款</a></div>
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

    <div :class="{ StepHidden: step2 }" class="h-screen w-screen p-20" style="background: #e9ebee">
      <n-space vertical>
        <n-steps :current="current" status="process" class="flex w-full items-center justify-center">
          <n-step title="驗證電話號碼"></n-step>
          <n-step title="填寫資料"></n-step>
          <n-step title="註冊成功"></n-step>
        </n-steps>
        <div class="mt-10">
          <div v-if="current === 1" class="flex items-center justify-center">
            <div class="n-step-description rounded-lg bg-white py-5 px-10 lg:w-96">
              <!--表單內容-->
              <div class="text-center">
                <p class="text-base font-black">請輸入驗證碼</p>

                <p v-for="item in form">我們己透過簡訊將驗證碼傳送至<br />{{ item.phone }}</p>
                <n-input v-model:value="value" type="text" placeholder="請輸入簡訊驗證碼" />

                <div class="mt-10">
                  <p>沒有收到驗證碼嗎？</p>
                </div>
              </div>
              <!--按鈕-->
              <div class="flex w-full items-center justify-center">
                <n-button v-if="current === 1" type="info" size="small" @click="submitFormNext"> 下一步 </n-button>
              </div>
            </div>
          </div>
          <div v-if="current === 2">
            <div class="n-step-description">
              <p>Al through the day, I me mine I me mine, I me mine</p>

              <div class="flex w-full items-center justify-center space-x-4">
                <n-button v-if="current === 2" quaternary size="small" @click="submitFormBack(1)"> 上一步 </n-button>
                <n-button v-if="current === 2" type="info" size="small" @click="submitFormNext"> 下一步 </n-button>
              </div>
            </div>
          </div>
          <div v-if="current === 3">
            <div class="n-step-description">
              <p>Al through the day, I me mine I me mine, I me mine</p>

              <div class="flex w-full items-center justify-center space-x-4">
                <n-button v-if="current === 3" quaternary size="small" @click="submitFormBack(2)"> 上一步 </n-button>
                <n-button v-if="current === 3" type="info" size="small" @click="submitFormNext"> 下一步 </n-button>
              </div>
            </div>
          </div>
        </div>
      </n-space>
    </div>

    <footer class="absolute bottom-5 w-screen text-center">Copyright © 2022 EZTIT Inc</footer>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
const LoginAnimation = require("@/js/Lottie/manage_login.json");
export default defineComponent({
  components: {
    LoginAnimation,
  },
  name: "",
  data() {
    return {
      step1: false,
      step2: true,
      current: 1,
      form: {
        phone: "0912345678",
      },
      formRef: "",
      rules: {
        phone: {
          required: true,
          message: "請輸入手機號碼",
          trigger: ["input"],
          validator: (rule, value) => {
            return /^09\d{8}$/.test(value);
          },
        },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("錯誤");
          /*          this.step2 = true;
          this.step1 = false;*/
        } else {
          console.log("正確");
          this.step1 = !this.step1;
          this.step2 = !this.step2;
          return false;
        }
      });
    },
    submitFormNext() {
      if (this.current++ > 2) this.current = 0;
    },
    submitFormBack(step) {
      this.current = step;
    },
  },
  setup() {
    return {
      LoginAnimation,
    };
  },
});
</script>

<style lang="postcss"></style>
<style lang="scss">
.StepHidden {
  display: none !important;
}
.n-input-number {
  width: 100%;
}
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
