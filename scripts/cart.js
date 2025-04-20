let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainer = document.getElementById('cart-container');

function calculateTotal(cart) {
    return cart.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);
}

function updateLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {
    cartContainer.innerHTML = "";

    cart.forEach((product, index) => {
        const item = document.createElement('div');
        item.className = 'cart-item';
        item.innerHTML = `
        <div class="product-image">
        <img src="${product.image}" alt="product-image">
        </div>
        <div class="product-details">
        <h4>${product.name}</h4>
        <p>₹ ${product.price} x ${product.quantity}</p>
        </div>
        <div class="cta-btns">
        <div class="quantity">
        <p class="decrease">-<p>
        <h4>${product.quantity || 1}</h4>
        <p class="increase">+<p>
        </div>
        <button class="remove-btn" style="cursor: pointer;">Remove</button>
        </div>
        `;
        
        item.querySelector(".increase").addEventListener('click', () => {
            product.quantity = (product.quantity || 1) + 1;
            updateLocalStorage();
            renderCart();
        })

        item.querySelector(".decrease").addEventListener('click', () => {
            product.quantity = (product.quantity || 1) - 1;
            if(product.quantity < 1) product.quantity = 1;
            updateLocalStorage();
            renderCart();
        })

        item.querySelector(".remove-btn").addEventListener('click', () => {
            cart.splice(index, 1);
            updateLocalStorage();
            renderCart();
        });
        
        cartContainer.appendChild(item);
    });

    let totalAmount = calculateTotal(cart);
    document.getElementById('totalPrice').innerHTML = `₹ ${totalAmount}`;
}

document.getElementById('placeOrderBtn').addEventListener('click', () => {
    localStorage.removeItem("cart");
    alert("Order placed successfully!");
    renderCart();
})

renderCart();