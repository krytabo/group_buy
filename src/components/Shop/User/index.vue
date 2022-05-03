<!--
<template>
  <div id="app" v-bind:class="(nowpage=='loading'?'loading':'')">

    <nav class="bg-white py-2 md:py-4">
      <div class="px-4 mx-4 md:flex md:items-center">

        <div class="flex justify-between items-center">
          <a href="#" class="font-bold text-xl text-indigo-600">
            <img width="136"  src="../src/assets/eztit.svg" alt="logo">
          </a>
          <button class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
            <i class="ri-menu-3-line"></i>
          </button>
        </div>


        <div class="flex-1">
          <div class="flex">
            <router-link to="/activity" class="p-2 lg:px-4 md:mx-2 nav-btn" >活動課程</router-link>
            <router-link to="/group_buy" class="p-2 lg:px-4 md:mx-2 nav-btn" >團購福利社</router-link>
            <router-link to="/highlights" class="p-2 lg:px-4 md:mx-2 nav-btn">活動花絮</router-link>
          </div>
        </div>
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

          &lt;!&ndash;<a href="#" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">登入</a>
          <a href="#" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">註冊</a>&ndash;&gt;
        </div>
      </div>
    </nav>

    <t-head-menu theme="light" v-model="menu1Value" @change="changeHandler" class="px-4">
      <template #logo>
        <img width="136"  src="../src/assets/eztit.svg" alt="logo">
      </template>

      &lt;!&ndash;<t-menu-item v-for="(item,index) in classify" v-bind:key="index" :value="('item' + index)" >{{ item.name }}</t-menu-item>&ndash;&gt;
      <router-link to="/activity" class-active="active"><t-menu-item value="item1" class="hidden md:flex">活動課程</t-menu-item></router-link>
      <router-link to="/group_buy"><t-menu-item value="item2" class="hidden md:flex">團購福利社</t-menu-item></router-link>
      <router-link to="/highlights"><t-menu-item value="item3" class="hidden md:flex">活動花絮</t-menu-item></router-link>

      <template #operations>
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
        <a href="javascript:;" class="hidden"><icon class="t-menu__operations-icon" name="ellipsis"/></a>
      </template>
    </t-head-menu>

    <router-view />
  </div>
</template>

<script>
  export default {
    name: "Member",
    components: {},
    data() {
      return {
        value1: 'first',
        menu1Value: 'item1',
        classify:[
          {
            name:"活動課程"
          },
          {
            name:"團購福利社"
          },
          {
            name:"活動花絮"
          }
        ]
      };
    },
    methods: {
      changeHandler(active) {
        console.log('change', active);
      },
    },
  };
</script>
<style lang="scss" scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }


  .router-link-active{
    @apply text-white rounded hover:bg-blue-800 hover:bg-white transition-colors duration-300 bg-blue-500 #{!important}
  }

  .nav-btn {
    @apply flex items-center justify-center h-10 hover:bg-gray-200 rounded hover:text-gray-800
  }

</style>
-->
