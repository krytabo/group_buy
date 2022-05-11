<template>
  <!--==================-->
  <!--      Header      -->
  <!--==================-->
  <nav class="navbar_header" :style="style">
    <div class="lg:w-0 lg:flex-1">
      <img class="h-12 w-auto" :class="{ logo: color }" :src="LogoWhite" alt="Workflow" />
    </div>
    <div class="block sm:hidden">
      <button @click="toggle" class="text-teal-lighter border-teal-light flex items-center px-3 py-2 text-white" :class="{ navbar: color }">
        <i class="ri-menu-line"></i>
      </button>
    </div>
    <div class="hidden w-full flex-grow flex-row-reverse sm:flex sm:w-auto sm:items-center">
      <template v-for="item in HeaderItem">
        <router-link :to="item.src">
          <p class="header-link-item" :class="{ color: color }">{{ item.name }}</p>
        </router-link>
      </template>
      <!--<router-link to="/manage_login"><p class="header-link-item" :class="{ color: color }">管理平台登入</p></router-link>
      <router-link to="/vendor_login"><p class="header-link-item" :class="{ color: color }">特約商登入</p></router-link>
      <router-link to="/login"><p class="header-link-item" :class="{ color: color }">揪團商店</p></router-link>-->
    </div>
    <div class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden" :class="open ? 'block' : 'hidden'">
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
  </nav>
</template>

<script>
import { h } from "vue";
import { RouterLink } from "vue-router";
import { dateZhTW, zhTW } from "naive-ui";
import LogoWhite from "@/assets/LOGO/EZTIT_white.svg";
import LogoLong from "@/assets/LOGO/EZTIT_long.png";

export default {
  name: "",
  data() {
    return {
      //LOGO
      LogoWhite: LogoWhite,
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
  mounted() {
    // Navbar向下捲動，改變顏色
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // 手機模式MENU按鈕
    toggle() {
      this.open = !this.open;
      console.log(this.open);
    },

    // Navbar向下捲動，改變顏色
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // let offsetTop = document.querySelector(".header").offsetTop;
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
    const menuOptions = [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "Login",
              },
            },
            { default: () => "揪團商店" }
          ),
        key: "login",
      },
    ];
    return {
      menuOptions,
      zhTW,
      dateZhTW,
    };
  },
};
</script>

<style lang="postcss">
.header-link-item {
  @apply focus:outline-none mr-4 text-base font-medium leading-6 text-white hover:text-gray-900 focus:text-gray-900;
}
.navbar_header {
  @apply fixed z-50 flex w-screen flex-wrap items-center justify-between p-6;
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
  color: #f8f9fa;
  background: #333e56;
  border-radius: 10px;
}

.navbar:hover {
  background: #607196;
}
</style>
