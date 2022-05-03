<template>
  <n-config-provider :locale="zhTW" :date-locale="dateZhTW">
    <n-layout class="h-screen" position="absolute">
      <!--====================-->
      <!--       Header       -->
      <!--====================-->
      <nav class="bg-gray-50 py-2 md:py-4">
        <div class="px-4 mx-4 md:flex md:items-center">
          <!--LOGO-->
          <div class="flex justify-between items-center">
            <a href="#" class="font-bold text-xl text-indigo-600">
              <img width="136"  src="../src/assets/eztit.svg" alt="logo">
            </a>
            <button class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
              <i class="ri-menu-3-line"></i>
            </button>
          </div>
          <!--按鈕-->
          <!--<div class="flex-1 ml-8">
            <div class="hidden md:flex">
              <router-link to="/activity" class="p-2 px-4 nav-btn" >活動課程</router-link>
              <router-link to="/group_buy" class="p-2 px-4 nav-btn" >團購福利社</router-link>
              <router-link to="/highlights" class="p-2 px-4 nav-btn">活動花絮</router-link>
            </div>
          </div>-->
          <!--icon按鈕-->
          <div class="hidden md:flex mt-3 md:mt-0 md:ml-auto" id="navbar-collapse">
            <router-link to="/shopping_car"  class="hidden md:flex w-10 items-center justify-center bg-white hover:bg-gray-200 h-10 rounded-md text-gray-600">
              <i class="ri-shopping-cart-2-line text-lg "></i>
            </router-link>
            <router-link to="/shop" class="hidden md:flex w-10 items-center justify-center bg-white hover:bg-gray-200 h-10 rounded-md text-gray-600">
              <i class="ri-store-2-line text-lg"></i>
            </router-link>
            <router-link to="/user" class="hidden md:flex w-10 items-center justify-center bg-white hover:bg-gray-200 h-10 rounded-md text-gray-600">
              <i class="ri-user-line  text-lg"></i>
            </router-link>
            <a href="javascript:;"  class="md:hidden flex w-10 items-center justify-center bg-white hover:bg-gray-200 h-10 rounded-md">
              <i class="ri-menu-3-line text-lg text-gray-600"></i>
            </a>

            <!--<a href="#" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">登入</a>
            <a href="#" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">註冊</a>-->
          </div>
        </div>
      </nav>
      <!--====================-->
      <!--       Canter       -->
      <!--====================-->
      <n-layout position="absolute" style="top: 62px; bottom: 64px; background: #F0F2F5;" has-sider class="p-5">
        <!--左邊-->
        <n-layout-sider
          collapse-mode="width"
          :collapsed-width="15"
          :width="240"
          show-trigger="arrow-circle"
          :show-collapsed-content="false"
          class="rounded-md shadow-md pt-3"
        >
          <n-menu
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
            class="text-left"
            default-value="index"
          ></n-menu>
          <!--<el-button type="primary">123</el-button>-->
        </n-layout-sider>
        <!--內容-->
        <n-layout class="ml-6  rounded-lg bg-transparent" content-style="padding: 24px;" :native-scrollbar="false">
          <router-view />
          <!--<n-carousel show-arrow>
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" alt="" />
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg" alt="" />
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg" alt="" />
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" alt="" />
          </n-carousel>


          <div uk-filter="target: .js-filter">

            <div class="uk-grid-small uk-grid-divider uk-child-width-auto" uk-grid>
              <div>
                <ul class="uk-subnav uk-subnav-pill" uk-margin>
                  <li class="uk-active" uk-filter-control><a href="#">All</a></li>
                </ul>
              </div>
              <div>
                <ul class="uk-subnav uk-subnav-pill" uk-margin>
                  <li uk-filter-control="[data-color='white']"><a href="#">White</a></li>
                  <li uk-filter-control="[data-color='blue']"><a href="#">Blue</a></li>
                  <li uk-filter-control="[data-color='black']"><a href="#">Black</a></li>
                </ul>
              </div>
              <div>
                <ul class="uk-subnav uk-subnav-pill" uk-margin>
                  <li uk-filter-control="[data-size='small']"><a href="#">Small</a></li>
                  <li uk-filter-control="[data-size='medium']"><a href="#">Medium</a></li>
                  <li uk-filter-control="[data-size='large']"><a href="#">Large</a></li>
                </ul>
              </div>
            </div>

            <ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid="masonry: true">
              <li data-color="white" data-size="large">
                <div class="uk-card uk-card-default uk-card-body">
                  <canvas width="600" height="800"></canvas>
                  <div class="uk-position-center">Item</div>
                </div>
              </li>
              <li data-color="blue" data-size="small">
                <div class="uk-card uk-card-primary uk-card-body">
                  <canvas width="600" height="400"></canvas>
                  <div class="uk-position-center">Item</div>
                </div>
              </li>
              <li data-color="white" data-size="medium">
                <div class="uk-card uk-card-default uk-card-body">
                  <canvas width="600" height="600"></canvas>
                  <div class="uk-position-center">Item</div>
                </div>
              </li>
              <li data-color="white" data-size="small">
                <div class="uk-card uk-card-default uk-card-body">
                  <canvas width="600" height="400"></canvas>
                  <div class="uk-position-center">Item</div>
                </div>
              </li>
              <li data-color="black" data-size="medium">
                <div class="uk-card uk-card-secondary uk-card-body">
                  <canvas width="600" height="600"></canvas>
                  <div class="uk-position-center">Item</div>
                </div>
              </li>
              <li data-color="black" data-size="small">
                <div class="uk-card uk-card-secondary uk-card-body">
                  <canvas width="600" height="400"></canvas>
                  <div class="uk-position-center">Item</div>
                </div>
              </li>
              <li data-color="blue" data-size="medium">
                <div class="uk-card uk-card-primary uk-card-body">
                  <canvas width="600" height="600"></canvas>
                  <div class="uk-position-center">Item</div>
                </div>
              </li>
              <li data-color="black" data-size="large">
                <div class="uk-card uk-card-secondary uk-card-body">
                  <canvas width="600" height="800"></canvas>
                  <div class="uk-position-center">Item</div>
                </div>
              </li>
              <li data-color="blue" data-size="large">
                <div class="uk-card uk-card-primary uk-card-body">
                  <canvas width="600" height="800"></canvas>
                  <div class="uk-position-center">Item</div>
                </div>
              </li>
              <li data-color="white" data-size="large">
                <div class="uk-card uk-card-default uk-card-body">
                  <canvas width="600" height="800"></canvas>
                  <div class="uk-position-center">Item</div>
                </div>
              </li>
              <li data-color="blue" data-size="medium">
                <div class="uk-card uk-card-primary uk-card-body">
                  <canvas width="600" height="600"></canvas>
                  <div class="uk-position-center">Item</div>
                </div>
              </li>
              <li data-color="black" data-size="small">
                <div class="uk-card uk-card-secondary uk-card-body">
                  <canvas width="600" height="400"></canvas>
                  <div class="uk-position-center">Item</div>
                </div>
              </li>
            </ul>

          </div>

          <p class="text-2xl">內容</p>
          <el-button @click="changeText">{{ info }}</el-button>
          <p>{{ message }}</p>
          <n-button type="primary" @click="changeMsg" dashed>
            測試
          </n-button>

          <n-date-picker v-model:value="timestamp" type="datetime" clearable />-->
        </n-layout>
      </n-layout>
      <!--====================-->
      <!--       Footer       -->
      <!--====================-->
      <n-layout-footer position="absolute" style="height: 64px; padding: 24px;" bordered>
        Footer
      </n-layout-footer>
    </n-layout>
  </n-config-provider>

