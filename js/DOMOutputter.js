"use strict";

module.exports.displayProducts = (productsArr) => {
    console.log("displayProducts function: ", productsArr);
    productsArr.forEach( (product) => {
        let card = `<div class='prodCard'>
        <h2>${product.name}</h2>
        <p>${product.category}</p>
        <p>${product.price}</p>
        <p class="isHidden">${product.discountPrice}</p></div>`;
        let cardWrapper = document.createElement("div");
        cardWrapper.innerHTML = card;
        document.getElementById("products").appendChild(cardWrapper);
    });
};