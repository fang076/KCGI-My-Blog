<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar :url="data.avatar" :size="180"/>
      <h1 class="title">{{ data.siteTitle }}</h1>
    </template>

    <Menu />
    <Contact v-if="data" />
    <p v-if="data" class="footer">
      {{ data.icp }}
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}
.avatar-container {
  margin: 0 auto;
}
.contact-container{
  margin-top: 80px;
}
.footer {
  text-align: center;
  font-size: 12px;
  bottom: 30px;
  color: #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>
