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
    img: "assets/img/chaiLatte.png",
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
    descName: "choc chip cookie",
    desc: "note: chocolate, chip, cookie!",
    img: "assets/img/chocChipCookie.png",
    price: 2,
  },
  {
    name: "donut",
    category: "snack",
    descName: "c&c donut",
    desc: "note: cookies, cream, donut!",
    img: "assets/img/cncDonut.png",
    price: 2,
  },
];

//// >>>>>>>>>>>>>>>>>>>>>>>> Variables <<<<<<<<<<<<<<<<<<<<<<<<
// Document Queries
const categorySelection = document.querySelector(".category-selection");
const teaClick = document.querySelector(".tea-btn");
const coffeeClick = document.querySelector(".coffee-btn");
const teaLatteClick = document.querySelector(".teaLatte-btn");
const snackClick = document.querySelector(".snack-btn");
const allItemsClick = document.querySelector(".snack-btn");
const itemsContainer = document.querySelector(".items-container");
const cartContainer = document.querySelector(".cart-container");
const cartContentsContainer = document.querySelector(".cart-contents-container");
const cartItemsDiv = document.querySelector(".cart-items-div");
const cartTotalsDiv = document.querySelector(".cart-totals-div");
const cartBtnContainer = document.querySelector(".cart-button-container");
const checkoutContainer = document.querySelector(".checkout-container");
const paymentMethodDiv = document.querySelector(".payment-method-div")
const paymentDivOne = document.querySelector(".payment-div-one");
const paymentDivTwo = document.querySelector(".payment-div-two");
const payNowButton = document.querySelector(".pay-now-btn");
const receiptContainer = document.querySelector(".receipt-container");

// Functionality Variables
let cart = [];
let subTotal = 0;
let taxTotal = 0;
let grandTotal = 0;
let paymentAmount = 0;
let receiptMessage = ``;


// // >>>>>>>>>>>>>>>>>>>>>>>> Display Products <<<<<<<<<<<<<<<<<<<<<<<<

// Function that displays products in .item-container. Checks to see if the category is "all" (which is default) and if not it filters items by the category selected. This is all built and then appended to .items-container.
const displayProducts = (array, category) => {
  const filtered =
    category === "all items"
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
    divImg.setAttribute("alt", product.descName);
    divImg.classList.add("divImg");
    // Product Nameplate / Info Link
    divTitle.setAttribute("href", "#");
    divTitle.setAttribute("data-name", product.name);
    divTitle.classList.add("divTitle");
    divTitle.textContent = product.name;
    // Add to Cart icon / link
    divAddToCart.classList.add("divAddToCart");
    divAddToCart.setAttribute("src", "assets/img/plusSign.svg");
    divAddToCart.setAttribute("alt", `Add ${product.descName} to cart`);
    divAddToCart.setAttribute("data-name", product.name);
    // Info icon
    divInfo.classList.add("divInfo");
    divInfo.setAttribute("src", "assets/img/infoIcon.svg");
    divInfo.setAttribute("alt", `${product.descName} information and description`);
    // shows product decription
    divDesc.classList.add("divDesc");
    divDesc.classList.add("hide");
    divDesc.setAttribute("data-name", product.name);
    divDesc.innerHTML += `${product.descName} <br />`;
    divDesc.innerHTML += `$${product.price.toFixed(2)} <br />`;
    divDesc.innerHTML += `${product.desc} <br />`;
    // console.log(divDesc);

    // Appends these things to product, then appends product to .items-container
    newDiv.append(divImg);
    newDiv.append(divAddToCart);
    newDiv.append(divInfo);
    newDiv.append(divTitle);
    newDiv.append(divDesc);
    itemsContainer.append(newDiv);
  });
};
displayProducts(products, "all items");



// >>>>>>>>>>>>>>>>>>>>>>>> Click Events <<<<<<<<<<<<<<<<<<<<<<<<
// Product Category Filters / Selection
categorySelection.addEventListener("click", (e) => {
  if (e.target.classList.contains("cat-btn")) {
    let clickedCategory = e.target.innerText;
    clearContainerContents(itemsContainer);
    displayProducts(products, clickedCategory.toLowerCase());
    // console.log(clickedCategory);
    // console.dir(categorySelection.childNodes[1].children);
    categorySelection.childNodes[1].childNodes.forEach((element)=> {
      if (element.childNodes[1]) {
        element.children[0].classList.remove("highlighted-cat");
      }
    })
  };
    e.target.classList.add("highlighted-cat");
  // console.dir(e);
});

