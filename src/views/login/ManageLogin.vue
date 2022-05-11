<template>
  <div class="bg flex h-screen">
    <!--圖片-->
    <div class="hidden w-2/3 lg:block">
      <div class="vertical absolute left-32 w-1/2">
        <lottie :options="LoginAnimation" class="h-full w-full" />
      </div>
    </div>
    <!--登入表格-->
    <div class="w-screen items-center bg-white p-7 lg:w-1/3 lg:p-10">
      <div class="vertical relative w-full">
        <h3 class="mb-4 text-center text-xl text-2xl font-semibold sm:mb-6">登入管理平台</h3>
        <n-form ref="formRef" label-placement="top" :model="form" :rules="rules">
          <n-form-item label="帳號" path="name">
            <!--<n-input v-model:value="form.name" placeholder="請輸入帳號" />-->
            <n-auto-complete v-model:value="form.name" :input-props="{ autocomplete: 'disabled' }" :options="options">
              <template #default="{ handleInput, handleBlur, handleFocus, value: slotValue }">
                <n-input type="text" :value="slotValue" placeholder="請輸入帳號" @input="handleInput" @focus="handleFocus" @blur="handleBlur" clearable />
              </template>
            </n-auto-complete>
          </n-form-item>

          <n-form-item label="密碼" path="password">
            <n-input v-model:value="form.password" type="password" show-password-on="click" placeholder="請輸入密碼" clearable />
          </n-form-item>

          <div class="flex w-full">
            <n-checkbox v-model:checked="form.isRead">記住我</n-checkbox>
            <div class="flex-1 text-right">
              <n-button quaternary type="info">忘記密碼？</n-button>
            </div>
          </div>
          <n-button type="info" class="w-full" size="large" strong @click="submitForm('formRef')">登入</n-button>
          <div class="mt-5 flex w-full items-center justify-center">
            <div>還沒有帳號？</div>
            <div class="text-left">
              <n-button quaternary type="info" @click="$router.push('/manage_SignUp')">立即註冊</n-button>
            </div>
          </div>
        </n-form>
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
      // Lottie
      LoginAnimation: { animationData: LoginAnimation, loop: true },

      // 表單
      form: [
        {
          name: "",
          password: "",
          isRead: false,
        },
      ],

      // 驗證
      formRef: "",
      rules: {
        name: {
          required: true,
          message: "請輸入帳號",
          trigger: ["input"],
        },
        password: {
          required: true,
          message: "請輸入密碼",
          trigger: ["input"],
          validator: (rule, value) => {
            return /^[0-9A-Za-z]{6,15}$/.test(value);
          },
        },
      },
    };
  },
  mounted() {},
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
          this.$router.push("/backstage");
          return false;
        }
      });
    },
  },
  computed: {
    options() {
      if (!this.form.name) return [];
      if (this.form.name.indexOf("@") > -1) return [];
      return [this.form.name + "@yahoo.com", this.form.name + "@yahoo.com.tw", this.form.name + "@gmail.com", this.form.name + "@msn.com", this.form.name + "@hotmail.com"];
    },
  },
  setup() {
    return {
      value: ref(null),
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
