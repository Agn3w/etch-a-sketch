let divGrid = document.createElement("div");
let gridContainer = document.querySelector("#grid");
gridContainer.appendChild(divGrid);
divGrid.classList.add("gridElement");


function resize(){
  location.reload();
}

let input = prompt("How many units per side do you want?");
let gridInt = parseInt(input);
let gridSize = (gridInt * gridInt);

  for (let i = 1; i < gridSize; i++){
    let item = document.querySelector(".gridElement");
    let newItem = item.cloneNode(true);
    gridContainer.appendChild(newItem);
  }

const pixel = document.querySelector('#grid')
pixel.addEventListener("mouseover", (event) => {
  if(event.target.className === "gridElement") {
  event.target.style.backgroundColor = "black";
    }
  })
pixel.addEventListener("click", (event) => {
  if(event.target.className === "gridElement") {
  event.target.style.backgroundColor = "white";
  }
})
const root = document.querySelector(":root");

root.style.setProperty("--gridSide", gridInt);
 


  

const resetButton = document.querySelector("#reset")

resetButton.addEventListener("click", function() {
let ele = document.getElementsByClassName('gridElement');
for (var i = 0; i < ele.length; i++) {
    ele[i].style.backgroundColor = "white";
}})