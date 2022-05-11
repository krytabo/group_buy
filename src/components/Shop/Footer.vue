<template>
  <!--==================-->
  <!--       Footer     -->
  <!--==================-->
  <footer class="relative py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="mr-0 w-full lg:mr-5 lg:mb-5 lg:w-4/12">
          <img src="../../assets/LOGO/EZTIT_long.png" alt="" />
          <div class="mt-5 flex space-x-4 text-center sm:justify-center">
            <button class="app_button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current" viewBox="0 0 512 512">
                <path
                  d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"
                ></path>
              </svg>
              <span class="ml-2 flex flex-col items-start leading-none">
                <span class="mb-1 text-xs">GET IT ON</span>
                <span class="text-sm font-medium">Google Play</span>
              </span>
            </button>
            <button class="app_button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current" viewBox="0 0 305 305">
                <path
                  d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"
                ></path>
                <path
                  d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"
                ></path>
              </svg>
              <span class="ml-2 flex flex-col items-start leading-none">
                <span class="mb-1 text-xs">Download on the</span>
                <span class="text-sm font-medium">App Store</span>
              </span>
            </button>
          </div>
        </div>
        <div class="section_flexType space_between mt-5 w-full text-left lg:mt-0 lg:flex-1">
          <div class="mt-10 w-full px-4 sm:mt-0 lg:w-1/2">
            <div class="text-lg">功能導覽</div>
            <ul class="mt-2 pl-0">
              <li><a class="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900" href="#">揪團商店</a></li>
              <li><a class="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900" href="#">特約商登入</a></li>
              <li><a class="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900" href="#">管理平台登入</a></li>
            </ul>
          </div>
          <div class="mt-10 w-full px-4 sm:mt-0 lg:w-1/2">
            <div class="text-lg">聯絡我們</div>
            <ul class="mt-2 pl-0">
              <li><a class="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900" href="#">聯絡電話：04-2326-7189</a></li>
              <li><a class="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900" href="#">地址：台中市西區臺灣大道二段239號7樓-4</a></li>
              <li><a class="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900" href="#">電子信箱：eztit@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-400" />
      <div class="flex flex-wrap items-center justify-center md:justify-between">
        <div class="mx-auto w-full px-4 text-center md:w-4/12">
          <div class="py-1 text-sm font-semibold text-gray-600">Copyright © 2022 EZTIT Inc</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
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
    };
  },
  mounted() {},
  methods: {},
  beforeDestroy() {},
  setup() {
    return {
      zhTW,
      dateZhTW,
    };
  },
};
</script>

<style lang="postcss">
.app_button {
  @apply focus:outline-none inline-flex items-center rounded-lg bg-black py-3 px-5 text-white ring-2 ring-white ring-opacity-50 hover:bg-gray-200 hover:text-black;
}
.section_flexType {
  @apply block lg:flex;
}

.space_between {
  @apply space-x-0 space-y-4 lg:space-x-4 lg:space-y-0;
}
</style>
<style lang="scss"></style>
