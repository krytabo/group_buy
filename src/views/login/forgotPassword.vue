<template>
  <div class="flex min-h-screen flex-col">
    <div class="bg flex h-screen items-center justify-center">
      <!--輸入信箱-->
      <div :class="{ StepHidden: step1 }" class="vertical w-screen rounded-none bg-white p-7 shadow-none lg:right-32 lg:w-96 lg:rounded-2xl lg:p-10 lg:shadow-2xl">
        <h3 class="mb-4 text-center text-xl text-2xl font-semibold sm:mb-6">忘記密碼</h3>
        <n-form ref="formRef" label-placement="top" :model="form" :rules="rules">
          <n-form-item label="電子信箱" path="mail">
            <n-auto-complete v-model:value="form.mail" :input-props="{ autocomplete: 'disabled' }" :options="options">
              <template #default="{ handleInput, handleBlur, handleFocus, value: slotValue }">
                <n-input type="textarea" :autosize="{ maxRows: 1 }" :value="slotValue" placeholder="請輸入帳號" @input="handleInput" @focus="handleFocus" @blur="handleBlur" clearable />
              </template>
            </n-auto-complete>
          </n-form-item>
          <n-button type="info" class="w-full" size="large" strong @click="forgetPassword">送出</n-button>

          <n-divider>或</n-divider>

          <div class="mt-5 flex w-full items-center justify-center">
            <div>想起密碼了嗎？</div>
            <div class="text-left">
              <n-button quaternary type="info" @click="$router.push('/login')">登入</n-button>
            </div>
          </div>
        </n-form>
      </div>

      <!--送出重設密碼-->
      <div :class="{ StepHidden: step2 }" class="vertical w-screen rounded-none bg-white p-7 shadow-none lg:right-32 lg:w-96 lg:rounded-2xl lg:p-10 lg:shadow-2xl">
        <n-result status="success" size="large">
          <template #default>
            <h3 class="mb-4 text-center text-xl text-2xl font-semibold sm:mb-6">申請成功</h3>
            <p>幾分後您將收到重置密碼的電子郵件</p>
          </template>
          <template #footer>
            <n-button type="info" @click="$router.push('/login')" class="w-full" size="large" strong>返回登入</n-button>
          </template>
        </n-result>
      </div>
    </div>
  </div>
</template>

<script>

  import VueCountdown from "@chenfengyuan/vue-countdown";
  import { firebaseAuth } from "@/configured/firebaseConfig.js";

  const LoginAnimation = require("@/js/Lottie/login.json");
  export default {
    components: {
      LoginAnimation,
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

      return {
        step1: false,
        step2: true,
        form:{
          mail:""
        },
        rules: {
          mail: {
            required: true,
            message: "請輸入電子信箱",
            trigger: ["input"],
            validator: (rule, value) => {
              return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            },
          },
        }
      };
    },
    methods:{
      forgetPassword() {
        firebaseAuth
          .sendPasswordResetEmail(this.form.mail)
          .then(() => {
            this.step1 = !this.step1;
            this.step2 = !this.step2;
          }).catch((error) => {
          console.log("錯誤",error)
        })
      }
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
    },
    setup() {
      return {
        LoginAnimation,
      };
    },
  };
</script>

<style lang="scss">
  .StepHidden {
    display: none !important;
  }
  .bg {
    background-color: #e9ebee;
  }
</style>