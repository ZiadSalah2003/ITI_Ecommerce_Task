let favContainer = document.querySelector(".products");

let favs = JSON.parse(localStorage.getItem("favs")) || [];

function displayFavs() {
    favContainer.innerHTML = "";

    if (favs.length === 0) {
        favContainer.innerHTML = "<h2>No favourite items Found</h2>";
        return;
    }

    for (let i = 0; i < favs.length; i++) {
        favContainer.innerHTML += `
            <div class="card">
                <div class="card-img">
                    <img src="${favs[i].image}">
                </div>

                <div class="card-content">
                    <p class="product-name">${favs[i].name}</p>
                    <p class="product-price">${favs[i].price}</p>

                    <button class="remove-btn" data-index="${i}">
                        Remove
                    </button>
                </div>
            </div>
        `;
    }

    document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            let index = this.getAttribute("data-index");

            favs.splice(index, 1);
            localStorage.setItem("favs", JSON.stringify(favs));

            displayFavs();
        });
    });
}
displayFavs();