</template>

<script>
  // @ is an alias to /src
  import { h,ref } from "vue";
  import { NIcon } from "naive-ui";
  import { RouterLink } from "vue-router";
  import { zhTW, dateZhTW } from 'naive-ui'
  function renderIcon(icon) {
    return () => h(NIcon, null, { default: () => h(icon) });
  }


  export default ({
    name: "Home",
    components: { },
    setup() {

      const menuOptions = [
        {
          label: () => h(RouterLink, {
            to: {
              name: "Seller",
            }
          }, { default: () => "首頁" }),
          /*label: () => h("a", {
            href: "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F",
            target: "_blank",
            rel: "noopenner noreferrer"
          }, "首頁"),*/
          key: "index",

        },
        {
          label: () => h(RouterLink, {
            to: {
              name: "Commodity"
            }
          }, { default: () => "商品" }),
          key: "commodity",

        },
        {
          label: () => h(RouterLink, {
            to: {
              name: "Order"
            }
          }, { default: () => "訂單" }),
          key: "order",

        },
        {
          label: () => h(RouterLink, {
            to: {
              name: "Booking"
            }
          }, { default: () => "商品訂貨" }),
          key: "booking",

        },
        {
          label: "用戶管理",
          key: "member",

          // disabled: true,
          children: [
            {
              label: () => h(RouterLink, {
                to: {
                  name: "MemberData"
                }
              }, { default: () => "用戶資料" }),
              key: "member-data"
            },
            {
              label: () => h(RouterLink, {
                to: {
                  name: "MemberGroup"
                }
              }, { default: () => "用戶群組" }),
              key: "member-group"
            }

          ]
        },
        {
          label: "數據報告",
          key: "chart",
          children: [
            {
              label: () => h(RouterLink, {
                to: {
                  name: "ChartGenera"
                }
              }, { default: () => "數據總覽" }),
              key: "chart-general"
            },
            {
              label: () => h(RouterLink, {
                to: {
                  name: "ChartCommodity"
                }
              }, { default: () => "商品分析" }),
              key: "chart-commodity"
            }

          ]
        },
        {
          label:"賣場佈置",
          key:"decoration",
          children: [
            {
              label: () => h(RouterLink, {
                to: {
                  name: "DecorationBanner"
                }
              }, { default: () => "橫幅廣告" }),
              key:"decoration-banner",
            },
            {
              label: () => h(RouterLink, {
                to: {
                  name: "DecorationCategory"
                }
              }, { default: () => "分類設定" }),
              key:"decoration-category",
            }
          ]
        }

      ];

      const list = ref([
        { name: "Element1", id: 1, value: 1 },
        { name: "Element2", id: 2, value: 1 },
        { name: "Element3", id: 3, value: 4 },
        { name: "Element4", id: 4, value: 4 },
        { name: "Element5", id: 5, value: 1 },
        { name: "Element6", id: 6, value: 7 },
        { name: "Element7", id: 7, value: 7 },
        { name: "Element8", id: 8, value: 7 },
        { name: "Element9", id: 9, value: 9 }
      ])

      //時間
      const timestamp = ref(null);

      //變更內容
      const info = ref(true);
      const changeMsg = () => {
        // info.value = false
        if (info.value) {
          info.value = !info.value;
        } else {
          info.value = !info.value;
        }
      };

      //增加數值
      const message = ref(0);
      const changeText = () => message.value++;

      return {
        zhTW,
        dateZhTW,
        timestamp,
        info,
        changeMsg,
        message,
        changeText,
        list,
        menuOptions
      };
    }
  });
  /*export default {
    name: "Home",
    components: {},
    data() {
      return{
        message:"123",
      }
    }
  };*/
</script>

<style lang="scss">
  /*.router-link-active{
    @apply text-white rounded hover:bg-blue-800 hover:bg-white transition-colors duration-300 bg-blue-500 #{!important}
  }*/

  .nav-btn {
    @apply flex items-center justify-center h-10 hover:bg-gray-200 rounded hover:text-gray-800
  }

  .carousel-img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
</style>
