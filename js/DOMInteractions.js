"use strict";

const seasonSelector = document.getElementById("seasonSelector");
const applyDiscount = () => {
    // we need season_discount and price and department category
    // we need to change the displayed price based on which season it has a discount
    console.log(event.target.value);
    
    
};

seasonSelector.addEventListener("change", applyDiscount);
