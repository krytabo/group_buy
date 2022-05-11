<template>
  <div class="flex min-h-screen flex-col">
    <div class="flex-grow">
      <!--  ----------  -->
      <!--  輸入手機號碼  -->
      <!--  ----------  -->
      <div :class="{ StepHidden: step1 }" class="bg flex h-screen">
        <!--圖片-->
        <div class="vertical absolute left-32 hidden w-1/2 lg:block">
          <Vue3Lottie :animationData="LoginAnimation" class="h-full w-full" />
        </div>
        <!--登入表格-->
        <div class="vertical absolute right-0 w-screen rounded-none bg-white p-7 shadow-none lg:right-32 lg:w-96 lg:rounded-2xl lg:p-10 lg:shadow-2xl">
          <h3 class="mb-4 text-center text-xl text-2xl font-semibold sm:mb-6">註冊會員</h3>
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
                <n-button quaternary type="info" @click="$router.push('/login')">登入</n-button>
              </div>
            </div>
          </n-form>
        </div>
      </div>
      <!--  ----------  -->
      <!--  開始註冊流程  -->
      <!--  ----------  -->
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
              <div class="n-step-description h-1/2 w-screen overflow-scroll rounded-lg bg-white py-5 px-10 lg:w-1/2">
                <!--表單內容-->
                <div class="text-center">
                  <p class="text-xl font-black">請填寫資料</p>
                  <n-form ref="stepRef" label-placement="left" label-width="80" label-align="left" require-mark-placement="right" :model="form" :rules="rules">
                    <p class="pt-5 text-left text-base font-bold">基本資訊</p>
                    <n-form-item label="姓名" path="addAccount.name">
                      <n-input v-model:value="form.name" type="textarea" :autosize="{ maxRows: 1 }" placeholder="請輸入內容" clearable />
                    </n-form-item>
                    <n-form-item label="電子信箱" path="addAccount.mail">
                      <!--<n-input v-model:value="form.addAccount.mail" type="text" placeholder="請輸入內容" clearable />-->
                      <n-auto-complete v-model:value="form.mail" :input-props="{ autocomplete: 'disabled' }" :options="options">
                        <template #default="{ handleInput, handleBlur, handleFocus, value: slotValue }">
                          <n-input type="textarea" :autosize="{ maxRows: 1 }" :value="slotValue" placeholder="請輸入帳號" @input="handleInput" @focus="handleFocus" @blur="handleBlur" clearable />
                        </template>
                      </n-auto-complete>
                    </n-form-item>
                    <n-form-item label="密碼" path="addAccount.password" class="pwd">
                      <!--<n-input v-model:value="form.password" type="password" show-password-on="click" placeholder="請輸入內容" clearable />-->
                      <n-input v-model:value="form.password" type="password" show-password-on="click" placeholder="請輸入內容" :class="{'green' : passValid === 3, 'yellow' : passValid === 2, 'orange' : passValid === 1}" clearable />

                      <div class="flex flex-wrap">
                        <div class="flex">
                          <div class="contents">
                            <div class="bullet-pass-hor" :class="{'active' : passValid > 0}"><span :class="{'green' : passValid === 3, 'yellow' : passValid === 2, 'orange' : passValid === 1}"></span></div>
                            <div class="bullet-pass-hor" :class="{'active' : passValid > 1}"><span :class="{'green' : passValid === 3, 'yellow' : passValid === 2, 'orange' : passValid === 1}"></span></div>
                            <div class="bullet-pass-hor" :class="{'active' : passValid > 2}"><span :class="{'green' : passValid === 3, 'yellow' : passValid === 2, 'orange' : passValid === 1}"></span></div>
                            {{ passValid.length }}
                          </div>
                        </div>
                        <div class="grid">
                          <span class="d-block bullet-pass-rounded"><span class="fa fa-circle" :class="{'active': minLength, 'orange': !minLength && form.password.length > 0}" aria-hidden="true"></span> At least 6 characters</span>
                          <span class="d-block bullet-pass-rounded"><span class="fa fa-circle" :class="{'active': hasNumber, 'orange': !hasNumber && form.password.length > 0}" aria-hidden="true"></span> At least 1 number</span>
                          <span class="d-block bullet-pass-rounded"><span class="fa fa-circle" :class="{'active': hasUpperCase, 'orange': !hasUpperCase && form.password.length > 0}" aria-hidden="true"></span> At least 1 uppercase letter</span>
                        </div>
                      </div>
                    </n-form-item>

                    <n-form-item label="密碼" path="addAccount.confirmPwd">
                      <n-input v-model:value="form.confirmPwd" type="password" show-password-on="click" placeholder="請輸入內容" clearable />
                    </n-form-item>
                    <p class="pt-5 text-left text-base font-bold">企業資訊</p>
                    <n-form-item label="公司名稱" path="addAccount.companyName">
                      <n-input v-model:value="form.companyName" type="textarea" :autosize="{ maxRows: 1 }" placeholder="請輸入內容" clearable />
                    </n-form-item>
                    <n-form-item label="統一編號" path="addAccount.taxNumber">
                      <n-input v-model:value="form.companyTaxNumber" type="textarea" :autosize="{ maxRows: 1 }" placeholder="請輸入內容" clearable />
                    </n-form-item>
                    <n-form-item label="公司地址" path="addAccount.address">
                      <n-input v-model:value="form.companyAddress" type="textarea" :autosize="{ maxRows: 1 }" placeholder="請輸入內容" clearable />
                    </n-form-item>
                    <n-form-item label="公司電話" path="addAccount.phone">
                      <n-input v-model:value="form.companyPhone" type="textarea" :autosize="{ maxRows: 1 }" placeholder="請輸入內容" clearable />
                    </n-form-item>
                    <n-form-item label="公司傳真" path="addAccount.fax">
                      <n-input v-model:value="form.companyFax" type="textarea" :autosize="{ maxRows: 1 }" placeholder="請輸入內容" clearable />
                    </n-form-item>
                    <n-form-item label="公司官網" path="addAccount.website">
                      <n-input v-model:value="form.companyWebsite" type="textarea" :autosize="{ maxRows: 1 }" placeholder="請輸入內容" clearable />
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
                  <div class="relative mx-auto my-10 h-56 w-56 rounded-full" style="background: #ecf5ff">
                    <!--<Vue3Lottie :animationData="DoneAnimation" class="h-full w-full" />-->
                    <img :src="doneImage" alt="Done" class="absolute" />
                  </div>
                </div>
                <!--按鈕-->
                <div class="w-full">
                  <n-button v-if="current === 3" type="info" size="large" @click="userRegistration" class="w-full"> 完成 </n-button>
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
import { defineComponent } from "vue";
import VueCountdown from "@chenfengyuan/vue-countdown";
import doneImage from "@/assets/done.svg";
import { firebaseAuth } from "@/configured/firebaseConfig.js";

