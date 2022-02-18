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
    price: 4.5,
  },
  {
    name: "herbal",
    category: "tea",
    descName: "herbal tea",
    desc: "note: sweet, hibiscus, raspberry",
    img: "assets/img/herbalTea.png",
    price: 3.5,
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
  const filtered =
    category === "all"
      ? array
      : array.filter((item) => item.category === category);

  filtered.forEach((product, i) => {
    const newDiv = document.createElement("div");
    const divImg = document.createElement("img");
    const divTitle = document.createElement("a");
    const divAddToCart = document.createElement("img");
    const divInfo = document.createElement("img");
    const divDesc = document.createElement("p");

    newDiv.classList.add("product");
    // Products Main image
    divImg.setAttribute("src", product.img);
    divImg.classList.add("divImg");
    // Product Nameplate / Info Link
    divTitle.setAttribute("href", "#");
    divTitle.setAttribute("data-name", product.name);
    divTitle.classList.add("divTitle");
    divTitle.textContent = product.name;
    // Add to Cart icon / link
    divAddToCart.classList.add("divAddToCart");
    divAddToCart.setAttribute("src", "assets/img/plusSign.svg");
    divAddToCart.setAttribute("data-name", product.name);
    // Info icon
    divInfo.classList.add("divInfo");
    divInfo.setAttribute("src", "assets/img/infoIcon.svg");
    // shows product decription
    divDesc.classList.add("divDesc");
    // divDesc.classList.add("hide");
    divDesc.setAttribute("data-name", product.name);
    divDesc.innerHTML += `${product.descName} <br />`;
    divDesc.innerHTML += `$${product.price.toFixed(2)} <br />`;
    divDesc.innerHTML += `${product.desc} <br />`;
    // Appends these things to product, then appends product to .items-container
    newDiv.append(divImg);
    newDiv.append(divAddToCart);
    newDiv.append(divInfo);
    newDiv.append(divTitle);
    newDiv.append(divDesc);
    itemsContainer.append(newDiv);
  });
};
displayProducts(products, "all");

itemsContainer.addEventListener("click", (e) => {
// Finds the product with a name that matches the button's data-name
  const foundProduct = (array,target) => {
    return products.find((product) => {
      return product.name === e.target.dataset.name;
    });
  }
// Listens to item container for clicks on elements with "divAddToCart" class ; pushes item to cart if clicked
  if (e.target.classList.contains("divAddToCart")) {
    // Finds the product that matches the buttons data-name
    cart.push(foundProduct(products,e.target.dataset.name));
    console.log(cart);
  }
// Listens for clicks on "divTitle" and hides / unhides description
  if (e.target.classList.contains("divTitle")) {
    let selected = e.target.parentNode.querySelector(".divDesc");
    selected.classList.toggle("hide");
    console.log(selected.classList);
    // console.log(selected);
    // console.log(nodeList);
    // .find((node)=> {
    //   return node.dataset.name === e.target.dataset.name;
    // });
    // console.log(nodeList);
    // foundProduct();
    // e.divDesc.classList.toggle("hide");
  }
});
