let text1 = document.getElementById("textEl")
let list = document.getElementById("listEl")
let btn = document.getElementById("btnEl")

const names = ["mike", "john", "bright", "favour"]

text1.innerHTML = "man"


let state = false;

const setState = () => state = !state

const men = () => {
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
const empty = () => list.innerHTML = ""

// let state = true;

// const setState = () => !state

btn.addEventListener("click", men);
