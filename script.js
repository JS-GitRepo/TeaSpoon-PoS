const products = [
  {
    name: "green",
    category: "tea",
    descName: "green tea",
    desc: "note: fresh, rich, sweet",
    price: 3.5,
  },
  {
    name: "black",
    category: "tea",
    descName: "black tea",
    desc: "note: dark, caramel, thick",
    price: 3.5,
  },
  {
    name: "flower",
    category: "tea",
    descName: "flower tea",
    desc: "note: chamomile, clean, refreshing",
    price: 3.5,
  },
  {
    name: "chai",
    category: "tea",
    descName: "chai tea",
    desc: "note: rich, spice, cinnamon",
    price: 4,
  },
  {
    name: "oolong",
    category: "tea",
    descName: "oolong tea",
    desc: "note: cotton candy, smooth, sweet",
    price: 4.50,
  },
  {
    name: "herbal",
    category: "tea",
    descName: "herbal tea",
    desc: "note: sweet, hibiscus, raspberry",
    price: 3.50,
  },
  {
    name: "matcha",
    category: "tea",
    descName: "matcha tea",
    desc: "note: nori, sweet, rich",
    price: 4,
  },
  {
    name: "chai latte",
    category: "latte",
    descName: "chai latte",
    desc: "note: creamy, rich, spice, cinnamon",
    price: 5,
  },
  {
    name: "matcha latte",
    category: "latte",
    descName: "matcha latte",
    desc: "note: creamy, nori, sweet, rich",
    price: 5,
  },
  {
    name: "latte",
    category: "tea",
    descName: "matcha latte",
    desc: "note: creamy, nori, sweet, rich",
    price: 5,
  },
];

//variables
const categorySelection = document.querySelector(".category-selection");
const teaClick = document.querySelector(".tea-btn");
const coffeeClick = document.querySelector(".coffee-btn");
const teaLatteClick = document.querySelector(".teaLatte-btn");
const snackClick = document.querySelector(".snack-btn");
const allItemsClick = document.querySelector(".snack-btn");
const itemsContainer = document.querySelector(".items-container");
const cart = [];

const displayProducts = (array, category) => {
  const filtered =
    category === "all"
      ? array
      : array.filter((item) => item.category === category);

  filtered.forEach((product, i) => {
    const newDiv = document.createElement("div");
    const newImg = document.createElement("img");
    const newButton = document.createElement("button");
    newImg.setAttribute("src", product.img);
    newDiv.classList.add("product");
    newDiv.append(newImg);
    itemsContainer.append(newDiv);
    console.log(product);
  });
};
displayProducts(products, "all");
