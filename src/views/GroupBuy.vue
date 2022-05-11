<template>
  <group-header></group-header>
  <group-buy></group-buy>
  <group-footer></group-footer>
</template>

<script>
import GroupHeader from "@/components/Shop/Header";
import GroupFooter from "@/components/Shop/Footer";
import GroupBuy from "@/components/Shop/GroupBuy/index";

export default {
  name: "",
  components: {
    GroupHeader,
    GroupFooter,
    GroupBuy,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
