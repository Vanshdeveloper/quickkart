let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find(p => p.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}

const productGrid = document.getElementById('productGrid');
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        renderProducts(data);
    })
    .catch(error => {
        console.error("Error loading products:", error);
    });

function renderProducts(products) {
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product";

        card.innerHTML = `
            <div class="product-img"><img src="${product.image}" alt="Product-image"></div>
            <div class="product-lowerSection">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <h3 class="product-price">₹ ${product.price}</h3>
                </div>
                <div class="add-to-cart-btn">
                    <button>Add to Cart</button>
                </div>
            </div>`;

        card.querySelector('button').addEventListener('click', () => {
            addToCart({ ...product, quantity: 1 });
        });

        productGrid.appendChild(card);
    });
}
