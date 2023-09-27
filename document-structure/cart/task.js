const dictionary = {
    "1": 1,
    "2": 1,
    "3": 1,
    "4": 1,
};
const cartProductsDictionary = {
    "1": null,
    "2": null,
    "3": null,
    "4": null,
};
const products = Array.from(document.querySelectorAll(".product"));
const cartProducts = document.querySelector(".cart__products");
products.forEach((product) => {
    const id = product.attributes["data-id"].value;
    const decrease = product.querySelector(".product__quantity-control_dec");
    const increase = product.querySelector(".product__quantity-control_inc");
    const button = product.querySelector(".product__add");
    const image = product.querySelector(".product__image");
    decrease.addEventListener("click", () => {
        dictionary[id] = dictionary[id] - 1;
        renderValue(product, dictionary[id]);
    });
    increase.addEventListener("click", () => {
        dictionary[id] = dictionary[id] + 1;
        renderValue(product, dictionary[id]);
    });
    button.addEventListener("click", () => {
        const count = dictionary[id];
        const cartProduct = createCartProductHtml(count, image.src, id);
        if (cartProductsDictionary[id] === null) {
            cartProducts.append(cartProduct);
            cartProductsDictionary[id] = count;
        }
        else {
            const cartProduct = cartProducts.querySelector(`[data-id="${id}"]`);
            const value = cartProduct.querySelector(".cart__product-count");
            value.textContent = (+value.textContent + count).toString();
        }
    });
});
function renderValue(product, value) {
    const valueElement = product.querySelector(".product__quantity-value");
    valueElement.textContent = value.toString();
}
function createCartProductHtml(countValue, imgSrc, dataId) {
    const count = document.createElement("div");
    count.classList.add("cart__product-count");
    count.textContent = countValue.toString();
    const img = document.createElement("img");
    img.classList.add("cart__product-image");
    img.src = imgSrc;
    const cartProduct = document.createElement("div");
    cartProduct.classList.add("cart__product");
    cartProduct.setAttribute("data-id", dataId);
    cartProduct.append(img);
    cartProduct.append(count);
    return cartProduct;
}