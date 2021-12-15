import Mock from "mockjs";
import qs from "querystring";
Mock.mock("/api/blogtype", "get", {
  code: 0,
  msg: "",
  "data|10-20": [{
    "id|+1": 1,
    name: "classify:@id",
    "articleCount|0-300": 0,
    "order|+1": 1,
  }, ],
});

Mock.mock(/^\/api\/blog(\?.+)?$/, "get", function (options) {
  const query = qs.parse(options.url);

  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      "total|2000-3000": 0,
      [`rows|${query.limit || 10}`]: [{
        id: "@guid",
        title: "@title(1, 50)",
        description: "@paragraph(1, 10)",
        category: {
          "id|1-10": 0,
          name: "classify:@id",
        },
        "scanNumber|0-3000": 0,
        "commentNumber|0-300": 30,
        "thumb|1": ["@image(300x250, @color, #fff, @natural)"],
        createDate: "@date('T')",
      }, ],
    },
  });
});

Mock.mock(/^\/api\/blog\/[^/]+$/, "get", {
  code: 0,
  msg: "",
  data: {
    id: "@guid",
    title: "Casdassadasdasdds",
    category: {
      "id|1-10": 1,
      name: "classify:@id",
    },
    description: "@paragraph(1, 10)",
    "scanNumber|0-10000": 0,
    "commentNumber|0-100": 0,
    createDate: "@date('T')",
    "thumb|1": [
      Mock.Random.image("300x250", "#000", "#fff", "Random Image"),
      null,
    ],
    htmlContent: `<div>ssdas</div>`,
  },
});

Mock.mock("/api/comment", "post", {
  code: 0,
  msg: "",
  data: {
    id: "@guid",
    nickname: "@name",
    content: "@paragraph(1, 10)",
    createDate: Date.now(),
    "avatar|1": [
      "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
      "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
      "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
      "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
    ],
  },
});

Mock.mock(/^\/api\/comment\/?(\?.+)?$/, "get", function (options) {
  const query = qs.parse(options.url);

  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      total: 52,
      [`rows|${query.limit || 10}`]: [{
        id: "@guid",
        nickname: "@name",
        content: "@paragraph(1, 10)",
        createDate: Date.now(),
        "avatar|1": [
          "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
          "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
          "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
          "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
        ],
      }, ],
    },
  });
});