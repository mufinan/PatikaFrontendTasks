
const initialBalance = 100000000000;
let balance = initialBalance;

const products = [
    { name: "Big Mac", price: 2, quantity: 0 },
    { name: "Bike", price: 500, quantity: 0 },
    { name: "Car", price: 20000, quantity: 0 },
    { name: "Private Jet", price: 10000000, quantity: 0 },
    { name: "Yacht", price: 50000000, quantity: 0 },
    { name: "Skyscraper", price: 850000000, quantity: 0 },
];

const balanceElement = document.getElementById("balance");
const productList = document.getElementById("product-list");
const receiptList = document.getElementById("receipt-list");
const totalElement = document.getElementById("total");

function updateBalance() {
    balanceElement.textContent = `$${balance.toLocaleString()}`;
}

function renderProducts() {
    productList.innerHTML = "";
    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";

        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toLocaleString()}</p>
            <p>Quantity: ${product.quantity}</p>
            <button class="buy" onclick="buyProduct(${index})" ${balance < product.price ? "disabled" : ""}>Buy</button>
            <button class="sell" onclick="sellProduct(${index})" ${product.quantity === 0 ? "disabled" : ""}>Sell</button>
        `;

        productList.appendChild(productDiv);
    });
}

function updateReceipt() {
    receiptList.innerHTML = "";
    let total = 0;
    products.forEach((product) => {
        if (product.quantity > 0) {
            const listItem = document.createElement("li");
            listItem.textContent = `${product.name} x${product.quantity} - $${(product.price * product.quantity).toLocaleString()}`;
            receiptList.appendChild(listItem);
            total += product.price * product.quantity;
        }
    });
    totalElement.textContent = `TOTAL: $${total.toLocaleString()}`;
}

function buyProduct(index) {
    const product = products[index];
    if (balance >= product.price) {
        balance -= product.price;
        product.quantity++;
        updateBalance();
        renderProducts();
        updateReceipt();
    }
}

function sellProduct(index) {
    const product = products[index];
    if (product.quantity > 0) {
        balance += product.price;
        product.quantity--;
        updateBalance();
        renderProducts();
        updateReceipt();
    }
}

updateBalance();
renderProducts();
