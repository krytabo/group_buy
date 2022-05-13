import { createRouter, createWebHistory } from "vue-router";
import firebase from "firebase/compat/app";
import "../configured/firebaseConfig";
import { firebaseAuth } from "@/configured/firebaseConfig";
// import Home from "../views/Home.vue";

const routes = [
  {
    path: "/", //官網首頁
    name: "official_index",
    component: () => import("@/views/Official"),
  },
  {
    path: "/termsOfService", //註冊條款
    name: "TermsOfService",
    component: () => import("@/components/TermsOfService"),
  },
  {
    path: "/forgotPwd", //忘記密碼
    name: "forgotPwd",
    component: () => import("@/views/login/forgotPassword"),
  },
  {
    path: "/login", //住戶登入
    name: "Login",
    component: () => import("@/views/login/login"),
  },
  {
    path: "/signup", //住戶註冊
    name: "SignUp",
    component: () => import("@/views/SignUp/SignUp"),
  },
  {
    path: "/vendor_login", //特約商登入
    name: "VendorLogin",
    component: () => import("@/views/login/VendorLogin"),
  },
  {
    path: "/vendor_SignUp", //特約商註冊
    name: "VendorSignUp",
    component: () => import("@/views/SignUp/VendorSignUp"),
  },
  {
    path: "/manage_login", //管理平台登入
    name: "ManageLogin",
    component: () => import("@/views/login/ManageLogin"),
  },
  {
    path: "/manage_SignUp", //管理平台註冊
    name: "ManageSignUp",
    component: () => import("@/views/SignUp/ManageSignUp"),
  },
  {
    path: "/404", //錯誤
    name: "404",
    component: () => import("@/views/404"),
  },
  {
    path: "/backstage", //賣家中心-首頁
    name: "Backstage",
    component: () => import("@/views/Backstage"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/seller", //賣家中心-首頁
    name: "Seller",
    component: () => import("@/components/Seller/Dashboard/index"),
  },
  {
    path: "/activity", //活動課程
    name: "Activity",
    component: () => import("@/components/Shop/Activity/index.vue"),
  },
  {
    path: "/group_buy", //團購福利社
    name: "GroupBuy",
    component: () => import("@/views/GroupBuy"),
  },
  {
    path: "/highlights", //活動花絮
    name: "Highlights",
    component: () => import("@/components/Shop/Highlights/index.vue"),
  },
  {
    path: "/user", //會員資料
    name: "User",
    component: () => import("@/components/Shop/User/index"),
  },
  {
    path: "/shopping_car", //購物車
    name: "ShoppingCar",
    component: () => import("@/components/Shop/ShoppingCar/index"),
  },
  {
    path: "/dashboard", //賣家中心-首頁
    name: "Dashboard",
    component: () => import("@/components/Seller/Dashboard/index"),
  },
  {
    path: "/group", //賣家中心-揪團
    name: "Group",
    component: () => import("@/components/Seller/Group/index"),
  },
  {
    path: "/commodity", //賣家中心-商品
    name: "Commodity",
    component: () => import("@/components/Seller/Commodity/index"),
  },
  {
    path: "/order", //賣家中心-訂單
    name: "Order",
    component: () => import("@/components/Seller/Order/index"),
  },
  {
    path: "/booking", //賣家中心-商品訂貨
    name: "Booking",
    component: () => import("@/components/Seller/Booking/index"),
  },
  {
    path: "/member_data", //賣家中心-用戶管理-用戶資料
    name: "MemberData",
    component: () => import("@/components/Seller/Member/MemberData/index"),
  },
  {
    path: "/member_group", //賣家中心-用戶管理-用戶群組
    name: "MemberGroup",
    component: () => import("@/components/Seller/Member/MemberGroup/index"),
  },
  {
    path: "/chart_genera", //賣家中心-數據報告-數據總覽
    name: "ChartGenera",
    component: () => import("@/components/Seller/Chart/Genera/index"),
  },
  {
    path: "/chart_commodity", //賣家中心-數據報告-商品分析
    name: "ChartCommodity",
    component: () => import("@/components/Seller/Chart/Commodity/index"),
  },
  {
    path: "/decoration_banner", //賣家中心-賣場佈置-橫幅廣告
    name: "DecorationBanner",
    component: () => import("@/components/Seller/Decoration/Banner/index"),
  },
  {
    path: "/decoration_category", //賣家中心-賣場佈置-分類設定
    name: "DecorationCategory",
    component: () => import("@/components/Seller/Decoration/Category/index"),
  },
  {
    path: "/advertising", //賣家中心-加值服務中心-廣告管理
    name: "Advertising",
    component: () => import("@/components/Seller/Service/Advertising/index"),
  },
  {
    path: "/stored", //賣家中心-加值服務中心-加值管理
    name: "Stored",
    component: () => import("@/components/Seller/Service/Stored/index"),
  },

  /*{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/!* webpackChunkName: "about" *!/ "../views/About.vue"),
  },*/
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.authRequired)) {
    if (firebase.auth().currentUser) {
      next();
    } else {
      // alert("You must be logged in to see this page");
      // this.$swal("Oops...", "Algum erro aconteceu!", "error");
      next({
        path: "/login",
      });
    }
  } else {
    next();
  }
});

export default router;
