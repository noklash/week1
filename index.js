let text1 = document.getElementById("textEl")
let list = document.getElementById("listEl")
let btn = document.getElementById("btnEl")
let select = document.getElementById("selectedEl")
let total = document.getElementById("totalEl")
let main = document.getElementById("mainEl")
let side = document.getElementById("sidEl")
let prot = document.getElementById("proteinEl")

const names = ["mike", "john", "bright", "favour"]

const name = ""

const mainFood = [
    { name: "rice", price: 1500 },
    { name: "pasta", price: 3200 },
    { name: "noodles", price: 1200 },
    { name: "yam", price: 1100 },
    { name: "potatoes", price: 700 },
    { name: "garri", price: 400 },
    { name: "soup", price: 1670 },
    { name: "beans", price: 790 },
    { name: "corn", price: 559 },
];

const sideTops = [
    { name: "moi-moi", price: 300 },
    { name: "corn", price: 450 },
    { name: "coleslaw", price: 800 },
    { name: "vegetables", price: 300 },
    { name: "eggSauce", price: 560 },
    { name: "plantain", price: 120 },
];

const protein = [
    { name: "beef", price: 1765 },
    { name: "chicken", price: 2500 },
    { name: "turkey", price: 4500 },
    { name: "fish", price: 3570 },
];







const reRender = (arr) => {
    arr?.map( food => {
        const foodEl = document.createElement("li")
        const foodPriceEl = document.createElement("span")
        foodPriceEl.innerHTML = food.price;
        foodEl.innerHTML = food.name 
        foodEl.appendChild(foodPriceEl)
        select.appendChild(foodEl)
    });
    
}

const selected = 

mainFood.map( (food, i ) => {
    const foodEl = document.createElement("li")
    const foodPriceEl = document.createElement("span")
    foodPriceEl.innerHTML = food.price;
    foodEl.innerHTML = food.name 
    foodEl.appendChild(foodPriceEl)
    const handleClick = (e) => {
        let empty = []
        e.preventDefault(); 
        empty.push(mainFood[i])
        reRender(empty)
        // console.log(selected)
    }
    foodEl.addEventListener("click", handleClick)
    main.appendChild(foodEl)
});

sideTops.map( (food, i)=> {
    const foodEl = document.createElement("li")
    const foodPriceEl = document.createElement("span")
    foodPriceEl.innerHTML = food.price;
    foodEl.innerHTML = food.name 
    foodEl.appendChild(foodPriceEl)
    const handleClick = (e) => {
        let empty = []
        e.preventDefault(); 
        empty.push(sideTops[i])
        reRender(empty)
        // console.log(selected)
    }
    foodEl.addEventListener("click", handleClick)
    side.appendChild(foodEl)
})

protein.map( (food, i) => {
    const foodEl = document.createElement("li")
    const foodPriceEl = document.createElement("span")
    foodPriceEl.innerHTML = food.price;
    foodEl.innerHTML = food.name 
    foodEl.appendChild(foodPriceEl)
    const handleClick = (e) => {
        let empty = []
        e.preventDefault(); 
        empty.push(protein[i])
        reRender(empty)
        // console.log(selected)
    }
    foodEl.addEventListener("click", handleClick)
    prot.appendChild(foodEl)
})





let state = false;

const setState = () => state = !state

const renderList = () => {
    setState();
    
    if(state){
        // let list = document.createElement('ul')
        names.map( man  => {
            const namesVal = document.createElement("li")
                namesVal.innerHTML = man
                const handleClick = () => alert(man)
                namesVal.addEventListener("click", handleClick)
            list.appendChild(namesVal)
          
        })
    }else {
        list.innerHTML = ""
    }
   
}




// btn.addEventListener("click", renderList);
