<template>
  <div class="block h-full w-full space-y-4 space-x-0 sm:flex sm:space-x-4 sm:space-y-0">
    <div class="flex h-full flex-grow flex-col space-y-4">
      <!--數據總覽-->
      <n-card class="card">
        <div class="card-header">
          <div class="card-headerTitle">
            <p class="custom-title">數據總覽</p>
          </div>
          <p class="float-right my-0 self-center">數據截止：<n-time :time="time" /></p>
        </div>
      </n-card>
      <!--訂單交易-->
      <n-card class="card">
        <div class="card-header">
          <div class="card-headerTitle">
            <p class="custom-title">訂單交易</p>
          </div>
          <n-date-picker v-model:value="month" type="month" clearable class="w-28 text-left"></n-date-picker>
        </div>
      </n-card>
      <!--月銷售數據-->
      <n-card class="card">
        <div class="card-header">
          <div class="card-headerTitle">
            <p class="custom-title">月銷售數據</p>
          </div>
          <n-date-picker v-model:value="year" type="year" clearable class="w-28 text-left"></n-date-picker>
        </div>
      </n-card>
      <!--<n-layout class="rounded-lg" content-style="padding: 24px;" :native-scrollbar="false">
        <div class="border-b bar-primary flex">
          <p class="custom-title flex-1">數據總覽</p>
          <p>數據截止：{{ nowTime }}</p>
        </div>
      </n-layout>-->
    </div>
    <div class="flex-1">
      <div class="flex h-full flex-col space-y-4">
        <!--待處理訂單-->
        <n-card class="card">
          <div class="card-header">
            <div class="card-headerTitle">
              <p class="custom-title">待處理訂單</p>
            </div>
            <el-select v-model="selectedCategory" @change="updateList()" class="mb-2 w-28 text-left" placeholder="Select" size="large">
              <el-option v-for="item in OrderStateOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
          <el-scrollbar max-height="288px">
            <div class="order-list cursor-pointer bg-white p-4 text-left text-base hover:bg-gray-50" v-for="(item, index) in sortedListItems" v-bind:key="index">
              <span class="flex">
                <p class="mb-0 flex-1 self-center font-bold">{{ item.name }}</p>
                <template v-if="item.state === '待付款'">
                  <n-tag type="error">{{ item.state }}</n-tag>
                </template>
                <template v-if="item.state === '待出貨'">
                  <n-tag type="warning">{{ item.state }}</n-tag>
                </template>
              </span>
              <template v-for="(subitems, subindex) in item.children" v-bind:key="subindex">
                <p class="flex-1self-center mb-0 mt-1">{{ subitems.product }}</p>
                <template v-for="(subitems2, subindex2) in subitems.children" v-bind:key="subindex2">
                  <p class="mb-0 mt-1 flex-1 self-center">{{ subitems2.size }} (${{ subitems2.price }}) X {{ subitems2.quantity }}</p>
                </template>
                <p class="mb-0 mt-1 font-bold text-red-700">總計：${{ item.total }}</p>
              </template>
            </div>
          </el-scrollbar>
        </n-card>
        <!--熱銷排行-->
        <n-card class="card">
          <div class="card-header">
            <div class="card-headerTitle">
              <p class="custom-title">熱銷排行</p>
            </div>
            <n-date-picker v-model:value="month" type="month" clearable class="mb-2 w-28 text-left"></n-date-picker>
          </div>

          <el-table :data="tableData" style="width: 100%" height="210">
            <el-table-column prop="rank" label="排行" width="180"></el-table-column>
            <el-table-column prop="name" label="商品名稱" width="180"></el-table-column>
            <el-table-column prop="sell" label="月銷售量" align="center"></el-table-column>
          </el-table>
        </n-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { readOrder } from "@/js/readOrder";

