<template>
  <!--==================-->
  <!--      Header      -->
  <!--==================-->
  <nav class="navbar_header" :style="style">
    <div class="lg:w-0 lg:flex-1">
      <img class="h-12 w-auto" :class="{ logo: color }" src="../assets/LOGO/EZTIT_white.svg" alt="Workflow" />
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
                <img class="h-8 w-auto" src="../assets/LOGO/EZTIT.png" alt="Workflow" />
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

  <!--==================-->
  <!--      Content     -->
  <!--==================-->
  <div class="section_wrapper">
    <!--Banner-->
    <section class="section_banner">
      <img src="../assets/Banner/hero_bg_2.jpeg" class="absolute inset-0 h-full w-full object-cover" alt="" />
      <div class="absolute top-0 h-screen w-screen bg-black bg-opacity-75">
        <svg class="absolute inset-x-0 text-white" style="bottom: -1px" viewBox="0 0 1160 163">
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          ></path>
        </svg>
        <div class="relative top-12 mx-auto overflow-hidden px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:top-20 lg:max-w-screen-xl lg:px-8 lg:py-20">
          <div class="flex flex-col items-center justify-between xl:flex-row">
            <div class="lg:w-2/5">
              <div class="pt-10 text-white">
                <div class="w-82 relative my-0 mx-auto text-center text-4xl sm:text-7xl">
                  <div class="relative inline-block">
                    <svg viewBox="0 0 52 24" fill="currentColor" class="text-blue-gray-100 absolute top-0 left-0 z-0 -mt-8 -ml-20 hidden w-32 sm:block lg:-ml-28 lg:-mt-10 lg:w-32">
                      <defs>
                        <pattern id="9ef1ff62-feb2-41fe-8163-772b4c79de7b" x="0" y="0" width=".135" height=".30">
                          <circle cx="1" cy="1" r=".7"></circle>
                        </pattern>
                      </defs>
                      <rect fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)" width="52" height="24"></rect>
                    </svg>
                    <span class="relative">揪團平台</span>
                  </div>
                </div>
                <p class="relative my-0 mx-auto w-72 pt-4 text-center text-2xl font-semibold uppercase tracking-widest sm:text-4xl">Groupon</p>
              </div>
              <div class="mt-10">
                <div class="flex space-x-4 text-center sm:justify-center">
                  <button class="app_button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-white" viewBox="0 0 512 512">
                      <path
                        d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"
                      ></path>
                    </svg>
                    <span class="ml-2 flex flex-col items-start leading-none">
                      <span class="mb-1 text-xs">GET IT ON</span>
                      <span class="text-base font-medium">Google Play</span>
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
                      <span class="text-base font-medium">App Store</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div class="mt-10 w-full lg:w-7/12 xl:mt-0 xl:px-8">
              <div class="relative">
                <svg viewBox="0 0 52 24" fill="currentColor" class="text-teal-accent-400 absolute bottom-0 right-0 z-0 -mb-8 -mr-20 hidden w-32 sm:block lg:-mr-16 lg:w-32">
                  <defs>
                    <pattern id="766323e1-e594-4ffd-a688-e7275079d540" x="0" y="0" width=".135" height=".30">
                      <circle cx="1" cy="1" r=".7"></circle>
                    </pattern>
                  </defs>
                  <rect fill="url(#766323e1-e594-4ffd-a688-e7275079d540)" width="52" height="24"></rect>
                </svg>
                <div class="flex h-full items-center">
                  <img src="../assets/Banner/hero.png" class="relative h-auto w-full self-center" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--豐富的服務應用-->
    <section class="section_content mt-28">
      <div class="section_space tracking-wider">
        <div class="mb-20 text-center">
          <h1 class="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">豐富的服務應用</h1>
          <div class="mt-6 flex justify-center">
            <div class="inline-flex h-1 w-16 rounded-full bg-indigo-500"></div>
          </div>
        </div>
        <div class="section_flexType mt-24 items-center justify-center space-y-4 space-x-0 sm:space-y-0 sm:space-x-4">
          <div class="container mx-auto">
            <div class="section_about">
              <img src="../assets/index/Deposit-01.png" alt="" class="section_about_img" />
              <p class="about-title">呼朋引伴一起省<br />價格更優惠</p>
            </div>
          </div>
          <div class="container mx-auto">
            <div class="section_about">
              <img src="../assets/index/ShopPhone-01.png" alt="" class="section_about_img" />
              <p class="about-title">APP行動化<br />優惠帶著走</p>
            </div>
          </div>
          <div class="container mx-auto">
            <div class="section_about">
              <img src="../assets/index/life-01.png" alt="" class="section_about_img" />
              <p class="about-title">食衣住行育樂<br />一次滿足</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--說明內容-->
    <section class="section_content text-gray-700">
      <div class="section_space container mx-auto flex flex-wrap px-5 py-24">
        <!--圖片-->
        <div class="carousel-height mb-10 w-full overflow-hidden rounded-2xl shadow-2xl lg:mb-0 lg:w-1/2">
          <n-carousel show-arrow autoplay class="h-96 w-full lg:h-full">
            <n-carousel-item v-for="item in photo">
              <img :src="item.src" class="carousel-img h-full w-full object-cover object-center" alt="" />
            </n-carousel-item>
          </n-carousel>
        </div>
        <!--介紹內容-->
        <div class="-mb-10 flex flex-col flex-wrap text-center lg:w-1/2 lg:py-6 lg:pl-12 lg:text-left">
          <div class="mb-10 flex flex-col items-center lg:items-start">
            <div class="mb-5 inline-flex h-32 w-32 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
              <div class="h-24 w-24">
                <lottie :options="DeleteAnimation" class="h-full w-full" />
              </div>
            </div>
            <div class="flex-grow">
              <h2 class="mb-3 text-lg font-medium text-gray-900">減少不必要生產及浪費</h2>
              <p class="text-base leading-relaxed">社區團購批量預售的方式，進行銷售已達到減少庫存損耗、減少包裝、降低成本</p>
            </div>
          </div>
          <div class="mb-10 flex flex-col items-center lg:items-start">
            <div class="mb-5 inline-flex h-32 w-32 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
              <lottie :options="PlantAnimation" class="h-full w-full" />
            </div>
            <div class="flex-grow">
              <h2 class="mb-3 text-lg font-medium text-gray-900">淨零、碳中和</h2>
              <p class="text-base leading-relaxed">以批次團購的方式：1.廠商端-減少生產損耗、包裝降低成本 2.運輸端-降低零售運輸次數，減少碳排放及運輸成本</p>
            </div>
          </div>
          <div class="mb-10 flex flex-col items-center lg:items-start">
            <div class="mb-5 inline-flex h-32 w-32 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
              <div class="h-24 w-24">
                <lottie :options="DepositAnimation" class="h-full w-full" />
              </div>
            </div>
            <div class="flex-grow">
              <h2 class="mb-3 text-lg font-medium text-gray-900">價格更優惠及透明化</h2>
              <p class="text-base leading-relaxed">
                通過團購更多地了解產品的合理價格區間，並參考團購組織者和其他購買者對產品客觀公正的評價，在購買和服務過程中占據主動地位，真正買到質量好、價格合理的產品，達到省時、省心、省力、省錢的目的。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--加入我們-->
    <section class="section_content relative">
      <img class="absolute inset-0 h-full w-full object-cover" src="../assets/index/bg.jpg" alt="" />
      <div class="absolute inset-0 bg-gray-100 bg-opacity-90"></div>
      <div class="section_space tracking-wider">
        <!--標題-->
        <div class="mb-15 text-center">
          <h1 class="mb-4 text-2xl font-medium uppercase text-gray-900 sm:text-3xl">Join GROUPON</h1>
          <p class="text-gray-500s mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">各行各業都適用</p>
          <div class="mt-6 flex justify-center">
            <div class="inline-flex h-1 w-16 rounded-full bg-indigo-500"></div>
          </div>
        </div>
        <!--內容-->
        <div class="section_flexType items-center justify-center space-x-0 space-y-20 lg:space-x-20 lg:space-y-0">
          <div class="container mx-auto">
            <div class="section_join_groupon">
              <img src="../assets/index/community_groupBuy.svg" alt="" class="section_about_img mx-auto my-0 w-28 sm:w-32" />
              <p class="about-title">社區揪團</p>
              <p>您是社區方<br />揪團事物交給GROUPON</p>
              <button type="button" class="button_primary">立即註冊企業帳號</button>
            </div>
          </div>
          <div class="container mx-auto">
            <div class="section_join_groupon">
              <img src="../assets/index/store.svg" alt="" class="section_about_img mx-auto my-0 w-28 sm:w-32" />
              <p class="about-title">建立新客源</p>
              <p>您是商品供應商<br />GROUPON特展新商機</p>
              <button type="button" class="button_primary">立即成為合作夥伴</button>
            </div>
          </div>
          <div class="container mx-auto">
            <div class="section_join_groupon">
              <img src="../assets/index/crop.svg" alt="" class="section_about_img mx-auto my-0 w-28 sm:w-32" />
              <p class="about-title">契作農業</p>
              <p>您是商品供應商<br />GROUPON特展新商機</p>
              <button type="button" class="button_primary">立即成為合作夥伴</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!--==================-->
  <!--       Footer     -->
  <!--==================-->
  <footer class="relative py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="mr-0 w-full lg:mr-5 lg:mb-5 lg:w-4/12">
          <img src="../assets/LOGO/EZTIT_long.png" alt="" />
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
import { zhTW, dateZhTW } from "naive-ui";
import { h } from "vue";
import { RouterLink } from "vue-router";
import Lottie from "vue-lottie";
import DeleteAnimation from "@/js/Lottie/delete.json";
import DepositAnimation from "@/js/Lottie/deposit.json";
import PlantAnimation from "@/js/Lottie/plant.json";

