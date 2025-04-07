const products = [
  {
    id: 1,
    name: "koenigsegg agera r",
    price: 1000000,
    image: "assets/images/car1.jpeg",
  },
  {
    id: 2,
    name: "koenigsegg agera r",
    price: 2000000,
    image: "assets/images/car2.webp",
  },
  { id: 3, name: "Mclaren ", price: 3000000, image: "assets/images/car3.jpeg" },
  {
    id: 4,
    name: "koenigsegg agera r",
    price: 4000000,
    image: "assets/images/car4.jpeg",
  },
  {
    id: 5,
    name: "Bugatti Chirone",
    price: 5000000,
    image: "assets/images/car5.jpeg",
  },
  {
    id: 6,
    name: "koenigsegg agera r",
    price: 6000000,
    image: "assets/images/car6.jpeg",
  },
  {
    id: 7,
    name: "koenigsegg agera r",
    price: 7000000,
    image: "assets/images/car7.jpeg",
  },
  {
    id: 8,
    name: "koenigsegg agera r",
    price: 8000000,
    image: "assets/images/car8.jpeg",
  },
];

// Cart and total price
let cart = [];
let totalPrice = 0;

// Function to render product cards
function renderProducts() {
  const container = document.getElementById("product-container");
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    container.appendChild(card);
  });
}

// Function to add product to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    cart.push(product);
    totalPrice += product.price;
    updateCartDisplay();
  }
}

// Function to update cart display
function updateCartDisplay() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = `
        <h5>cart</h5>
        <div class="cart-items">
        <span>Total Items: ${cart.length}</span>
        <span>Total Price: $${totalPrice}</span>
        </div>`;
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartDisplay();
});