// Individual Product Click Events
itemsContainer.addEventListener("click", (e) => {
  e.preventDefault();
  // Finds the product with a name that matches the button's data-name
  const foundProduct = () => {
    return products.find((product) => {
      return product.name === e.target.dataset.name;
    });
  };
    // Listens to item container for clicks on elements with "divAddToCart" class ; pushes item to cart if clicked
  if (e.target.classList.contains("divAddToCart")) {
    // Finds the product that matches the buttons data-name
    cart.unshift(foundProduct());
    console.log(cart);
    openCart();
    clearContainerContents(cartItemsDiv);
    clearContainerContents(cartTotalsDiv);
    printToCart();
    calcTotal();
  }
  // Listens for clicks on divTitle / divInfo and hides / unhides description
  if (
    e.target.classList.contains("divTitle") ||
    e.target.classList.contains("divInfo")
  ) {
    let selected = e.target.parentNode.querySelector(".divDesc");
    selected.classList.remove("hide");
    console.log(selected.classList);
  }
  // Adds hide class back in when description is clicked
  if (e.target.classList.contains("divDesc")) {
    let selected = e.target.parentNode.querySelector(".divDesc");
    selected.classList.add("hide");
  }
});

// Cart Button Events
cartContainer.addEventListener("click",(e)=> {
  if(e.target.classList.contains("cancel-btn")) {
    // cart = [];
    // cartContainer.classList.add("hide");
    // checkoutContainer.classList.add("hide");
    location.reload();
  }
  if(e.target.classList.contains("checkout-btn")) {
    if(e.target.textContent === "checkout") {
      checkoutContainer.classList.remove("hide");
      cartToCheckout();
    } else if (e.target.textContent === "cash") {
      clearContainerContents(paymentDivOne);
      clearContainerContents(paymentDivTwo);
      paymentCheckout();
      cashCheckout();
      console.log("Test");
    }
  }
  if(e.target.classList.contains("card-btn")) {
    clearContainerContents(paymentDivOne);
    clearContainerContents(paymentDivTwo);
    paymentCheckout();
    cardCheckout();
  }
  if(e.target.classList.contains("pay-now-btn")) {
    if(e.target.dataset.name === "cash") {
      if(cashValidation()) {
        receiptMessage =  `Your change due is: $${(paymentAmount-grandTotal).toFixed(2)}`;
        console.log(cashValidation());
        toReceiptScreen();
      } else {
        paymentInvalidMsg();
      }
    } else if (e.target.dataset.name === "card") {
      if(cardValidation()) {
        console.log(cardValidation());
        toReceiptScreen();
      } else {
        paymentInvalidMsg();
      }
    }
  }
})
// Checkout event listener 



