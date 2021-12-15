import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  mes: "",
  data: [{
      id: "1",
      midImg: "https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098__340.jpg",
      bigImg: "https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098_960_720.jpg",
      title: "著者-WikiImages",
      description: "無料の素材提供サイト-Pixabay",
    }, {
      id: "2",
      midImg: "https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107__340.jpg",
      bigImg: "https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_960_720.jpg",
      title: "著者-WikiImages",
      description: "無料の素材提供サイト像-Pixabay",
    },
    {
      id: "3",
      midImg: "https://cdn.pixabay.com/photo/2011/12/13/14/29/moon-11010__340.jpg",
      bigImg: "https://cdn.pixabay.com/photo/2011/12/13/14/29/moon-11010_960_720.jpg",
      title: "著者-WikiImages",
      description: "無料の素材提供サイト-Pixabay",
    },

  ]
});