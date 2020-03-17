let shoppingCart = [];

// if shoppingCart items exists in localstorage update our shoppingCart Array with current items
if (localStorage.shoppingCart) {
    shoppingCart.push.apply(
        shoppingCart,
        JSON.parse(localStorage.getItem("shoppingCart"))
    );
    updateCartDisplay();
}

// fetch objects from JSON
fetch("products.json")
    .then(response => response.json())
    .then(products => {
        displayAllProducts(products);
    })
    .catch(error => console.error(error));

// Allow toggling shopping cart visibility
let cartToggle = document.getElementById("shopping-cart-button");
cartToggle.addEventListener("click", function (e) {
    let cartElement = document.getElementById("shopping-cart");
    let initallyHidden = cartElement.style.display === "none";
    cartToggle.innerHTML = `<h2>${initallyHidden ? "Dölj" : "Visa"} varukorg</h2>`;
    cartElement.style.display = initallyHidden ? "block" : "none";
});

function displayAllProducts(products) {
    let productContainer = document.getElementById("product-content");

    products.forEach(mobile => {
        let card = getProductListing(mobile);
        productContainer.appendChild(card);
    });
}

function getProductListing(product) {
    let card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `<div class="product-img"><img src="${product.img}" alt="${product.brand} ${product.model} ${product.memory}" height="200"> </div>`;

    let prodDescription = document.createElement("div");
    prodDescription.className = "product-description";
    prodDescription.innerHTML =
        `<h3>${product.brand} ${product.model} ${product.memory} ( ${product.color} )</h3>
        <p>${product.desc}</p>
        <h4>Pris: ${product.price} kr</h4>
        <br>`;

    let quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = "1";
    quantityInput.min = "1";
    quantityInput.pattern = "[0-9]";

    let button = document.createElement("button");
    button.textContent = "Köp";
    button.addEventListener("click", function (e) {
        addToCart(product, quantityInput.value);
    });

    prodDescription.appendChild(quantityInput);
    prodDescription.appendChild(button);
    card.appendChild(prodDescription);
    return card;
}

// function to add products into shoppingCart, based on if product exists or does not exists
// for handling quantity!

function addToCart(mobile, quantity) {
    let isInCart = false;

    for (product of shoppingCart) {
        if (product.id === mobile.id) {
            product.quantity += Number(quantity);
            isInCart = true;
            break;
        }
    }

    if (!isInCart) {
        mobile.quantity = Number(quantity);
        shoppingCart.push(mobile);
    }

    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    updateCartDisplay();
}

//Populates shopping cart with new / modified data
function updateCartDisplay() {
    let cartElement = document.getElementById("shopping-cart");

    if (shoppingCart.length === 0) {
        cartElement.innerHTML = "<p>Varukorgen är tom.</p>";
    } else {
        cartElement.innerHTML = "";
        cartElement.appendChild(getCartTable());
        cartElement.appendChild(getOrderControls());
    }
}

function getCartTable() {
    let cartTable = document.createElement("table");
    cartTable.id = "cart-table";
    cartTable.innerHTML = `
    <thead>
            <tr>
                 <th>#</th>
                 <th>Produkt</th>
                 <th>Antal</th>
                 <th>Pris</th>
                 <th></th>
            </tr>
    </thead>`;

    let tableBody = document.createElement("tbody");
    // Using for-loop for identifying the specific object that we want to delete from our Array and update localstorage data
    for (let i = 0; i < shoppingCart.length; i++) {
        const item = shoppingCart[i];

        let tableRow = document.createElement("tr");
        let imgCell = document.createElement('td');
        let productCell = document.createElement('td');
        let quantityCell = document.createElement('td');
        let priceCell = document.createElement('td');
        let btnCell = document.createElement('td');

        let inputQuantity = document.createElement('input');
        inputQuantity.type = 'number';
        inputQuantity.value = item.quantity;
        inputQuantity.min = 1;

        let removeItemBtn = document.createElement('button');
        removeItemBtn.innerText = 'Ta bort';

        // Adding an EventListener for each specific item that we want to delete from
        // our shoppingcart, then update localstorage data

        removeItemBtn.addEventListener('click', e => {
            shoppingCart.splice(i, 1);
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
            updateCartDisplay();
        });

        // Adds a listener to each input Element where changes are made for quantity on selected item

        inputQuantity.addEventListener('input', e => {
            item.quantity = Number(inputQuantity.value);
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
            updateCartDisplay();
        });

        // Populating our table with data that represents each items description

        imgCell.innerHTML = `<img src="${item.img}" alt="${item.brand} ${item.model} ${item.memory}" height="32px" width="32px">`;
        productCell.innerHTML = `<p>${item.brand} ${item.model} ${item.memory} </p>`;
        quantityCell.appendChild(inputQuantity);
        priceCell.innerHTML = `<p>${item.price}</p>`;
        btnCell.appendChild(removeItemBtn);

        // Appending all data to the table
        tableRow.appendChild(imgCell);
        tableRow.appendChild(productCell);
        tableRow.appendChild(quantityCell);
        tableRow.appendChild(priceCell);
        tableRow.appendChild(btnCell);

        tableBody.appendChild(tableRow);
    }
    cartTable.appendChild(tableBody);
    return cartTable;
}

function getOrderControls() {
    // Display price for order
    let finalPrice = 0;

    shoppingCart.forEach(item => {
        finalPrice += Number(item.price) * Number(item.quantity);
    });

    let orderControls = document.createElement("div");
    orderControls.className = "cart-order-controls";

    let emptyCartBtn = document.createElement('button');
    let confirmOrderBtn = document.createElement('button');
    let displayPaymentLabel = document.createElement('p');

    // Adding eventListener for empty shoppingCart & processing order completion
    emptyCartBtn.addEventListener('click', e => {
        shoppingCart = [];
        localStorage.clear();
        updateCartDisplay();
    });

    confirmOrderBtn.addEventListener('click', e => {
        window.location.href = 'order.html';
    });

    // Setting attributes for each element
    emptyCartBtn.innerText = 'Töm varukorg';
    confirmOrderBtn.innerText = 'Slutför order';
    displayPaymentLabel.innerHTML = `<strong>Summa:</strong> ${finalPrice} kr`;

    orderControls.appendChild(displayPaymentLabel);
    orderControls.appendChild(emptyCartBtn);
    orderControls.appendChild(confirmOrderBtn);
    return orderControls;
}