<template>
  <!--==================-->
  <!--      Header      -->
  <!--==================-->
  <nav class="navbar_header2" style="height: 60px" :style="style">
    <!--LOGO-->
    <div class="flex items-center justify-between">
      <a href="#" class="text-xl font-bold text-indigo-600">
        <img width="136" :class="{ logo: color }" :src="LogoBlack" alt="logo" />
      </a>
    </div>
    <!--右邊選單-->
    <div class="mt-3 items-center space-x-2 md:mt-0 ml-auto md:flex" id="navbar-collapse">
      <!--大螢幕選單-->
      <div class="hidden w-full flex-grow lg:flex sm:w-auto lg:items-center lg:justify-end">
        <!--用戶-->
        <n-popover trigger="click" style="width: 200px" class="p-0">
          <template #trigger>
            <div class="header-btn">
              <UserCircleIcon class="h-5 w-5"></UserCircleIcon>
            </div>
          </template>
          <!--選單內容-->
          <div class="p-3">
            <p class="mb-0 p-3">會員名稱：<span class="text-green-500">{{user.displayName}}</span></p>
            <div class="news-list flex cursor-pointer space-x-4 rounded p-3 hover:bg-gray-100">
              會員資料
            </div>
            <div class="news-list flex cursor-pointer space-x-4 rounded p-3 hover:bg-gray-100" @click="logOut">
              會員登出
            </div>
          </div>
        </n-popover>

        <!--購物車-->
        <div class="header-btn">
          <i class="ri-shopping-cart-2-line text-lg"></i>
        </div>

        <!--通知-->
        <n-badge :value="NewsBadge" :max="15">
          <n-popover trigger="click" style="width: 380px" class="p-0">
            <template #trigger>
              <div class="header-btn">
                <i class="ri-notification-3-line text-lg"></i>
              </div>
            </template>
            <!--選單內容-->
            <div class="flex border-b p-3">
              <div class="flex-1">最近收到的訊息</div>
              <div class="cursor-pointer text-blue-500">標記為已讀</div>
            </div>
            <div class="p-3">
              <div class="news-list flex cursor-pointer space-x-4 rounded p-3 hover:bg-gray-100" v-for="(item, index) in NewsList" v-bind:key="index" @click="NewsRead">
                <!--<div style="width: 100px;height: 100px" class="object-fill rounded bg-gray-100"></div>-->
                <div class="w-20 flex-1">
                  <div class="mb-2 flex">
                    <p class="mb-0 flex-1 truncate text-base">{{ item.title }}</p>
                    <p class="my-0 flex items-center text-sm text-gray-400"><i class="ri-time-line"></i> {{ item.time }}</p>
                  </div>
                  <p class="news-text my-0 text-gray-600">{{ item.content }}</p>
                </div>
              </div>
            </div>
            <div class="cursor-pointer border-t p-2 text-center text-blue-500">顯示更多</div>
          </n-popover>
        </n-badge>

        <n-button quaternary  @click="$router.push('/backstage')" class="font-bold text-base">商店後台</n-button>

        <!--<template v-for="item in HeaderItem">
          <router-link :to="item.src">
            <p class="header-link-item" :class="{ color: color }">{{ item.name }}</p>
          </router-link>
        </template>-->
      </div>
      <!--小螢幕選單-->
      <div class="block lg:hidden">
        <button @click="toggle" class="text-teal-lighter border-teal-light flex items-center px-3 py-2 text-black" :class="{ navbar: color }">
          <i class="ri-menu-line"></i>
        </button>
      </div>
      <div class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden" :class="open ? 'block' : 'hidden'">
        <div class="rounded-lg shadow-lg">
          <div class="shadow-xs divide-y-2 divide-gray-50 rounded-lg bg-white">
            <div class="space-y-6 px-5 pt-5 pb-6">
              <div class="flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src="../../assets/LOGO/EZTIT.png" alt="Workflow" />
                </div>
                <div class="-mr-2">
                  <button
                    @click="toggle"
                    type="button"
                    class="focus:outline-none inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500"
                  >
                    <i class="ri-close-line"></i>
                  </button>
                </div>
              </div>
              <nav class="space-y-6">
                <a href="#" class="flex items-center space-x-4">
                  <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <!--<div class="text-base leading-6 font-medium text-gray-900">
                    {{ item.item }}
                  </div>-->

                  <template v-for="item in HeaderItem">
                    <router-link :to="item.src">
                      <div class="text-base font-medium leading-6 text-gray-900">{{ item.name }}</div>
                    </router-link>
                  </template>

                  <router-link to="/login"><div class="text-base font-medium leading-6 text-gray-900">揪團商店</div></router-link>
                  <router-link to="/vendor_login"><div class="text-base font-medium leading-6 text-gray-900">特約商登入</div></router-link>
                  <router-link to="/manage_login"><div class="text-base font-medium leading-6 text-gray-900">管理平台登入</div></router-link>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { h } from "vue";
