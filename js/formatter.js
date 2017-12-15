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
                prod.discountPrice = calcDiscount(prod.price, category.discount);
            }
        });
        return prod; // dont forget to return!
    });
    console.log(prodsForDOM);
    DOM.displayProducts(prodsForDOM);
};

const calcDiscount = function(origPrice, discount) {
    return +(origPrice*(1.0 - discount)).toFixed(2);
}