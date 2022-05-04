<template>
  123
  <n-config-provider :locale="zhTW" :date-locale="dateZhTW">
    <n-layout class="h-screen" position="absolute">
      <!--====================-->
      <!--       Header       -->
      <!--====================-->
      <nav class="flex items-center bg-gray-50 py-2 px-6 md:py-4" style="height: 60px">
        <!--LOGO-->
        <div class="flex items-center justify-between">
          <a href="#" class="text-xl font-bold text-indigo-600">
            <img width="136" src="../assets/eztit.svg" alt="logo" />
          </a>
          <button class="rounded border border-solid border-gray-600 px-3 py-1 text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
            <i class="ri-menu-3-line"></i>
          </button>
        </div>
        <!--右邊按鈕-->
        <div class="mt-3 hidden items-center space-x-2 md:mt-0 md:ml-auto md:flex" id="navbar-collapse">
          <!--切換社區-->
          <!--<n-popselect v-model:value="value" :options="options" trigger="click">
            <n-button>{{ value || '彈出選擇' }}</n-button>
          </n-popselect>-->

          <!--用戶-->
          <div class="header-btn">
            <UserCircleIcon class="h-5 w-5"></UserCircleIcon>
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
                <div class="cursor-pointer text-blue-500" @click="NewsReadAll">標記為已讀</div>
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
            <!-- <n-popselect
               v-model:value="value"
               :options="options"
               size="medium"
               trigger="click"
               scrollable
             >
               <div class="hidden md:flex w-10 items-center justify-center bg-white hover:bg-gray-200 h-10 rounded-md text-gray-600 cursor-pointer">
                 <i class="ri-notification-3-line text-lg"></i>
               </div>
             </n-popselect>-->
            <!-- <router-link to="/shopping_car"  class="hidden md:flex w-10 items-center justify-center bg-white hover:bg-gray-200 h-10 rounded-md text-gray-600">
               <i class="ri-notification-3-line text-lg"></i>
             </router-link>-->
          </n-badge>
          <!--設定-->
          <div class="header-btn">
            <CogIcon class="h-5 w-5"></CogIcon>
          </div>

          <router-link to="/"><el-button type="text" class="h-full p-3 text-black hover:bg-gray-200"> 返回前台</el-button></router-link>

          <!--小螢幕選單-->
          <a href="javascript:" class="flex h-10 w-10 items-center justify-center rounded-md bg-white hover:bg-gray-200 md:hidden">
            <i class="ri-menu-3-line text-lg text-gray-600"></i>
          </a>

          <!--<a href="#" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">登入</a>
          <a href="#" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">註冊</a>-->
        </div>
      </nav>
      <!--====================-->
      <!--       Canter       -->
      <!--====================-->
      <n-layout position="absolute" style="top: 60px; bottom: 64px; background: #f0f2f5" has-sider class="p-5">
        <!--左邊-->
        <n-layout-sider collapse-mode="width" :collapsed-width="15" :width="240" show-trigger="arrow-circle" :show-collapsed-content="false" class="rounded-md pt-3 shadow-md">
          <n-menu :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions" class="text-left" default-value="index"></n-menu>
        </n-layout-sider>
        <!--內容-->
        <n-layout class="layout-height ml-6 rounded-lg bg-transparent">
          <!--<router-view></router-view>-->
          <seller-dashboard></seller-dashboard>
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
      <n-layout-footer position="absolute" style="height: 64px; padding: 24px" bordered> Footer </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>

<script>
// @ is an alias to /src
import { h, ref, reactive } from "vue";
import { RouterLink } from "vue-router";
import { zhTW, dateZhTW } from "naive-ui";
import { CogIcon, UserCircleIcon } from "@heroicons/vue/outline";
import SellerDashboard from "@/components/Seller/Dashboard/index";