import { RouterLink } from "vue-router";
import { dateZhTW, zhTW } from "naive-ui";
import LogoWhite from "@/assets/LOGO/EZTIT_white.svg";
import LogoBlack from "@/assets/LOGO/EZTIT.png";
import LogoLong from "@/assets/LOGO/EZTIT_long.png";
import { CogIcon, UserCircleIcon } from "@heroicons/vue/outline";
import { firebaseAuth } from "@/configured/firebaseConfig";

export default {
  components:{
    CogIcon, UserCircleIcon
  },
  name: "",
  data() {
    return {
      user: null,
      NewsBadge:"0",
      //LOGO
      LogoWhite: LogoWhite,
      LogoBlack:LogoBlack,
      LogoLong: LogoLong,

      // Navbar按鈕內容
      HeaderItem: [
        {
          name: "揪團商店",
          src: "/login",
        },
        {
          name: "特約商登入",
          src: "/vendor_login",
        },
        {
          name: "管理平台登入",
          src: "/manage_login",
        },
      ],

      // 手機模式MENU按鈕
      open: false,

      // Navbar向下捲動，改變顏色
      color: false,
      style: {
        backgroundColor: "",
      },

      // 下拉選單
      isOptionsExpanded: false,
      selectedOption: "1x",
      options: ["1x", "2x", "3x", "4x or more"],
    };
  },
  created() {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  mounted() {
    // Navbar向下捲動，改變顏色
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // 手機模式MENU按鈕
    toggle() {
      this.open = !this.open;
    },

    // Navbar向下捲動，改變顏色
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      //背景透明度
      if (scrollTop) {
        this.style.backgroundColor = `rgba(249, 250, 251,${scrollTop / (scrollTop + 80)})`;
        this.color = true;
      } else if (scrollTop === 0) {
        this.style.backgroundColor = "transparent";
        this.color = false;
      }
    },

    // 下拉選單
    setOption(option) {
      this.selectedOption = option;
      this.isOptionsExpanded = false;
    },
  },
  beforeDestroy() {
    // Navbar向下捲動，改變顏色
    window.removeEventListener("scroll", this.handleScroll);
  },
  setup() {
    return {
      zhTW,
      dateZhTW,
    };
  },
};
</script>

<style lang="postcss">
.header-link-item {
  @apply focus:outline-none mr-4 text-base font-medium leading-6 text-black hover:text-gray-900 focus:text-gray-900;
}
.navbar_header2 {
  @apply flex items-center bg-gray-50 py-2 px-6 md:py-4 z-50 fixed w-screen;
}
</style>
<style lang="scss">
.logo {
  content: url("~@/assets/LOGO/EZTIT.png");
}

.color {
  color: #000;
}

.navbar {
  color: #f8f9fa !important;
  background: #333e56;
  border-radius: 10px;
}

.navbar:hover {
  background: #607196;
}
</style>
