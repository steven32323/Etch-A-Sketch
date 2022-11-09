// create a 16 x 16 grid of divs using Javascript
// grid should go into a "Container" div
// try flexbox
// think about borders and margins
// set up a "hover" effect to change the color of the div when passing over with the mouse
// add a button sending a popup asking the user how many squares per side for a new grid
// squares must all fit into the same total space as before
// for the above task, utilise buttons and javascript "prompt"s
'use strict'

const container = document.querySelector('.container');
const sizeButton = document.querySelector('.size');
let blockColor = 'salmon'; 

// function to build the grid of squares
const build = function(columns){
    // removes previous grid by removing each element as long as one exists
    while (document.getElementsByClassName('column')[0]) {
        document.getElementsByClassName('column')[0].remove();
    }
for (let i = 0; i < columns ; i++){
  
        const column = document.createElement("div");
        column.classList.add("column")
        container.appendChild(column); 
        for (let j = 0; j < columns; j++) {
            const row = document.createElement("div");
            row.classList.add("row")
            column.appendChild(row); 
            let itemSize = 468/columns; //460 = height of container div
            row.style.height = `${itemSize}px`;
            // changes color of square on hover
            row.addEventListener('mouseover', function() {
                    row.style.backgroundColor = blockColor;
            })
        }
}
}

// draws initial 16 x 16 grid
build(16);

// prompts user for size input
sizeButton.addEventListener('click', function(){
    let noOfSquares = prompt('How Many squares per side??');
    if (noOfSquares < 100 && noOfSquares >= 1) {
    build(noOfSquares);
    } else alert("Error, input must be between 2 and 100");
} )


// TODO: create a gradient button to slowly darken the block by 10% after every hover
//       create a function to change the blockColor variable to a random RBG value