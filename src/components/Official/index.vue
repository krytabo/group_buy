<template>
  <!--==================-->
  <!--      Header      -->
  <!--==================-->
  <nav class="navbar_header" :style="style">
    <div class="lg:w-0 lg:flex-1">
      <img class="h-12 w-auto" :class="{ logo: color }" src="static/LOGO/EZTIT_white.svg" alt="Workflow"/>
    </div>
    <div class="block sm:hidden">
      <button @click="toggle" class="flex items-center px-3 py-2 text-teal-lighter border-teal-light text-white"
              :class="{ navbar: color }">
        <i class="ri-menu-line"></i>
      </button>
    </div>
    <div class="w-full flex-grow sm:flex sm:items-center sm:w-auto hidden">
      <div class="text-sm sm:flex-grow sm:text-right">
        <template v-for="item in HeaderItem">
          <a v-bind:href="item.url" class="header-link-item" :class="{ color: color }"> {{ item.item }}</a>
        </template>
      </div>
    </div>
    <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
         :class="open ? 'block': 'hidden'">
      <div class="rounded-lg shadow-lg">
        <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5 space-y-6">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="static/LOGO/EZTIT.png" alt="Workflow"/>
              </div>
              <div class="-mr-2">
                <button @click="toggle" type="button"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                  <i class="ri-close-line"></i>
                </button>
              </div>
            </div>
            <nav class="space-y-6">
              <a href="#" class="flex items-center space-x-4" v-for="item in HeaderItem">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
                <div class="text-base leading-6 font-medium text-gray-900">
                  {{ item.item }}
                </div>
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
      <img src="static/Banner/hero_bg_2.jpeg" class="absolute inset-0 object-cover w-full h-full" alt=""/>
      <div class="bg-opacity-75 bg-black absolute w-screen h-[calc(100vh+10px)] top-0">
        <svg class="absolute inset-x-0 text-white" style="bottom: -1px" viewBox="0 0 1160 163">
          <path fill="currentColor"
                d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          ></path>
        </svg>
        <div class="lg:top-20 top-12 relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="flex flex-col items-center justify-between xl:flex-row">
            <div class="lg:w-2/5 ">
              <div class="pt-10 text-white">
                <div class="relative my-0 mx-auto w-82 sm:text-7xl text-4xl text-center">
                  <div class="relative inline-block">
                    <svg viewBox="0 0 52 24" fill="currentColor"
                         class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                      <defs>
                        <pattern id="9ef1ff62-feb2-41fe-8163-772b4c79de7b" x="0" y="0"
                                 width=".135" height=".30">
                          <circle cx="1" cy="1" r=".7"></circle>
                        </pattern>
                      </defs>
                      <rect fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)" width="52"
                            height="24"></rect>
                    </svg>
                    <span class="relative">揪團平台</span>
                  </div>
                </div>
                <p class="relative my-0 mx-auto w-72 tracking-widest uppercase text-center font-semibold sm:text-4xl text-2xl pt-4">
                  Groupon</p>
              </div>
              <div class="mt-10">
                <div class="flex space-x-4 text-center sm:justify-center">
                  <button class="app_button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current text-white"
                         viewBox="0 0 512 512">
                      <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                    </svg>
                    <span class="ml-2 flex items-start flex-col leading-none">
                                            <span class="text-xs mb-1">GET IT ON</span>
                                            <span class="text-base font-medium">Google Play</span>
                                        </span>
                  </button>
                  <button class="app_button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current"
                         viewBox="0 0 305 305">
                      <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                      <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                    </svg>
                    <span class="ml-2 flex items-start flex-col leading-none">
                                            <span class="text-xs mb-1">Download on the</span>
                                            <span class="text-base font-medium">App Store</span>
                                        </span>
                  </button>
                </div>
              </div>
            </div>

            <div class="lg:mt-0 mt-10 w-full xl:px-8 lg:w-7/12">
              <div class="relative">
                <svg viewBox="0 0 52 24" fill="currentColor"
                     class="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block">
                  <defs>
                    <pattern id="766323e1-e594-4ffd-a688-e7275079d540" x="0" y="0" width=".135"
                             height=".30">
                      <circle cx="1" cy="1" r=".7"></circle>
                    </pattern>
                  </defs>
                  <rect fill="url(#766323e1-e594-4ffd-a688-e7275079d540)" width="52"
                        height="24"></rect>
                </svg>
                <div class="h-full flex items-center">
                  <img src="static/Banner/hero.png" class="relative h-auto w-full self-center" alt=""/>
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
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium text-gray-900 mb-4">豐富的服務應用</h1>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div class="section_flexType justify-center items-center mt-24 space-y-4 sm:space-y-0 space-x-0 sm:space-x-4">
          <div class="container mx-auto">
            <div class="section_about">
              <img src="static/index/Deposit-01.png" alt="" class="section_about_img">
              <p class="about-title">呼朋引伴一起省<br>價格更優惠</p>
            </div>
          </div>
          <div class="container mx-auto">
            <div class="section_about">
              <img src="static/index/ShopPhone-01.png" alt="" class="section_about_img">
              <p class="about-title">APP行動化<br>優惠帶著走</p>
            </div>
          </div>
          <div class="container mx-auto">
            <div class="section_about">
              <img src="static/index/life-01.png" alt="" class="section_about_img">
              <p class="about-title">食衣住行育樂<br>一次滿足</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--說明內容-->
    <section class="section_content text-gray-700">
      <div class="section_space container px-5 py-24 mx-auto flex flex-wrap">
        <!--圖片-->
        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-2xl overflow-hidden shadow-2xl">
          <a-carousel class="w-full lg:h-full h-96 " :auto-play="true" animation-name="fade">
            <!--<a-carousel-item v-for="item in photo">
              <img :src="item.src" class="object-cover h-full w-full object-center"/>
            </a-carousel-item>
