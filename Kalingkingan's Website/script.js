

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};





const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});







document.addEventListener("DOMContentLoaded", () => {
    let cartIcon = document.querySelector("#cart-icon");
    let cart = document.querySelector(".cart");
    let closeCart = document.querySelector("#close-cart");

    // Open Cart
    cartIcon.onclick = () => {
        console.log("Cart icon clicked");  
        cart.classList.add("active");
    };

    // Close Cart
    closeCart.onclick = () => {
        console.log("Close cart clicked");  
        cart.classList.remove("active");
};

});

    function ready() {
        var removeCartButtons = document.getElementsByClassName("cart-remove");
        for (var button of removeCartButtons) {
            button.addEventListener("click", removeCartItem);
        }

        var quantityInputs = document.getElementsByClassName('cart-quantity');
        for (var input of quantityInputs) {
            input.addEventListener('change', quantityChanged);
        }

        let addCartButtons = document.getElementsByClassName("add-cart");
        console.log(addCartButtons); 
        for (let i = 0; i < addCartButtons.length; i++) {
        addCartButtons[i].addEventListener("click", addCartClicked);
        }

        document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
    }

    function buyButtonClicked() {
        alert("Your Order is placed");
        var cartContent = document.getElementsByClassName("cart-content")[0];
        while (cartContent.hasChildNodes()) {
            cartContent.removeChild(cartContent.firstChild);
        }
        updateTotal();
    }

    function removeCartItem(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.remove();
        updateTotal();
    }

    function quantityChanged(event) {
        var input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updateTotal();
    }

// Select all "Add to Cart" buttons
let addCartButtons = document.querySelectorAll(".add-cart");

// Function to handle "Add to Cart" button click
function addCartClicked(event) {
    let button = event.target;
    let shopProduct = button.parentElement;
    let title = shopProduct.querySelector(".product-title").innerText;
    let price = shopProduct.querySelector(".price").innerText;
    let productImg = shopProduct.querySelector(".product-img").src;

    console.log("Adding product:", title, price, productImg); 

    addProductToCart(title, price, productImg);
    updateTotal();
}

// Attach event listeners to all "Add to Cart" buttons
addCartButtons.forEach(button => {
    button.addEventListener("click", addCartClicked);
});

// Function to add product to the cart
function addProductToCart(title, price, productImg) {
    let cartContent = document.querySelector(".cart-content");
    let cartItemNames = cartContent.querySelectorAll(".cart-product-title");

    // Check if the product is already in the cart
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === title) {
            alert("This item is already added to the cart");
            return;
        }
    }

    // Create cart item
    let cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    let cartBoxContent = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class="bx bx-trash cart-remove"></i>`;

    cartShopBox.innerHTML = cartBoxContent;
    cartContent.append(cartShopBox);

    // Add event listeners for remove and quantity change
    cartShopBox.querySelector(".cart-remove").addEventListener("click", removeCartItem);
    cartShopBox.querySelector(".cart-quantity").addEventListener("change", quantityChanged);
}

// Function to remove cart item
function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

// Function to handle quantity changes
function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

// Function to update the total price
function updateTotal() {
    let cartContent = document.querySelector(".cart-content");
 
    ready();
};


const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});