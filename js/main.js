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