export default {
  name: "dashboard",
  components: {},
  setup() {
    /*const nowTime = ref(null);
      const clear = () => {}   */
    const OrderStateOptions = [
      {
        label: "全部",
        value: "全部",
      },
      {
        label: "待出貨",
        value: "待出貨",
      },
      {
        label: "待付款",
        value: "待付款",
      },
    ];
    const selectedCategory = ref("全部");
    /*const readOrder = [
        {
          no:'1',
          name:'張美美',
          state:'待付款',
          children:[
            {
              product:'德國 Donkey幸運繽紛招財貓 經典色系',
              children:[
                {
                  size:'黑色',
                  price:'850',
                  quantity:'2',
                }
              ],
            }
          ],
          total:'1,700',
        },
        {
          no:'1',
          name:'鍾小寶',
          state:'待出貨',
          children:[
            {
              product:'德國 Donkey幸運繽紛招財貓 經典色系',
              children:[
                {
                  size:'黑色',
                  price:'850',
                  quantity:'2',
                },
                {
                  size:'黃色',
                  price:'850',
                  quantity:'1',
                }
              ],
            }
          ],
          total:'2,550',
        },
        {
          no:'1',
          name:'黃溫妮',
          state:'待付款',
          children:[
            {
              product:'德國 Donkey幸運繽紛招財貓 經典色系',
              children:[
                {
                  size:'紫色',
                  price:'950',
                  quantity:'1',
                }
              ],
            }
          ],
          total:'950',
        },
      ]*/

    const tableData = [
      {
        rank: "1",
        name: "商品名稱Ａ",
        sell: "98",
      },
      {
        rank: "2",
        name: "商品名稱Ａ",
        sell: "98",
      },
      {
        rank: "3",
        name: "商品名稱Ａ",
        sell: "86",
      },
      {
        rank: "4",
        name: "商品名稱Ａ",
        sell: "77",
      },
      {
        rank: "5",
        name: "商品名稱Ａ",
        sell: "67",
      },
      {
        rank: "6",
        name: "商品名稱Ａ",
        sell: "63",
      },
      {
        rank: "7",
        name: "商品名稱Ａ",
        sell: "53",
      },
      {
        rank: "8",
        name: "商品名稱Ａ",
        sell: "40",
      },
      {
        rank: "9",
        name: "商品名稱Ａ",
        sell: "36",
      },
      {
        rank: "10",
        name: "商品名稱Ａ",
        sell: "29",
      },
    ];

    return {
      time: Date.now(),
      month: Date.now(),
      year: Date.now(),
      tableData,
      readOrder,
      OrderStateOptions,
      selectedCategory,
    };
  },

  data() {
    return {
      listItems: readOrder,
      sortedListItems: readOrder,
    };
  },
  methods: {
    updateList() {
      this.sortedListItems = [];
      this.sortedListItems = this.selectedCategory === "全部" ? (this.sortedListItems = readOrder) : readOrder.filter((item) => item.state === this.selectedCategory);
    },
  },
};
</script>

<!--<script setup lang="jsx">
  import { ref } from 'vue';
  import { readOrder } from "@/js/readOrder";

  const OrderStateOptions = [
    {
      label: "全部",
      value: "全部"
    },
    {
      label: "待出貨",
      value: "待出貨"
    },
    {
      label: "待付款",
      value: "待付款"
    }
  ]
  const selectedCategory = ref("全部")
  const tableData = [
    {
      rank: '1',
      name: '商品名稱Ａ',
      sell: '98',
    },
    {
      rank: '2',
      name: '商品名稱Ａ',
      sell: '98',
    },
    {
      rank: '3',
      name: '商品名稱Ａ',
      sell: '86',
    },
    {
      rank: '4',
      name: '商品名稱Ａ',
      sell: '77',
    },
    {
      rank: '5',
      name: '商品名稱Ａ',
      sell: '67',
    },
    {
      rank: '6',
      name: '商品名稱Ａ',
      sell: '63',
    },
    {
      rank: '7',
      name: '商品名稱Ａ',
      sell: '53',
    },
    {
      rank: '8',
      name: '商品名稱Ａ',
      sell: '40',
    },
    {
      rank: '9',
      name: '商品名稱Ａ',
      sell: '36',
    },
    {
      rank: '10',
      name: '商品名稱Ａ',
      sell: '29',
    }
  ]

  const listItems = readOrder
  const sortedListItems =  readOrder

  const updateList = () => {
    sortedListItems.length = [];
    sortedListItems.length =
      selectedCategory.value === "全部"
        ? (sortedListItems.length = readOrder)
        : readOrder.filter((item) => item.state === selectedCategory.value);
  }

</script>-->

<style lang="scss">
.card {
  @apply flex-1 rounded-lg #{!important};
}
.card-header {
  @apply flex border-b pb-2 #{!important};
}
/*  .card-headerTitle{
    @apply bar-primary flex-1 items-center flex #{!important}
  }*/
.custom-title {
  @apply mb-0 text-left text-xl font-medium #{!important};
}

.bar-primary {
  position: relative;
  ::before {
    position: absolute;
    bottom: -9px;
    width: 100px;
    height: 1px;
    content: "";
    background: #00a0f1;
  }
}

.order-list:not(:last-child) {
  @apply border-b #{!important};
}
</style>
