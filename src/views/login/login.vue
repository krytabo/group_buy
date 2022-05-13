<template>
  <div class="bg relative h-screen">
    <!--圖片-->
    <div class="vertical absolute left-32 hidden w-1/2 lg:block">
      <lottie :options="LoginAnimation" class="h-5/6 w-5/6" />
    </div>
    <!--登入表格-->
    <div class="vertical absolute right-0 w-screen rounded-none bg-white p-7 shadow-none lg:right-32 lg:w-96 lg:rounded-2xl lg:p-10 lg:shadow-2xl">
      <h3 class="mb-4 text-center text-xl text-2xl font-semibold sm:mb-6">登入賣家中心</h3>

      <n-form ref="formRef" label-placement="top" :model="form">
        <n-form-item label="帳號" path="name">
          <n-input v-model:value="form.name" placeholder="請輸入帳號" />
        </n-form-item>
        <n-form-item label="密碼" path="password">
          <n-input v-model:value="form.password" type="password" show-password-on="click" placeholder="請輸入密碼2" clearable />
        </n-form-item>
        <div class="flex w-full">
          <n-checkbox v-model:checked="form.remember" @click="remember">記住我</n-checkbox>
          <div class="flex-1 text-right">
            <n-button quaternary type="info" @click="$router.push('/forgotPwd')">忘記密碼？</n-button>
          </div>
        </div>

        <n-button type="info" class="w-full" size="large" strong @click="userLogin">登入</n-button>

        <div class="mt-5 flex w-full items-center justify-center">
          <div>還沒有帳號？</div>
          <div class="text-left">
            <n-button quaternary type="info" @click="$router.push('/signup')">立即註冊</n-button>
          </div>
        </div>

        <n-divider>或</n-divider>

        <n-button class="w-full" size="large" strong @click="$router.push('vendor_login')">使用特約商帳號登入</n-button>
      </n-form>
    </div>

    <footer class="absolute bottom-5 w-screen text-center">Copyright © 2022 EZTIT Inc</footer>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Lottie from "vue-lottie";
import LoginAnimation from "@/js/Lottie/login.json";
import { firebaseAuth } from "@/configured/firebaseConfig.js";
import firebase from "firebase/compat";

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
          remember: false,
        },
      ],
    };
  },
  mounted() {},
  methods: {
   /* remember(){
      firebaseAuth
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
          // Existing and future Auth states are now persisted in the current
          // session only. Closing the window would clear any existing state even
          // if a user forgets to sign out.
          // ...
          // New sign-in will be persisted with session persistence.
          return firebase.auth().signInWithEmailAndPassword(this.form.name, this.form.password);
        })
        .catch((error) => {
          // Handle Errors here.
        });
    },*/
    userLogin() {
      firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          return firebaseAuth.signInWithEmailAndPassword(this.form.name, this.form.password)
            .then(() => {
            /*if( this.form.remember) {
              let password = Base64.encode(this.form.password);
              localStorage.setItem("name",this.form.name);
              localStorage.setItem("password",password);
            }
            else {
              localStorage.removeItem("name");
              localStorage.removeItem("password");
            }*/
              this.$router.push("/backstage");
            })
            .catch(() => {
              console.log('錯誤')
              this.$swal("Oops...", "帳號密碼錯誤，請重新輸入", "error");
            });
        })
        .catch(() => {});

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
