const products = [
  {
    name: "green",
    category: "tea",
    description: "freshly prepared",
    price: 3.5,
  },
  {
    name: "black",
    category: "tea",
    description: "freshly prepared",
    price: 3.5,
  },
  {
    name: "oolong",
    category: "tea",
    description: "freshly prepared",
    price: 4.5,
  },
  {
    name: "herbal",
    category: "tea",
    description: "freshly prepared",
    price: 4.25,
  },
  {
    name: "flower",
    category: "tea",
    description: "freshly prepared",
    price: 4.25,
  },
  {
    name: "chai",
    category: "tea",
    description: "freshly prepared",
    price: 4.25,
  },
  {
    name: "matcha",
    category: "tea",
    description: "freshly prepared",
    price: 4.25,
  },
  {
    name: "coffee",
    category: "coffee",
    description: "freshly prepared",
    price: 4.25,
  },
  {
    name: "Latte",
    category: "coffee",
    description: "freshly prepared",
    price: 4.25,
  },
  {
    name: "chocolate cookie",
    category: "snack",
    description: "freshly prepared",
    price: 4.25,
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
    newDiv.textContent = "test";
    newDiv.classList.add("product");
    itemsContainer.append(newDiv);
    console.log(product);
  });
};
displayProducts(products, "all");
