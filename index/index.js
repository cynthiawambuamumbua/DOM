
// Change document background color to
// silver
let child=document.getElementById("container").children
console.log({child});

let lastChild=document.getElementById("container").lastChild
console.log({lastChild});

document.getElementById("container").style.backgroundColor="silver"

// Change the font color for h1 title tag to
// green
document.getElementById("#title").style.color="green"


// Change the font case for h3 title tags to
// uppercase
document.getElementById("h3").style.textTransform="uppercase"

// Add one more fruit to the fruits list
let fruList = container.querySelector("fruList");
let newFruit = document.createElement("li");
newFruit.textContent = "apple";
fruList.appendChild(newFruit);
// Add one more vegetable to the vegetables
// list
const vegList = container.querySelector("#vegList");
const newVeg = document.createElement("li");
newVeg.textContent = "Sukuma wiki";
vegList.appendChild(newVeg);
