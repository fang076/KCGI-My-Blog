import Mock from "mockjs";

Mock.mock(/^\/api\/project\/?$/, "get", {
  code: 0,
  msg: "",
  "data|10-20": [
    {
      id: "@guid",
      name: "@title(1, 10)",
      "url|1": ["@url", null],
      "github|1": ["@url", null],
      "description|1-4": ["@paragraph(1, 5)"],
      thumb: "@image(300x250, @color, #fff, @natural)",
    },
  ],
});
