let cartContainer = document.querySelector(".products");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
    let total = 0;
    let html = "";

    cart.forEach(item => {
        total += item.price * item.qty;

        html += `
            <div class="card">
                <div class="card-img">
                    <img src="${item.image}">
                </div>

                <p class="product-name">${item.name}</p>

                <div class="price-qty-row">
                    <span class="unit-price">$${item.price}</span>
                    <span>x</span>
                    <div class="qty-buttons">
                        <button class="qty-btn minus">−</button>
                        <span class="qty">${item.qty}</span>
                        <button class="qty-btn plus">+</button>
                    </div>
                </div>

                <p class="subtotal">Subtotal: $${item.price * item.qty}</p>

                <button class="remove-btn">Remove</button>
            </div>
        `;
    });

    html += `<h3 class="total">Total: $${total}</h3>`;
    cartContainer.innerHTML = html;

    cartContainer.querySelectorAll(".card").forEach((card, index) => {
        const item = cart[index];

        card.querySelector(".plus").addEventListener("click", () => {
            item.qty++;
            localStorage.setItem("cart", JSON.stringify(cart));
            displayCart();
        });

        card.querySelector(".minus").addEventListener("click", () => {
            if (item.qty > 1) {
                item.qty--;
            } else {
                cart.splice(index, 1);
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            displayCart();
        });

        card.querySelector(".remove-btn").addEventListener("click", () => {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            displayCart();
        });
    });
}

displayCart();
