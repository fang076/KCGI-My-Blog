<template>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data" />
      <BlogComment v-if="!isLoading" />
    </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
// import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogComment from "./components/BlogComment";
import mainScroll from "@/mixins/mainScroll.js";
import { titleController } from "@/utils";
export default {
  components: {
    // Layout,
    BlogDetail,
    BlogComment,
  },
  mixins: [fetchData(null), mainScroll("mainContainer")],
  methods: {
    async fetchData() {
      const resp = await getBlog(this.$route.params.id);
      titleController.setRouteTitle(resp.title);
      return resp;
    },
  },

  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style scoped lang="less">
.blog-detail-container,
.blog-comment-container{
  width: 60%;
  margin: 0 auto;
  // margin-top: 50px;
}
.blog-comment-container{
  margin-top: 300px;
}
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
</style>
