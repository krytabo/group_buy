<template>
  <div class="bg relative h-screen">
    <!--圖片-->
    <div class="vertical absolute left-32 hidden w-1/2 lg:block">
      <lottie :options="LoginAnimation" class="h-5/6 w-5/6" />
    </div>
    <!--登入表格-->
    <div class="vertical absolute right-0 w-screen rounded-none bg-white p-7 shadow-none lg:right-32 lg:w-96 lg:rounded-2xl lg:p-10 lg:shadow-2xl">
      <h3 class="mb-4 text-center text-xl text-2xl font-semibold sm:mb-6">特約商登入</h3>

      <n-form ref="formRef" label-placement="top" :model="form">
        <n-form-item label="帳號" path="user.name">
          <n-auto-complete v-model:value="form.name" :input-props="{ autocomplete: 'disabled' }" :options="options">
            <template #default="{ handleInput, handleBlur, handleFocus, value: slotValue }">
              <n-input type="text" :value="slotValue" placeholder="請輸入帳號" @input="handleInput" @focus="handleFocus" @blur="handleBlur" clearable />
            </template>
          </n-auto-complete>
        </n-form-item>
        <n-form-item label="密碼" path="user.age">
          <n-input v-model:value="form.password" type="password" show-password-on="click" placeholder="請輸入密碼" clearable />
        </n-form-item>
        <div class="flex w-full">
          <n-checkbox v-model:checked="form.isRead">記住我</n-checkbox>
          <div class="flex-1 text-right">
            <n-button quaternary type="info">忘記密碼？</n-button>
          </div>
        </div>

        <n-button type="info" class="w-full" size="large" strong @click="$router.push('Backstage')">登入</n-button>

        <div class="mt-5 flex w-full items-center justify-center">
          <div>還沒有帳號？</div>
          <div class="text-left">
            <n-button quaternary type="info" @click="$router.push('/vendor_SignUp')">立即註冊</n-button>
          </div>
        </div>
      </n-form>
    </div>
    <footer class="absolute bottom-5 w-screen text-center">Copyright © 2022 EZTIT Inc</footer>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Lottie from "vue-lottie";
import LoginAnimation from "@/js/Lottie/login.json";

export default defineComponent({
  components: {
    Lottie,
  },
  name: "",
  data() {
    return {
      LoginAnimation: { animationData: LoginAnimation, loop: true },
      form: [
        {
          name: "",
          password: "",
          isRead: false,
        },
      ],
    };
  },
  mounted() {},
  methods: {},
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
    background-color: #e9ebee;
  }
}
</style>
