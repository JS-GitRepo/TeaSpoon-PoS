const products = [
  {
    name: "green",
    category: "tea",
    descName: "green tea",
    desc: "note: fresh, rich, sweet",
    img: "assets/img/greenTea.png",
    price: 3.5,
  },
  {
    name: "black",
    category: "tea",
    descName: "black tea",
    desc: "note: dark, caramel, thick",
    img: "assets/img/blackTea.png",
    price: 3.5,
  },
  {
    name: "flower",
    category: "tea",
    descName: "flower tea",
    desc: "note: chamomile, clean, refreshing",
    img: "assets/img/chamomileTea.png",
    price: 3.5,
  },
  {
    name: "chai",
    category: "tea",
    descName: "chai tea",
    desc: "note: rich, spice, cinnamon",
    img: "assets/img/chaiTea.png",
    price: 4,
  },
  {
    name: "oolong",
    category: "tea",
    descName: "oolong tea",
    desc: "note: cotton candy, smooth, sweet",
    img: "assets/img/oolongTea.png",
    price: 4.50,
  },
  {
    name: "herbal",
    category: "tea",
    descName: "herbal tea",
    desc: "note: sweet, hibiscus, raspberry",
    img: "assets/img/herbalTea.png",
    price: 3.50,
  },
  {
    name: "matcha",
    category: "tea",
    descName: "matcha tea",
    desc: "note: nori, sweet, rich",
    img: "assets/img/matchaTea.png",
    price: 4,
  },
  {
    name: "chai latte",
    category: "latte",
    descName: "chai latte",
    desc: "note: creamy, rich, spice, cinnamon",
    img: "assets/img/chaiTea.png",
    price: 5,
  },
  {
    name: "matcha latte",
    category: "latte",
    descName: "matcha latte",
    desc: "note: creamy, nori, sweet, rich",
    img: "assets/img/matchaLatte.png",
    price: 5,
  },
  {
    name: "latte",
    category: "latte",
    descName: "espresso latte",
    desc: "note: milk chocolate, brown sugar, orange peel",
    img: "assets/img/coffLatte.png",
    price: 4,
  },
  {
    name: "hot coffee",
    category: "coffee",
    descName: "hot coffee",
    desc: "note: chocolate, cherry, grape",
    img: "assets/img/hotCoffee.png",
    price: 4.5,
  },
  {
    name: "cold coffee",
    category: "coffee",
    descName: "cold coffee",
    desc: "note: chocolate, caramel, hazelnut",
    img: "assets/img/coldCoffee.png",
    price: 4.5,
  },
  {
    name: "cookie",
    category: "snack",
    descName: "chocolate chip cookie",
    desc: "note: chocolate, chip, cookie!",
    img: "assets/img/chocChipCookie.png",
    price: 2,
  },
  {
    name: "donut",
    category: "snack",
    descName: "cookie and cream donut",
    desc: "note: cookies, cream, donut!",
    img: "assets/img/cncDonut.png",
    price: 2,
  },
];

//Variables
const categorySelection = document.querySelector(".category-selection");
const teaClick = document.querySelector(".tea-btn");
const coffeeClick = document.querySelector(".coffee-btn");
const teaLatteClick = document.querySelector(".teaLatte-btn");
const snackClick = document.querySelector(".snack-btn");
const allItemsClick = document.querySelector(".snack-btn");
const itemsContainer = document.querySelector(".items-container");
const cart = [];

// Function that displays products in .item-container. Checks to see if the category is "all" (which is default) and if not it filters items by the category selected. This is all built and then appended to .items-container.
const displayProducts = (array, category) => {
  const filtered = (category === "all")
      ? array
      : array.filter((item) => item.category === category);

  filtered.forEach((product, i) => {
    const newDiv = document.createElement("div");
    const divImg = document.createElement("img");
    const divTitle = document.createElement("a");
    const divAddToCart = document.createElement("span")
    newDiv.classList.add("product");
// Products Main image
    divImg.setAttribute("src", product.img);
    divImg.classList.add("productImg")
// Product Nameplate / Info Link
    divTitle.setAttribute("href","#")
    divTitle.classList.add("productTitle")
    divTitle.textContent = product.name;
// Add to Cart icon / link
    divAddToCart.classList.add("material-icons-outlined")
    divAddToCart.textContent = "add";
// Appends these things to product, then appends product to .items-container
    newDiv.append(divImg);
    newDiv.append(divTitle);
    itemsContainer.append(newDiv);
  });
};
displayProducts(products, "all");
