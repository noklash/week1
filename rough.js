// let text1 = document.getElementById("textEl")
// let list = document.getElementById("listEl")
// let btn = document.getElementById("btnEl")



// let state = false;

// const setState = () => state = !state

// const renderList = () => {
//     setState();
    
//     if(state){
//         // let list = document.createElement('ul')
//         names.forEach( man  => {
//             const namesVal = document.createElement("li")
//                 namesVal.innerHTML = man
//                 const handleClick = () => alert(man)
//                 namesVal.addEventListener("click", handleClick)
//             list.appendChild(namesVal)
          
//         })
//     }else {
//         list.innerHTML = ""
//     }
   
// }




// btn.addEventListener("click", renderList);



// ROUGH 



// mainFood.forEach( (food, i ) => {
//     const foodEl = document.createElement("li")
//     const foodPriceEl = document.createElement("span")
//     foodPriceEl.innerHTML = food.price;
//     foodEl.innerHTML = food.name 
//     foodEl.appendChild(foodPriceEl)
//     // ADDS A NEW NEW ITEM ON BUTTON CLICK
//     const handleClick = (e) => {
//         // PREVENTS PAGE RELOAD
//         e.preventDefault(); 
//         // ADDS A NEW ITEM TO THE SELECTED ARRAY
//         selected.push(mainFood[i])
//         // CALLS THE FUNCTION TO TRIGGER A RE-RENDER TO UPDATE NEW VALUES
//         reRender(selected)
        
//     }
//     foodEl.addEventListener("click", handleClick)
//     main.appendChild(foodEl)
// });

// LOOPS THROUGH THE MAINFOOD ARRAY AND RENDERS ON THE DOM
// mainFood.forEach( (food, i ) => {
//     const foodEl = document.createElement("li")
//     const foodPriceEl = document.createElement("span")
//     foodPriceEl.innerHTML = food.price;
//     foodEl.innerHTML = food.name 
//     foodEl.appendChild(foodPriceEl)
//     // ADDS A NEW NEW ITEM ON BUTTON CLICK
//     const handleClick = (e) => {
//         // PREVENTS PAGE RELOAD
//         e.preventDefault(); 
//         // ADDS A NEW ITEM TO THE SELECTED ARRAY
//         selected.push(mainFood[i])
//         // CALLS THE FUNCTION TO TRIGGER A RE-RENDER TO UPDATE NEW VALUES
//         reRender(selected)
        
//     }
//     foodEl.addEventListener("click", handleClick)
//     main.appendChild(foodEl)
// });

// sideTops.forEach( (food, i)=> {
//     const foodEl = document.createElement("li")
//     const foodPriceEl = document.createElement("span")
//     foodPriceEl.innerHTML = food.price;
//     foodEl.innerHTML = food.name 
//     foodEl.appendChild(foodPriceEl)
//     const handleClick = (e) => {
//         e.preventDefault(); 
//         selected.push(sideTops[i])
//         reRender(selected)
       
//     }
//     foodEl.addEventListener("click", handleClick)
//     side.appendChild(foodEl)
// })

// protein.forEach( (food, i) => {
//     const foodEl = document.createElement("li")
//     const foodPriceEl = document.createElement("span")
//     foodPriceEl.innerHTML = food.price;
//     foodEl.innerHTML = food.name 
//     foodEl.appendChild(foodPriceEl)

//     const handleClick = (e) => {
//         e.preventDefault(); 
//         selected.push(protein[i])
//         reRender( selected);
//     };

//     foodEl.addEventListener("click", handleClick)
//     prot.appendChild(foodEl)
    
// })
