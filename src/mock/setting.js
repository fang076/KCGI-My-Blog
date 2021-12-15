import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://s2.loli.net/2021/12/14/YXKQk1NUc3eELqr.jpg",
    siteTitle: "KCGI-Fang",
    github: "https://github.com/fang076",
    qq: "366944138",
    qqQrCode:
      "https://s2.loli.net/2021/12/14/ZGLVHl2ptxIWFyY.jpg",
    weixin: "fangjian007",
    weixinQrCode:
      "https://s2.loli.net/2021/12/14/blBYra2mZscOi7z.jpg",
    mail: "houken076@yahoo.co.jp",
    icp: "浮生は夢の如し",
    githubName: "fang076",
    // 网站的图标
    favicon: "https://s2.loli.net/2021/12/14/YXKQk1NUc3eELqr.jpg",
  },
});
