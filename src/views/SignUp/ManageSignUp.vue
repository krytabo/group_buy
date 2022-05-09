<template>
  <div class="flex min-h-screen flex-col">
    <div class="flex-grow">
      <div :class="{ StepHidden: step1 }" class="bg flex h-screen">
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
                  <n-button quaternary type="info" @click="$router.push('/manage_login')">登入</n-button>
                </div>
              </div>
            </n-form>
          </div>
        </div>
      </div>

      <div :class="{ StepHidden: step2 }" style="min-height: calc(100vh - 40px)" class="stepBg w-screen overflow-auto px-0 pt-20 pb-20 lg:px-20">
        <n-space vertical>
          <n-steps :current="current" status="process" class="flex w-full items-center justify-center">
            <n-step title="驗證電話號碼"></n-step>
            <n-step title="填寫資料"></n-step>
            <n-step title="註冊成功"></n-step>
          </n-steps>

          <n-divider class="my-10 block px-10 lg:hidden"></n-divider>

          <div class="lg:mt-10">
            <div v-if="current === 1" class="flex items-center justify-center">
              <div class="n-step-description w-screen rounded-lg bg-white py-5 px-10 lg:w-96">
                <!--表單內容-->
                <div class="text-center">
                  <p class="text-xl font-black">請輸入驗證碼</p>
                  <n-form ref="stepRef" label-placement="top" :model="form" :rules="rules">
                    <p class="mb-0">我們己透過簡訊將驗證碼傳送至<br />{{ form.phone }}</p>
                    <n-form-item path="code">
                      <n-input v-model:value="form.code" type="text" placeholder="請輸入簡訊驗證碼" clearable />
                    </n-form-item>

                    <div class="mt-2">
                      <p class="mb-0">沒有收到驗證碼嗎？</p>
                    </div>

                    <div class="mb-10 flex w-full justify-center text-center">
                      <n-button quaternary type="info" :disabled="counting" @click="startCountdown">
                        <vue-countdown v-if="counting" :time="3 * 60000" @end="onCountdownEnd" v-slot="{ totalSeconds }">({{ totalSeconds }}秒)重新發送</vue-countdown>
                        <span v-else>重新傳送驗證碼</span>
                      </n-button>
                    </div>
                  </n-form>
                </div>
                <!--按鈕-->
                <div class="w-full">
                  <n-button v-if="current === 1" type="info" size="large" @click="submitFormNext('stepRef')" class="w-full"> 下一步 </n-button>
                </div>
              </div>
            </div>
            <div v-if="current === 2" class="flex items-center justify-center">
              <div class="n-step-description h-1/2 w-screen overflow-scroll rounded-lg bg-white py-5 px-10 lg:w-3/4">
                <!--表單內容-->
                <div class="text-center">
                  <p class="text-xl font-black">請填寫資料</p>
                  <n-form ref="stepRef" label-placement="left" label-width="auto" label-align="left" require-mark-placement="right" :model="form" :rules="rules">
                    <p class="pt-5 text-left text-base font-bold">基本資訊</p>
                    <n-form-item label="帳號" path="addAccount.accounts">
                      <n-input v-model:value="form.addAccount.accounts" type="text" placeholder="請輸入內容" clearable />
                    </n-form-item>
                    <n-form-item label="姓名" path="addAccount.name">
                      <n-input v-model:value="form.addAccount.name" type="text" placeholder="請輸入內容" clearable />
                    </n-form-item>
                    <n-form-item label="電子信箱" path="addAccount.mail">
                      <n-input v-model:value="form.addAccount.mail" type="text" placeholder="請輸入內容" clearable />
                    </n-form-item>
                    <n-form-item label="密碼" path="addAccount.password">
                      <n-input v-model:value="form.addAccount.password" type="password" show-password-on="mousedown" placeholder="請輸入內容" clearable />
                    </n-form-item>
                    <n-form-item label="密碼" path="addAccount.confirmPwd">
                      <n-input v-model:value="form.addAccount.confirmPwd" type="password" show-password-on="mousedown" placeholder="請輸入內容" clearable />
                    </n-form-item>

                    <p class="pt-5 text-left text-base font-bold">企業資訊</p>
                    <n-form-item label="公司名稱" path="addAccount.companyName">
                      <n-input v-model:value="form.addAccount.companyName" type="text" placeholder="請輸入內容" clearable />
                    </n-form-item>
                    <n-form-item label="統一編號" path="addAccount.taxNumber">
                      <n-input v-model:value="form.addAccount.taxNumber" type="text" placeholder="請輸入內容" clearable />
                    </n-form-item>
                    <n-form-item label="公司地址" path="addAccount.address">
                      <n-input v-model:value="form.addAccount.address" type="text" placeholder="請輸入內容" clearable />
                    </n-form-item>
                    <n-form-item label="公司電話" path="addAccount.phone">
                      <n-input v-model:value="form.addAccount.phone" type="text" placeholder="請輸入內容" clearable />
                    </n-form-item>
                    <n-form-item label="公司傳真" path="addAccount.fax">
                      <n-input v-model:value="form.addAccount.fax" type="text" placeholder="請輸入內容" clearable />
                    </n-form-item>
                    <n-form-item label="公司官網" path="addAccount.website">
                      <n-input v-model:value="form.addAccount.website" type="text" placeholder="請輸入內容" clearable />
                    </n-form-item>
                  </n-form>
                </div>
                <!--按鈕-->
                <div class="w-full">
                  <n-button v-if="current === 2" type="info" size="large" @click="submitFormNext('stepRef')" class="w-full"> 送出 </n-button>
                  <!--<n-button v-if="current === 2" quaternary size="large" @click="submitFormBack(1)" class="w-full"> 返回上一步 </n-button>-->
                </div>
              </div>
            </div>
            <div v-if="current === 3" class="flex items-center justify-center">
              <div class="n-step-description w-screen rounded-lg bg-white py-5 px-10 lg:w-96">
                <!--表單內容-->
                <div class="text-center">
                  <p class="text-xl font-black">註冊成功</p>
                  <div class="mx-auto my-10 h-56 w-56 rounded-full" style="background: #ecf5ff">
                    <Vue3Lottie :animationData="DoneAnimation" class="h-full w-full" />
                    <img src="static/done.svg" alt="Done" />
                  </div>
                </div>
                <!--按鈕-->
                <div class="w-full">
                  <n-button v-if="current === 3" type="info" size="large" @click="$router.push('/manage_login')" class="w-full"> 完成 </n-button>
                  <!--<n-button v-if="current === 3" quaternary size="large" @click="submitFormBack(2)"> 返回上一步 </n-button>-->
                </div>
              </div>
            </div>
          </div>
        </n-space>
      </div>
    </div>

    <footer class="stepBg flex h-10 w-screen justify-center text-center" :class="{ footerStep: step2 }">Copyright © 2022 EZTIT Inc</footer>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import VueCountdown from "@chenfengyuan/vue-countdown";
