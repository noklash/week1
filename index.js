// IMPORT RAW DATA
import data from "./data.js";

// TARGETS HTML ELEMENTS RENDERED ON THE DOM
let select = document.getElementById("selectedEl")
let total = document.getElementById("totalEl")
let main = document.getElementById("mainEl")
let side = document.getElementById("sidEl")
let prot = document.getElementById("proteinEl")
// let input = document.getElementById("inputEl")


// FILTERS IMPORTED DATA BASED ON TYPE
const filterByType = (type) => data.filter((food) => food.type === type )

// CALLS THE FUNCTION IN VARIABLE DECLARATION, PASSING THE VALUE OF TYPE AS ARGUMENT
const mainFood = filterByType("mn");
const sideTops = filterByType("sd")
const protein = filterByType("pt")



let totalPrice;
let selected = []

// RENDERS THE COMPONENT TO UPDATE CHANGES IN REAL-TIME
const reRender = (arr) => {
    // CLEARS PREVIOUS VALUES 
    select.innerHTML = ""
    total.innerHTML = ""
    
    // LOOPS THROUGH THE ARRAY PASSED AS ARGUMENT
    arr?.forEach( (food, i) => {
        // CREATES A HTML  ELEMENTS
        const foodEl = document.createElement("li")
        const foodPriceEl = document.createElement("span")
        // RENDERS THE VALUES IN THE ARRAY ON THE UI
        foodPriceEl.innerHTML = food.price;
        foodEl.innerHTML = food.name
        // NESTS THE NEW ELEMENTS IN AN EXISTING ONE 
        foodEl.appendChild(foodPriceEl)
        select.appendChild(foodEl)

    // REMOVES A SELECTED ITEM FROM LIST
        const removeFood = (e) => {
            e.preventDefault(); 
            selected = selected.filter((food) => food !== selected[i])
            reRender(selected)
        }

        foodEl.addEventListener("click", removeFood)
    });

    // SUMS THE PRICES OF ITEMS IN THE ARRAY
    totalPrice = arr.reduce((sum, food) => sum + food.price, 0)

    // FORMATS THE VALUE TO DECIMAL AND CURRENCY FORMAT WITH COMMAS
    const formattedTotalPrice = totalPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    // RENDERS THE THE FORMATTED VALUE ON THE UI
    total.innerHTML = formattedTotalPrice

}


// RENDERS A CATEGORY, USING TYPE ARRAY AND DOM LOCATION (WHAT to render AND WHERE to render it)
const renderType = (typeArr, renderDom ) => {
    typeArr.forEach( (food, i ) => {
        const foodEl = document.createElement("li")
        const foodPriceEl = document.createElement("span")
        foodPriceEl.innerHTML = food.price;
        foodEl.innerHTML = food.name 
        foodEl.appendChild(foodPriceEl)
        // ADDS A NEW NEW ITEM ON BUTTON CLICK
        const handleClick = (e) => {
            // PREVENTS PAGE RELOAD
            e.preventDefault(); 
            // ADDS A NEW ITEM TO THE SELECTED ARRAY
            selected.push(typeArr[i])
            // CALLS THE FUNCTION TO TRIGGER A RE-RENDER TO UPDATE NEW VALUES
            reRender(selected)
            
        }
        foodEl.addEventListener("click", handleClick)
        renderDom.appendChild(foodEl)
    });
}

// CALLS THE FUNCTION WHICH RENDERS CATEGORIES
renderType(mainFood, main);
renderType(sideTops, side);
renderType(protein, prot);