export default {
  components: {
    Lottie,
  },
  name: "",
  data() {
    return {
      //動畫載入
      DeleteAnimation: { animationData: DeleteAnimation, loop: true },
      DepositAnimation: { animationData: DepositAnimation, loop: true },
      PlantAnimation: { animationData: PlantAnimation, loop: true },

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

      // 照片輪播
      photo: [
        {
          id: 1,
          src: require("../assets/Carousel/phone.png"),
        },
        {
          id: 2,
          src: require("../assets/Carousel/web.png"),
        },
        {
          id: 3,
          src: require("../assets/Carousel/fp1.png"),
        },
      ],
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
      //设置背景颜色的透明读
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

.button_primary {
  @apply transition duration-300 ease-in-out;
}

.app_button {
  @apply focus:outline-none inline-flex items-center rounded-lg bg-black py-3 px-5 text-white ring-2 ring-white ring-opacity-50 hover:bg-gray-200 hover:text-black;
}

.navbar_header {
  @apply fixed z-50 flex w-screen flex-wrap items-center justify-between p-6;
}

.section_wrapper {
  @apply relative w-screen;
}

.section_banner {
  @apply relative h-screen pt-24;
}

.section_content {
  @apply pt-16 pb-24 sm:pt-20 sm:pb-28;
}

.section_space {
  @apply relative h-full px-6 sm:px-8;
}

.section_flexType {
  @apply block lg:flex;
}

.space_between {
  @apply space-x-0 space-y-4 lg:space-x-4 lg:space-y-0;
}

.section_about {
  @apply flex text-left sm:block sm:flex-1 sm:text-center;
}

.section_join_groupon {
  @apply grid-cols-1 space-y-4 p-0 text-center sm:grid-cols-3 sm:p-8;
}

/*.section_join_groupon_button {
            @apply px-5 py-3 bg-blue-500 text-white rounded-full cursor-pointer
        }

        .title {
            @apply my-0 mx-auto tracking-widest uppercase text-center font-semibold text-4xl pt-4 text-blue-500
        }*/

.section_about_img {
  @apply mx-2 w-24 sm:my-0 sm:mx-auto sm:w-72;
}

.about-title {
  @apply mb-3 text-lg font-medium text-gray-900;
}

.bg {
  @apply bg-cover bg-fixed;
}
</style>
<style lang="scss">
.logo {
  content: url(../assets/LOGO/EZTIT.png);
}

.color {
  color: #000;
}

.navbar {
  color: #fff;
  background: #333e56;
  border-radius: 10px;
}

.navbar:hover {
  background: #607196;
}

.wrapper-background {
  background: #fff;
}

.section_banner {
  background: #f3fbfd;
}

.section_content:nth-child(odd) {
  background-color: #f3fbfd;
}

.section_content:nth-child(even) {
  background-color: #fff;
}

.section_title {
  background-image: -webkit-linear-gradient(70deg, #3a2bdc 18%, #8545eb 51%, #cf5ff9 68%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/*滑鼠*/
.scroll_mouse {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}

.mouse {
  width: 26px;
  height: 42px;
  border: 2px solid #1a202e;
  border-radius: 24px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.mouse:after {
  content: "";
  position: absolute;
  top: 5px;
  left: 50%;
  margin-left: -2px;
  background-color: #1a202e;
  border-radius: 100%;
  width: 4px;
  height: 4px;
  opacity: 1;
  -webkit-transform: translateY(0px) scaleY(1) scaleX(1) translateZ(0px);
  transform: translateY(0px) scaleY(1) scaleX(1) translateZ(0px);
  -webkit-animation: scroll 1.5s -1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
  animation: scroll 1.5s -1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
}

@-webkit-keyframes scroll {
  0%,
  20% {
    -webkit-transform: translateY(0px) scaleY(1) scaleX(1) translateZ(0px);
    transform: translateY(0px) scaleY(1) scaleX(1) translateZ(0px);
  }
  10% {
    -webkit-transform: translateY(0px) scaleY(1.2) scaleX(1.2) translateZ(0px);
    transform: translateY(0px) scaleY(1.2) scaleX(1.2) translateZ(0px);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(20px) scaleY(2.5) scaleX(0.5) translateZ(0px);
    transform: translateY(20px) scaleY(2.5) scaleX(0.5) translateZ(0px);
    opacity: 0.01;
  }
}

@keyframes scroll {
  0%,
  20% {
    -webkit-transform: translateY(0px) scaleY(1) scaleX(1) translateZ(0px);
    transform: translateY(0px) scaleY(1) scaleX(1) translateZ(0px);
  }
  10% {
    -webkit-transform: translateY(0px) scaleY(1.2) scaleX(1.2) translateZ(0px);
    transform: translateY(0px) scaleY(1.2) scaleX(1.2) translateZ(0px);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(20px) scaleY(2.5) scaleX(0.5) translateZ(0px);
    transform: translateY(20px) scaleY(2.5) scaleX(0.5) translateZ(0px);
    opacity: 0.01;
  }
}

.card {
  backface-visibility: hidden;
}

.transform-style-3d {
  transform-style: preserve-3d;
}

.transform-style-3d:active {
  transform: rotateY(180deg);
}

.transform-rotateY-180 {
  transform: rotateY(180deg);
}

.banner_bg {
  width: 0;
  height: 0;
  border-bottom: calc(100vh - 88px) solid #3f83f8;
  border-left: 80vw solid transparent;
  top: -7px;
}

.carousel-height {
  max-height: 950px;
}

.n-carousel .n-carousel__arrow {
  background-color: rgba(0, 0, 0, 0.6) !important;
}

.n-carousel .n-carousel__arrow:hover {
  background-color: rgba(0, 0, 0, 0.8) !important;
}
</style>
