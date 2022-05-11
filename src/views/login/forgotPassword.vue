<template>
  <div class="flex min-h-screen flex-col">
    <div class="bg flex h-screen items-center justify-center">
      <!--登入表格-->
      <div class="vertical  w-screen rounded-none bg-white p-7 shadow-none lg:right-32 lg:w-96 lg:rounded-2xl lg:p-10 lg:shadow-2xl">
        <h3 class="mb-4 text-center text-xl text-2xl font-semibold sm:mb-6">忘記密碼</h3>
        <n-form ref="formRef" label-placement="top" :model="form" :rules="rules">
          <n-form-item label="電子信箱" path="phone">
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
      return {
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
          .sendPasswordResetEmail(this.form.email)
          .then(() => {
            alert('請查看您的信箱以重設密碼')
            this.user = {
              email: ''
            }
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

</style>