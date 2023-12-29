function addToCart(item) {
    
    var cart = document.getElementById("items");

    var listItem = document.createElement("li");

    listItem.classList.add("active");

    listItem.textContent = item;

    cart.appendChild(listItem);
}
