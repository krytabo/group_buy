<template>
 <!-- <n-layout class="h-screen">
    &lt;!&ndash;====================&ndash;&gt;
    &lt;!&ndash;       Header       &ndash;&gt;
    &lt;!&ndash;====================&ndash;&gt;
    <n-layout-header class="p-5" bordered>Header</n-layout-header>

    &lt;!&ndash;====================&ndash;&gt;
    &lt;!&ndash;       Canter       &ndash;&gt;
    &lt;!&ndash;====================&ndash;&gt;
    <n-layout position="absolute" style="top: 62px; bottom: 64px;" has-sider>
      &lt;!&ndash;左邊&ndash;&gt;
      <n-layout-sider
        collapse-mode="width"
        :collapsed-width="15"
        :width="240"
        show-trigger="arrow-circle"
        content-style="padding: 24px;"
        :show-collapsed-content="false"
      >
        <el-button type="primary">123</el-button>
      </n-layout-sider>
      &lt;!&ndash;內容&ndash;&gt;
      <n-layout content-style="padding: 24px;" :native-scrollbar="false">

        <button @click="filter(null)">All</button>
        <button
          v-for="category in categories"
          :key="category.id"
          @click="filter(category.id)"
        >{{category.name}}</button>


        <n-carousel show-arrow>
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

        <n-date-picker v-model:value="timestamp" type="datetime" clearable />

      </n-layout>
    </n-layout>

    &lt;!&ndash;====================&ndash;&gt;
    &lt;!&ndash;       Footer       &ndash;&gt;
    &lt;!&ndash;====================&ndash;&gt;
    <n-layout-footer position="absolute" style="height: 64px; padding: 24px;" bordered>
      Footer
    </n-layout-footer>
  </n-layout>-->
</template>

<script>
  // @ is an alias to /src
  import { ref } from "vue";

  export default ({
    name: "Home",
    components: { },
    setup() {

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

      const categories = ref([
        {
          id: 1,
          name: "Category 1,2,5",
          order: 0
        },
        {
          id: 4,
          name: "Category 3,4",
          order: 1
        },
        {
          id: 7,
          name: "Category 6,7,8",
          order: 2
        },
        {
          id: 9,
          name: "Category9",
          order: 3
        }
      ])

      const filter = (key) =>{
        this.$refs.isotope.arrange({
          filter: function(item) {
            return key ? parseInt(item.dataset.value, 10) === key : true;
          }
        });
      };

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
        timestamp,
        info,
        changeMsg,
        message,
        changeText,
        list,
        categories,
        filter
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
  .carousel-img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
</style>
