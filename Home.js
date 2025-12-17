
     products = [
  { id: 1, name: "Smartphone X", title: "Smartphone X Pro", description: "High-performance smartphone with OLED display.", price: 799, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
  { id: 2, name: "Laptop Air", title: "Ultra Slim Laptop", description: "Lightweight laptop for work and gaming.", price: 1299, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
  { id: 3, name: "Bluetooth Headphones", title: "Wireless Noise Cancelling", description: "Immersive sound with deep bass.", price: 199, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
  { id: 4, name: "Smartwatch", title: "Fitness Smartwatch 2025", description: "Tracks health metrics all day.", price: 149, image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" },
  { id: 5, name: "Gaming Keyboard", title: "RGB Mechanical Keyboard", description: "Blue switch mechanical keyboard.", price: 89, image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68" },
  { id: 6, name: "Samrt Watch", title: "Ergonomic Pro Mouse", description: "Precision sensor and programmable buttons.", price: 49, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80" },
  { id: 7, name: "4K Monitor", title: "Ultra HD 27-inch Monitor", description: "Sharp and vivid colors for work and gaming.", price: 399, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
  { id: 8, name: "DSLR Camera", title: "Professional DSLR Camera", description: "High-quality photography tool.", price: 999, image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500&q=80" },
  { id: 9, name: "Wireless Speaker", title: "Portable Bluetooth Speaker", description: "Crystal clear sound on the go.", price: 59, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80" },
  { id: 10, name: "KeyBoard Pro", title: "10-inch HD Tablet", description: "Perfect for study, movies, and work.", price: 349, image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&q=80" },
  { id: 11, name: "Speaker", title: "Virtual Reality Set", description: "Immersive VR gaming experience.", price: 299, image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?w=500&q=80" },
  { id: 12, name: "Drone", title: "4K Camera Drone", description: "Perfect aerial photography.", price: 499, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794" },
  { id: 13, name: "Wireless Charger", title: "Wireless Earbuds", description: "With active noise cancellation.", price: 129, image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&q=80" },
  { id: 14, name: "SSD HardDesk", title: "Fast Charging 20000mAh", description: "Charge devices multiple times.", price: 39, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80" },
  { id: 15, name: "Powe Bank", title: "50-inch 4K Smart TV", description: "Netflix, YouTube, and more built-in.", price: 699, image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80" }
]
    var searchInput = document.getElementById("searchInput");
    var productContainer = document.getElementsByClassName("products")[0];
    searchInput.addEventListener("keyup", function () {
    var filter = searchInput.value.toLowerCase();
    productContainer.innerHTML = ""; 

        var filteredProducts = products.filter(function (products) {
            return products.name.toLowerCase().includes(filter);
        });
        if (filter === "") {
            filteredProducts = products;
        }   
        if (filteredProducts.length === 0) {
            productContainer.innerHTML = "<p>No results found</p>";
            return;
        }
        for(var p of filteredProducts){
            productContainer.innerHTML += `
            <div class="card">
                <div class="card-img">
                    <img src="${p.image}" alt="${p.name}">
                </div>
                <div class="card-contnet">
                    <p>${p.name}</p>
                    <p>$${p.price}</p>
                <div>
                <div class="card-btn">
                    <input class = "add-char" type = "button" value = 'Add To Chart'>
                    <input class = "add-fav" type = "button"  value = '❤️'>
                </div>
            </div>`;
        }
    });
    
    for (let p of products) {
            productContainer.innerHTML += `
            <div class="card">
                <div class="card-img">
                    <img src="${p.image}" alt="${p.name}">
                </div>
                <div class="card-contnet">
                    <p>${p.name}</p>
                    <p>$${p.price}</p>
                <div>
                <div class="card-bttn">
                    <input class = "add-char" type = "button" value = "Add To Chart">
                    <input class = "add-fav" type = "button"  value = '❤️'>
                </div>
            </div>`;
    }
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("add-char")) {
            
            let card = e.target.closest(".card");
            let name = card.querySelector(".card-contnet p").innerText;
            let price = Number(card.querySelector(".card-contnet p:nth-child(2)").innerText.replace("$",""));
            let image = card.querySelector("img").src;

            let product = {
                name,
                price,
                image,
                qty: 1 
            };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let f = false;

            for (let i = 0; i < cart.length; i++) {
                if (cart[i].name === product.name) {
                    cart[i].qty += 1;
                    f = true;
                    break;
                }
            }

            if (!f) {
                cart.push(product);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Added to Cart");
        }
    });

    document.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-fav")) {
            let card = e.target.closest(".card");

            let name = card.querySelector(".card-contnet p").innerText;
            let price = card.querySelector(".card-contnet p:nth-child(2)").innerText;
            let image = card.querySelector("img").src;

            let product = {
                name,
                price,
                image
            };
            let favs = JSON.parse(localStorage.getItem("favs")) || [];

            let exists = false;

            for (let i = 0; i < favs.length; i++) {
                if (favs[i].name === product.name) {
                    exists = true;
                    break;
                }
            }

            if (!exists) {
                favs.push(product);
                localStorage.setItem("favs", JSON.stringify(favs));
                alert("Added to favourites");
            } else {
                alert("Already added");
            }
        }
    });
