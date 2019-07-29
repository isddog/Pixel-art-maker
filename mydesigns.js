//Entering whole numbers in the "Height" and "Width" fields, and submitting the form, causes an empty grid to appear on the page.

const colorPicker = document.getElementById("colorPicker").value; 
const sizePicker = document.getElementById("sizePicker"); 
const gridCanvas = document.getElementById("pixelCanvas"); 
const gridHeight = document.getElementById("inputHeight");
const gridWidth = document.getElementById("inputWidth");

//Choosing a color from the 'color selector' and clicking on a grid square causes that grid square (and only that square) to change color.

function makeGrid() {
    gridCanvas.innerHTML = "";
    var rowCount = gridHeight.value;
    var cellCount = gridWidth.value;
    for (let r = 0; r < rowCount; r++) {
        var tr = document.createElement("tr");
        gridCanvas.appendChild(tr);
        var newRow = gridCanvas.insertRow(r);
    
        for (let c = 0; c < cellCount; c++) {
            var td = document.createElement("td");
            tr.appendChild(td);
            td.addEventListener('click', fillGrid); //Event listeners are properly added to the grid squares (and not to the border or the table itself).
            var cell = newRow.insertCell(c);
            cell.addEventListener('click', fillGrid);
        }
    }
}

// If there are already colored squares in the grid, clicking the Submit button clears them out.

function fillgrid() {
    fillGrid.setAttribute('style', 'bgcolor: {color.value}' )
    fillGrid.addEventListener('submit', function (event) {
        submit.addEventListener('click', makeGrid());
        event.preventDefault();
        gridCanvas.removeChild(gridCanvas.firstChild);
    })
}