const LoginAnimation = require("@/js/Lottie/login.json");
const DoneAnimation = require("@/js/Lottie/particle.json");
export default defineComponent({
  components: {
    LoginAnimation,
    DoneAnimation,
    VueCountdown,
  },
  name: "",
  data() {
    const validatePass = (rule, value, callback) => {
      // var reg1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/; //英文加數字，6~15個字元
      var reg1 = /^[0-9A-Za-z]{6,15}$/; //不限英文或數字，6~15個字元
      if (value === "") {
        callback(new Error("請輸入密碼"));
      } else if (!reg1.test(value)) {
        callback(new Error("密碼必須是6～15個字元"));
      } else {
        callback();
      }
    };
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
        code: "1234",
        name: "管理員",
        mail: "c7kimo@hotmail.com",
        password: "123456",
        confirmPwd: "123456",
        companyName: "測試",
        companyTaxNumber: "測試",
        companyAddress: "測試",
        companyPhone: "測試",
        companyFax: "測試",
        companyWebsite: "",
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
          trigger: ["input"],
          validator: validatePass,
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
        companyTaxNumber: {
          required: true,
          message: "請輸入統一編號",
          trigger: ["input"],
        },
        companyAddress: {
          required: true,
          message: "請輸入地址",
          trigger: ["input"],
        },
        companyPhone: {
          required: true,
          message: "請輸入電話號碼",
          trigger: ["input"],
        },
        companyFax: {
          required: true,
          message: "請輸入傳真號碼",
          trigger: ["input"],
        },
      },

      // 倒計時
      counting: false,

      doneImage: doneImage,
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


    //註冊
    userRegistration() {
      firebaseAuth
        .createUserWithEmailAndPassword(this.form.mail, this.form.password)
        .then((res) => {
          res.user
            .updateProfile({
              displayName: this.form.name,
            })
            .then(() => {
              this.$router.push("/login");
            });
        })
        .catch((error) => {
          console.log("錯誤" ,error)
        });
    },
  },
  computed: {
    options() {
      if (!this.form.mail) return [];
      if (this.form.mail.indexOf("@") > -1) return [];
      return [
        this.form.mail + "@yahoo.com",
        this.form.mail + "@yahoo.com.tw",
        this.form.mail + "@gmail.com",
        this.form.mail + "@msn.com",
        this.form.mail + "@hotmail.com",
      ];
    },

    //密碼驗證
    hasNumber() {
      return /\d/.test(this.form.password)
    },
    hasLowerCase() {
      return /[a-z]/.test(this.form.password)
    },
    hasUpperCase() {
      return /[A-Z]/.test(this.form.password)
    },
    minLength() {
      return this.form.password.length > 5
    },
    passValid() {
      let value = 0
      if (this.hasNumber) value += 1
      // if (this.hasLowerCase) value += 1
      if (this.hasUpperCase) value += 1
      if (this.minLength) value += 1
      return value
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
    background-color: #e9ebee;
  }
  .n-steps .n-step:not(:last-child) {
    margin-right: 50px;
  }
  .stepBg {
    background: #e9ebee;
  }
}

.pwd .n-form-item-blank {
  display: block;
}

.form-newaccount__bullet-steps {
  margin-bottom: 13px;
  margin-top: 8px;
}

.bullet-pass-rounded {
  color: #828282;
  display: inline-block;
  font-weight: 500;
  line-height: 20px;
}

.bullet-pass-rounded .fa.active {
  color: #1ed699;
}

.bullet-pass-hor {
  height: 8px;
  width: 100%;
  transition: all ease 400ms;

  span {
    background-color: #ededed;
    display: block;
    height: 100%;
    width: 100%;

    &.orange {
      background-color: #f26623;
    }
    &.yellow {
      background-color: #f1b821;
    }
    &.green {
      background-color: #1ed699;
    }
  }
}

.bullet-pass-hor:nth-child(2) {
  margin: 0 8px;
}

.bullet-pass-hor {
  &:nth-child(2),
  &:nth-child(3) {
    .orange {
      background-color: #f26623;
    }
  }
  &:nth-child(3) {
    .yellow {
      background-color: #f1b821;
    }
  }
}
</style>
