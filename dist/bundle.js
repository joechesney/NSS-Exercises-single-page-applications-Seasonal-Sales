(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const seasonSelector = document.getElementById("seasonSelector");
const applyDiscount = () => {
    // we need season_discount and price and department category
    // we need to change the displayed price based on which season it has a discount
    console.log(event.target.value);
    
    
};

seasonSelector.addEventListener("change", applyDiscount);

},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
"use strict";
let DOM = require("./DOMOutputter");
// take the data from the XHRs and format it so it can go in the DOM
// We want to loop through the products and categories and add the department category to each product object, right before using that data to place into the DOM
module.exports.formatData = (catArr, prodArr) => {
    console.log("data", catArr, prodArr);
    let prodsForDOM = prodArr.map( (prod) => {
        catArr.forEach( (category) => {
            if(prod.category_id === category.id) {
                prod.category = category.name;
                // prod.discountPrice = (category.category_id * prod.).toFixed(2);//math;
            }
        });
        return prod; // dont forget to return!
    });
    console.log(prodsForDOM);
    DOM.displayProducts(prodsForDOM);
};

},{"./DOMOutputter":2}],4:[function(require,module,exports){
"use strict";
const formatter = require("./formatter.js");
require("./DOMInteractions");
// categories XHR
let categoryData = null; // declared globally so that we can pass it in as a parameter later
const categoryReq = new XMLHttpRequest();

const parseCatData = () => {
    const data = JSON.parse(event.target.responseText).categories;
    // formatData(data);
    categoryData = data;
    // console.log("categories", data);
    productsReq.send();
};

categoryReq.addEventListener("load", parseCatData);
categoryReq.open("GET", "data/categories.json");
categoryReq.send();



// products XHR
const productsReq = new XMLHttpRequest();

const parseProdData = () => {
    const pdata = JSON.parse(event.target.responseText).products;
    formatter.formatData(categoryData, pdata);
    // console.log("products", pdata);
};

productsReq.addEventListener("load", parseProdData);
productsReq.open("GET", "data/products.json");


},{"./DOMInteractions":1,"./formatter.js":3}]},{},[4]);