export default {
  name: "Home",
  components: { CogIcon, UserCircleIcon, SellerDashboard },
  setup() {
    const menuOptions = [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "Seller",
              },
            },
            { default: () => "首頁" }
          ),
        /*label: () => h("a", {
            href: "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F",
            target: "_blank",
            rel: "noopenner noreferrer"
          }, "首頁"),*/
        key: "index",
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "Group",
              },
            },
            { default: () => "揪團" }
          ),
        key: "group",
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "Commodity",
              },
            },
            { default: () => "商品" }
          ),
        key: "commodity",
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "Order",
              },
            },
            { default: () => "訂單" }
          ),
        key: "order",
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "Booking",
              },
            },
            { default: () => "商品訂貨" }
          ),
        key: "booking",
      },
      {
        label: "用戶管理",
        key: "member",

        // disabled: true,
        children: [
          {
            label: () =>
              h(
                RouterLink,
                {
                  to: {
                    name: "MemberData",
                  },
                },
                { default: () => "用戶資料" }
              ),
            key: "member-data",
          },
          {
            label: () =>
              h(
                RouterLink,
                {
                  to: {
                    name: "MemberGroup",
                  },
                },
                { default: () => "用戶群組" }
              ),
            key: "member-group",
          },
        ],
      },
      {
        label: "數據報告",
        key: "chart",
        children: [
          {
            label: () =>
              h(
                RouterLink,
                {
                  to: {
                    name: "ChartGenera",
                  },
                },
                { default: () => "數據總覽" }
              ),
            key: "chart-general",
          },
          {
            label: () =>
              h(
                RouterLink,
                {
                  to: {
                    name: "ChartCommodity",
                  },
                },
                { default: () => "商品分析" }
              ),
            key: "chart-commodity",
          },
        ],
      },
      {
        label: "賣場佈置",
        key: "decoration",
        children: [
          {
            label: () =>
              h(
                RouterLink,
                {
                  to: {
                    name: "DecorationBanner",
                  },
                },
                { default: () => "橫幅廣告" }
              ),
            key: "decoration-banner",
          },
          {
            label: () =>
              h(
                RouterLink,
                {
                  to: {
                    name: "DecorationCategory",
                  },
                },
                { default: () => "分類設定" }
              ),
            key: "decoration-category",
          },
        ],
      },
      {
        label: "加值服務中心",
        key: "advertising",
        children: [
          {
            label: () =>
              h(
                RouterLink,
                {
                  to: {
                    name: "Advertising",
                  },
                },
                { default: () => "廣告管理" }
              ),
            key: "advertising",
          },
          {
            label: () =>
              h(
                RouterLink,
                {
                  to: {
                    name: "Stored",
                  },
                },
                { default: () => "加值管理" }
              ),
            key: "stored",
          },
        ],
      },
    ];

    // 切換社區
    const value = ref("測試展示的社區名稱");
    const options = [
      {
        value: "測試展示的社區名稱",
        label: "測試展示的社區名稱",
      },
      {
        value: "測試社區２",
        label: "測試社區２",
      },
      {
        value: "測試社區３",
        label: "測試社區３",
      },
      {
        value: "測試社區４",
        label: "測試社區４",
      },
      {
        value: "測試社區５５５５５５",
        label: "測試社區５５５５５５",
      },
    ];

    //訊息通知
    const NewsBadge = ref(0);
    const BadgeNumber = ref(0);
    const isOpen = ref(true);
    const NewsList = reactive([
      {
        title: "有一筆新訂單",
        content: "張美美(A001)購買「德國 Donkey幸運繽紛招財貓 經典色系 - 黑色 Ｘ 1」",
        time: "2022-02-20 20:34:58",
        read: false,
      },
      {
        title: "有一筆新訂單",
        content: "張美美(A001)購買「德國 Donkey幸運繽紛招財貓 經典色系 - 黑色 Ｘ 1」",
        time: "2022-02-20 20:34:58",
        read: true,
      },
      {
        title: "有一筆新訂單",
        content: "張美美(A001)購買「德國 Donkey幸運繽紛招財貓 經典色系 - 黑色 Ｘ 1」",
        time: "2022-02-20 20:34:58",
        read: false,
      },
      {
        title: "有一筆新訂單",
        content: "張美美(A001)購買「德國 Donkey幸運繽紛招財貓 經典色系 - 黑色 Ｘ 1」",
        time: "2022-02-20 20:34:58",
        read: false,
      },
      {
        title: "有一筆新訂單",
        content: "張美美(A001)購買「德國 Donkey幸運繽紛招財貓 經典色系 - 黑色 Ｘ 1」",
        time: "2022-02-20 20:34:58",
        read: false,
      },
    ]);
    const NewsRead = () => {
      // NewsBadge.value = Math.max(0, NewsBadge.value - 1)
      // NewsList.value((item) => item.read === true);
      NewsList.valueOf().read = true;
      console.log(NewsList);
    };

    /*const ItemArr = computed(() => {
        return NewsList.filter((item) => item.read === true);
      });*/

    watch: {
      NewsBadge.value = NewsBadge.value + NewsList.length;
      /*if(NewsList.length === false){
          NewsBadge.value = BadgeNumber.value + 1
        } else {
          NewsBadge.value = BadgeNumber.value - 1
        }*/

      console.log(NewsBadge.value, "123");
      console.log(BadgeNumber.value);
      console.log(NewsList);
      console.log(NewsList.length);
    }
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
      value,
      options,
      timestamp,
      info,
      changeMsg,
      message,
      changeText,
      menuOptions,
      NewsBadge,
      NewsList,
      BadgeNumber,
      NewsRead,
      isOpen,
    };
  },
};
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

.header-btn {
  @apply hidden h-10 w-10 cursor-pointer items-center  justify-center rounded-md text-gray-600 hover:bg-gray-200 md:flex #{!important};
}
.nav-btn {
  @apply flex h-10 items-center justify-center rounded hover:bg-gray-200 hover:text-gray-800 #{!important};
}

.carousel-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.news-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.news-list:not(:last-child) {
  @apply border-b #{!important};
}

.layout-height {
  height: calc(100vh - 166px);
}
</style>