-->
            <n-carousel effect="custom" v-for="item in photo" show-arrow style="width: 100%; height: 240px">
              <img :src="item.src" class="object-cover h-full w-full object-center"/>
            </n-carousel>
          </a-carousel>
        </div>
        <!--介紹內容-->
        <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="w-32 h-32 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_2yyuy7co.json" background="transparent" speed="1"
                             style="width: 70%; height: 70%;" loop autoplay></lottie-player>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg font-medium mb-3">減少不必要生產及浪費</h2>
              <p class="leading-relaxed text-base">社區團購批量預售的方式，進行銷售已達到減少庫存損耗、減少包裝、降低成本</p>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="w-32 h-32 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_7ufvoduf.json" background="transparent" speed="1"
                             style="width: 100%; height: 100%;" loop autoplay></lottie-player>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg font-medium mb-3">淨零、碳中和</h2>
              <p class="leading-relaxed text-base">以批次團購的方式：1.廠商端-減少生產損耗、包裝降低成本
                2.運輸端-降低零售運輸次數，減少碳排放及運輸成本</p>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="w-32 h-32 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_ils9u0yd.json" background="transparent" speed="1"
                             style="width: 60%; height: 60%;" loop autoplay></lottie-player>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg font-medium mb-3">價格更優惠及透明化</h2>
              <p class="leading-relaxed text-base">
                通過團購更多地了解產品的合理價格區間，並參考團購組織者和其他購買者對產品客觀公正的評價，在購買和服務過程中占據主動地位，真正買到質量好、價格合理的產品，達到省時、省心、省力、省錢的目的。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--<div class="section_content">
        <div class="section_space">
            <div class="container mx-auto">
                <div class="section_flexType">
                    <div class="rounded-2xl bg-gray-300 sm:w-5/12 w-full h-96">123</div>
                    <div class="flex-1 w-full bg-white">
                        這邊是內容
                    </div>
                </div>
            </div>
        </div>
    </div>-->
    <!--加入我們-->
    <section class="section_content relative">
      <img class="absolute inset-0 h-full w-full object-cover" src="static/index/bg.jpg" alt=""/>
      <div class="absolute inset-0 bg-gray-100 bg-opacity-90"></div>
      <div class="section_space tracking-wider">
        <!--標題-->
        <div class="text-center mb-15">
          <h1 class="sm:text-3xl text-2xl font-medium text-gray-900 mb-4 uppercase">Join GROUPON</h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">各行各業都適用</p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <!--內容-->
        <div class="section_flexType sm:space-x-20 space-x-0 sm:space-y-0 space-y-20 justify-center items-center">
          <div class="container mx-auto">
            <div class="section_join_groupon">
              <img src="static/index/community_groupBuy.svg" alt=""
                   class="section_about_img sm:w-32 w-28 mx-auto my-0">
              <p class="about-title">社區揪團</p>
              <p>您是社區方<br>揪團事物交給GROUPON</p>
              <button type="button" class="button_primary">立即註冊企業帳號</button>
            </div>
          </div>
          <div class="container mx-auto">
            <div class="section_join_groupon">
              <img src="static/index/store.svg" alt="" class="section_about_img sm:w-32 w-28 mx-auto my-0">
              <p class="about-title">建立新客源</p>
              <p>您是商品供應商<br>GROUPON特展新商機</p>
              <button type="button" class="button_primary">立即成為合作夥伴</button>
            </div>
          </div>
          <div class="container mx-auto">
            <div class="section_join_groupon">
              <img src="static/index/crop.svg" alt="" class="section_about_img sm:w-32 w-28 mx-auto my-0">
              <p class="about-title">契作農業</p>
              <p>您是商品供應商<br>GROUPON特展新商機</p>
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
        <div class="w-full lg:w-4/12 lg:mr-5 mr-0 lg:mb-5 ">
          <img src="static/LOGO/EZTIT_long.png" alt="">
          <div class="flex space-x-4 text-center sm:justify-center mt-5">
            <button class="app_button">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current" viewBox="0 0 512 512">
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
              </svg>
              <span class="ml-2 flex items-start flex-col leading-none">
                                            <span class="text-xs mb-1">GET IT ON</span>
                                            <span class="text-base font-medium">Google Play</span>
                                        </span>
            </button>
            <button class="app_button">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current" viewBox="0 0 305 305">
                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
              </svg>
              <span class="ml-2 flex items-start flex-col leading-none">
                                            <span class="text-xs mb-1">Download on the</span>
                                            <span class="text-base font-medium">App Store</span>
                                        </span>
            </button>
          </div>
        </div>
        <div class="lg:w-7/12 section_flexType space_between w-full lg:mt-0 mt-5">
          <div class="w-full lg:w-1/2 sm:mt-0 mt-10 px-4">
            <div class="text-lg">功能導覽</div>
            <ul class="list-unstyled mt-2">
              <li><a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                     href="/about">揪團商店</a></li>
              <li><a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                     href="/about">特約商登入</a></li>
              <li><a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                     href="/about">管理平台登入</a></li>
            </ul>
          </div>
          <div class="w-full lg:w-1/2 sm:mt-0 mt-10 px-4">
            <div class="text-lg">聯絡我們</div>
            <ul class="list-unstyled mt-2">
              <li><a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                     href="/about">聯絡電話：04-2326-7189</a></li>
              <li><a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                     href="/about">地址：台中市西區臺灣大道二段239號7樓-4</a></li>
              <li><a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                     href="/about">電子信箱：eztit@gmail.com</a></li>
            </ul>
          </div>
        </div>

      </div>
      <hr class="my-6 border-gray-400">
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-600 font-semibold py-1">
            Copyright © 2022 EZTIT Inc
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        // Navbar按鈕內容
        HeaderItem: [{item: '揪團商店', url: 'https://google.com'}, {item: '特約商登入', url: '#2'}, {
          item: '管理平台登入',
          url: '#'
        }],

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
            src: "./static/Carousel/phone.png"
          },
          {
            id: 2,
            src: "./static/Carousel/web.png"
          },
          {
            id: 3,
            src: "./static/Carousel/fp1.png"
          }
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
        this.open = !this.open
        console.log(this.open)
      },

      // Navbar向下捲動，改變顏色
      handleScroll() {
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        // let offsetTop = document.querySelector(".header").offsetTop;
        //设置背景颜色的透明读
        if (scrollTop) {
          this.style.backgroundColor = `rgba(249, 250, 251,${scrollTop /
          (scrollTop + 80)})`;
          this.color = true;
        } else if (scrollTop == 0) {
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
  };
</script>

<style lang="scss">

</style>