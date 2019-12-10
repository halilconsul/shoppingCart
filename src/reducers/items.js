const initialState = [
  {
    id: 1,
    title: "Lorem, ipsum dolor",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus excepturi fugiat reprehenderit, ex facilis.",
    newPrice: "$1203.00",
    oldPrice: "$1566.00",
    image:
      "https://icon-library.net/images/placeholder-image-icon/placeholder-image-icon-14.jpg",
    model: "ADS-5689",
    bestSeller: true,
    label: "some label"
  },
  {
    id: 2,
    title: "Lorem, ipsum dolor",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus excepturi fugiat reprehenderit, ex facilis.",
    newPrice: "$2203.00",
    oldPrice: "$4566.00",
    image:
      "https://icon-library.net/images/placeholder-image-icon/placeholder-image-icon-14.jpg",
    model: "BDS-5689",
    bestSeller: true,
    label: "some label"
  },
  {
    id: 3,
    title: "Lorem, ipsum dolor",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus excepturi fugiat reprehenderit, ex facilis.",
    newPrice: "$4203.00",
    oldPrice: "$5566.00",
    image:
      "https://icon-library.net/images/placeholder-image-icon/placeholder-image-icon-14.jpg",
    model: "DDS-8689",
    bestSeller: false,
    label: "some label"
  },
  {
    id: 4,
    title: "Lorem, ipsum dolor",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus excepturi fugiat reprehenderit, ex facilis.",
    newPrice: "$3203.00",
    oldPrice: "$5566.00",
    image:
      "https://icon-library.net/images/placeholder-image-icon/placeholder-image-icon-14.jpg",
    model: "ASW-5689",
    bestSeller: false,
    label: "some label"
  },
  {
    id: 5,
    title: "Lorem, ipsum dolor",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus excepturi fugiat reprehenderit, ex facilis.",
    newPrice: "$4203.00",
    oldPrice: "$7566.00",
    image:
      "https://icon-library.net/images/placeholder-image-icon/placeholder-image-icon-14.jpg",
    model: "WDS-5689",
    bestSeller: false,
    label: "some label"
  }
];

const initialStateObj = {
  1: {
    title: "Lorem, ipsum dolor",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus excepturi fugiat reprehenderit, ex facilis.",
    newPrice: "$1203.00",
    oldPrice: "$1566.00",
    image:
      "https://icon-library.net/images/placeholder-image-icon/placeholder-image-icon-14.jpg",
    model: "ADS-5689",
    bestSeller: true,
    label: "some label",
    options: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas"
    ]
  },
  2: {
    title: "Lorem, ipsum dolor",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus excepturi fugiat reprehenderit, ex facilis.",
    newPrice: "$2203.00",
    oldPrice: "$4566.00",
    image:
      "https://icon-library.net/images/placeholder-image-icon/placeholder-image-icon-14.jpg",
    model: "BDS-5689",
    bestSeller: true,
    label: "some label",
    options: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas"
    ]
  },
  3: {
    title: "Lorem, ipsum dolor",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus excepturi fugiat reprehenderit, ex facilis.",
    newPrice: "$4203.00",
    oldPrice: "$5566.00",
    image:
      "https://icon-library.net/images/placeholder-image-icon/placeholder-image-icon-14.jpg",
    model: "DDS-8689",
    bestSeller: false,
    label: "some label",
    options: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas"
    ]
  },
  4: {
    title: "Lorem, ipsum dolor",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus excepturi fugiat reprehenderit, ex facilis.",
    newPrice: "$3203.00",
    oldPrice: "$5566.00",
    image:
      "https://icon-library.net/images/placeholder-image-icon/placeholder-image-icon-14.jpg",
    model: "ASW-5689",
    bestSeller: false,
    label: "some label",
    options: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas"
    ]
  },
  5: {
    title: "Lorem, ipsum dolor",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus excepturi fugiat reprehenderit, ex facilis.",
    newPrice: "$4203.00",
    oldPrice: "$7566.00",
    image:
      "https://icon-library.net/images/placeholder-image-icon/placeholder-image-icon-14.jpg",
    model: "WDS-5689",
    bestSeller: false,
    label: "some label",
    options: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas"
    ]
  }
};

const items = (state = initialStateObj, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default items;