// >>>>>>>>>>>>>>>>>>>>>>>> Functions <<<<<<<<<<<<<<<<<<<<<<<<
// Opens / unhides shopping cart
const openCart = () => {
  if (cart.length > 0) {
    cartContainer.classList.remove("hide");
  }
};
// Prints users cart items to "cartItemsDiv"
const printToCart = () => {
  cart.forEach((item, i) => {
    const newString = `${cart[i].descName}: $${cart[i].price.toFixed(2)}`;
    const newP = document.createElement("p");
    newP.append(newString);
    cartItemsDiv.append(newP);
  });
};
// Clears contents of a given container 
const clearContainerContents = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};
// Calculates and inserts cart totals 
const calcTotal = () => {
  subTotal = cart.reduce((pv, cv) => pv + cv.price, 0);
  taxTotal = subTotal * 0.06;
  grandTotal = subTotal + taxTotal;

  const subTotalString = `sub-total: $${subTotal.toFixed(2)}`;
  const subTotalP = document.createElement("p");
  subTotalP.append(subTotalString);
  cartTotalsDiv.append(subTotalP);

  const taxTotalString = `tax-total: $${taxTotal.toFixed(2)}`;
  const taxTotalP = document.createElement("p");
  taxTotalP.append(taxTotalString);
  cartTotalsDiv.append(taxTotalP);

  const grandTotalString = `grand-total: $${grandTotal.toFixed(2)}`;
  const grandTotalP = document.createElement("p");
  grandTotalP.append(grandTotalString);
  cartTotalsDiv.append(grandTotalP);
};
// Modifies cart for checkout screen
const cartToCheckout = () => {
  cartContainer.style.height = "400px";
  cartItemsDiv.style.maxHeight = "300px";
  let newBtn = document.createElement("button")
  newBtn.style.backgroundColor = "#215B72";
  newBtn.style.color = "#e5e5e5";
  newBtn.textContent = "card";
  newBtn.classList.add("card-btn");
  newBtn.classList.add("btn");
  cartBtnContainer.querySelector(".checkout-btn").textContent = "cash";
  cartBtnContainer.append(newBtn);

}
// Shows payment div to user, where either cash or credit can be displayed
const paymentCheckout = () => {
  const newPayNowButton = document.createElement("button");
  cartItemsDiv.style.maxHeight = "70px";
  paymentMethodDiv.classList.remove("hide");
  newPayNowButton.textContent = "pay now";
  newPayNowButton.classList.add("btn");
  newPayNowButton.classList.add("pay-now-btn");
  paymentDivTwo.append(newPayNowButton);
}
// Displays cash checkout
const cashCheckout = () => {
  const newCashInput = document.createElement("input");
  const newCashLabel = document.createElement("label");
  newCashInput.setAttribute("id","cashPay");
  newCashInput.setAttribute("name","cashPay");
  newCashInput.setAttribute("type","number");
  newCashInput.setAttribute("min","0.00");
  newCashInput.setAttribute("max","10000.00");
  newCashInput.setAttribute("step","0.01");
  newCashInput.setAttribute("placeholder","0.00");
  newCashInput.setAttribute("required", "");
  newCashLabel.setAttribute("for","cashPay");
  newCashLabel.textContent = "Cash Payment Amount: $";
  paymentDivOne.append(newCashLabel);
  paymentDivOne.append(newCashInput);
  paymentMethodDiv.querySelector(".pay-now-btn").setAttribute("data-name","cash");
  // payNowButton.setAttribute("data-name","cash")
  console.log(paymentMethodDiv.querySelector(".pay-now-btn"));
}
// Displays card checkout
const cardCheckout = () => {
  let newCardDiv = document.createElement("div");
  let newExpireDiv = document.createElement("div");
  let newCVVDiv = document.createElement("div");
  const newCardInput = document.createElement("input");
  const newCardLabel = document.createElement("label");
  const newExpireInput = document.createElement("input");
  const newExpireLabel = document.createElement("label");
  const newCVVInput = document.createElement("input");
  const newCVVLabel = document.createElement("label");
  newCardInput.setAttribute("id","cardPay");
  newCardInput.setAttribute("type","number");
  newCardInput.setAttribute("name","cardPay");
  newCardInput.setAttribute("max","9999999999999999");
  newCardInput.setAttribute("required", "");
  newCardLabel.setAttribute("for","cardPay");
  newCardLabel.textContent = "card number: "
  newExpireInput.setAttribute("id","cardExpire");
  newExpireInput.setAttribute("type","date");
  newExpireInput.setAttribute("name","cardExpire");
  newExpireInput.setAttribute("required", "");
  newExpireLabel.setAttribute("for","cardExpire");
  newExpireLabel.textContent = "expiration: "
  newCVVInput.setAttribute("id","cardCVV");
  newCVVInput.setAttribute("type","number");
  newCVVInput.setAttribute("name","cardCVV");
  newCVVInput.setAttribute("max","999");
  newCVVInput.setAttribute("required", "");
  newCVVLabel.setAttribute("for","cardCVV");
  newCVVLabel.textContent = "cvv: "
  newCardDiv.append(newCardLabel);
  newCardDiv.append(newCardInput);
  newExpireDiv.append(newExpireLabel)
  newExpireDiv.append(newExpireInput)
  newCVVDiv.append(newCVVLabel);
  newCVVDiv.append(newCVVInput);
  paymentDivOne.append(newCardDiv);
  paymentDivOne.append(newExpireDiv);
  paymentDivOne.append(newCVVDiv);
  paymentMethodDiv.querySelector(".pay-now-btn").setAttribute("data-name","card");
  console.log(paymentMethodDiv.querySelector(".pay-now-btn"));
}

// Cash validation
const cashValidation = () => {
  paymentAmount = document.querySelector("#cashPay").value;
  return paymentAmount >= grandTotal;
}
const cardValidation = () => {
  let today = new Date();
  let cardExpireInput = new Date(document.querySelector("#cardExpire").value);
  paymentAmount = grandTotal;
  return ((document.querySelector("#cardPay").value).length === 16) 
  &&  ((document.querySelector("#cardCVV").value).length === 3)
  &&  (cardExpireInput.getTime() >= today.getTime());
}
// Payment was invalid; do not proceed
const paymentInvalidMsg = () => {
  alert("Invalid or insufficient payment. Please try again!");
}
// Proceed to receipt screen
const toReceiptScreen = () => {
  const newDiv = document.createElement("div")
  const yourPayment = document.createElement("p");
  const receiptMessageP = document.createElement("p");
  const discount = document.createElement("p");
  const homeBtn = document.createElement("button");
  cartContainer.removeChild(paymentMethodDiv);
  cartContainer.style.height = "600px";
  cartItemsDiv.style.maxHeight = "400px";
  yourPayment.append(`Your payment was: $${Number(paymentAmount).toFixed(2)}.`)
  receiptMessageP.append(receiptMessage);
  discount.append(`You earned ${Math.floor((Math.random()*4)+1)*5}% off your next order!`);
  newDiv.classList.add("receipt-info")
  homeBtn.textContent = "home";
  homeBtn.classList.add("cancel-btn");
  newDiv.append(yourPayment);
  newDiv.append(receiptMessageP);
  newDiv.append(discount);
  // cartContainer.append(newDiv);
  cartContainer.insertBefore(newDiv, cartContainer.children[1]);
  clearContainerContents(cartBtnContainer);
  cartBtnContainer.append(homeBtn);
  cartContentsContainer.style.flex = "2";
}