const LoginAnimation = require("@/js/Lottie/manage_login.json");
const DoneAnimation = require("@/js/Lottie/particle.json");
export default defineComponent({
  components: {
    LoginAnimation,
    DoneAnimation,
    VueCountdown,
  },
  name: "",
  data() {
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("請再輸入一次密碼"));
      } else if (value !== this.form.addAccount.password) {
        callback(new Error("兩次密碼不同，請重新輸入"));
      } else {
        callback();
      }
    };
    return {
      step1: false,
      step2: true,
      current: 1,
      form: {
        phone: "0912345678",
        code: "123",
        addAccount: [
          {
            accounts: "1",
            name: "1",
            mail: "1@11.co",
            password: "1",
            confirmPwd: "1",
            companyName: "1",
            taxNumber: "1",
            address: "1",
            phone: "1",
            fax: "1",
            website: "",
          },
        ],
      },
      formRef: "",
      stepRef: "",
      rules: {
        phone: {
          required: true,
          message: "請輸入手機號碼",
          trigger: ["input"],
          validator: (rule, value) => {
            return /^09\d{8}$/.test(value);
          },
        },
        code: {
          required: true,
          message: "請輸入驗證碼",
          trigger: ["input"],
        },
        addAccount: {
          accounts: {
            required: true,
            message: "請輸入帳號",
            trigger: ["input"],
          },
          name: {
            required: true,
            message: "請輸入名稱",
            trigger: ["input"],
          },
          mail: {
            required: true,
            message: "請輸入電子信箱",
            trigger: ["input"],
            validator: (rule, value) => {
              return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            },
          },
          password: {
            required: true,
            message: "請輸入密碼",
            trigger: ["input"],
          },
          confirmPwd: {
            required: true,
            trigger: ["input"],
            validator: validatePass2,
          },
          companyName: {
            required: true,
            message: "請輸入公司名稱",
            trigger: ["input"],
          },
          taxNumber: {
            required: true,
            message: "請輸入統一編號",
            trigger: ["input"],
          },
          address: {
            required: true,
            message: "請輸入地址",
            trigger: ["input"],
          },
          phone: {
            required: true,
            message: "請輸入電話號碼",
            trigger: ["input"],
          },
          fax: {
            required: true,
            message: "請輸入傳真號碼",
            trigger: ["input"],
          },
        },
      },

      // 倒計時
      counting: false,
    };
  },
  methods: {
    // 驗證表格
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
          this.counting = true;
          return false;
        }
      });
    },

    // 表單下一步
    submitFormNext(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("錯誤");
          /*          this.step2 = true;
          this.step1 = false;*/
        } else {
          console.log("正確");
          if (this.current++ > 2) this.current = 0;
        }
      });
    },

    // 表單上一步
    submitFormBack(step) {
      this.current = step;
    },

    // 倒計時
    startCountdown: function () {
      this.counting = true;
    },
    onCountdownEnd: function () {
      this.counting = false;
    },
  },
  setup() {
    return {
      LoginAnimation,
      DoneAnimation,
    };
  },
});
</script>

<style lang="postcss"></style>
<style lang="scss">
.footerStep {
  position: absolute;
  bottom: 0px;
  background: none !important;
}
.n-steps {
  .n-step {
    flex: none;
    display: block;

    &:not(:last-child) {
      margin-right: 30px;
    }
  }

  .n-step-indicator {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }

  .n-step-splitor {
    display: none;
  }

  .n-step-content.n-step-content-header {
    margin: 0 !important;
  }
}

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

.stepBg {
  background: #ffffff;
}

/*.step-none-title .n-form-item.n-form-item--top-labelled {
  grid-template-areas:
    "blank"
    "feedback";
}*/

@media (min-width: 1024px) {
  .bg {
    background-color: #407bff;
  }
  .n-steps .n-step:not(:last-child) {
    margin-right: 50px;
  }
  .stepBg {
    background: #e9ebee;
  }
}
</style>
