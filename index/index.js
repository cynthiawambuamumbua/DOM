
// Change document background color to
// silver
let child=document.getElementById("container").children
console.log({child});

let lastChild=document.getElementById("container").lastChild
console.log({lastChild});

document.getElementById("container").style.backgroundColor="silver"

// Change the font color for h1 title tag to
// green
document.getElementById("title").style.color="green"


// Change the font case for h3 title tags to
// uppercase
document.getElementById("fruits").style.textTransform="uppercase"
document.getElementById("vege").style.textTransform="uppercase"


// Add one more fruit to the fruits list
let newFruit = document.createElement("li");
newFruit.innerHTML = "apple";
document.getElementById('fruList').appendChild(newFruit)

// Add one more vegetable to the vegetables
// list
const newVeg = document.createElement("li");
newVeg.textContent = "Sukuma wiki";
document.getElementById("vegList").appendChild(newVeg);
