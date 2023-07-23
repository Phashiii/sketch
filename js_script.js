let row;
let column;
let rowNum=16;
let columnNum=16;
//Style the container
const container = document.getElementsByClassName("container")[0];
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.gap ="20px";
//create and style edit button
const editBtn = document.createElement("button");
editBtn.textContent ="Edit grid";
editBtn.style.fontSize = "12px";
container.appendChild(editBtn);

editBtn.addEventListener('click',() =>
{
    let newGrid = Number.parseInt(prompt("Enter number of rows"));
    rowNum = newGrid;
    columnNum = newGrid;
    removeOldGrid();
    createNewGrid(rowNum,columnNum);
});
//create grid
const grid = document.createElement('div');
grid.style.height = "960px";
grid.style.width = "960px";
container.appendChild(grid);
//create grid when page loads
createNewGrid(rowNum,columnNum);

function removeOldGrid()
{
    while(grid.hasChildNodes()){

        grid.removeChild(grid.firstChild);
    };
    
}
function createNewGrid(rowNum, columnNum)
{
    let newRow = 960 / rowNum;
    
    if(rowNum > 100 || columnNum > 100)
    {
        rowNum = 100;
        columnNum = 100;
    }
    for(let i = 0; i < columnNum; i++)
    {
        column = document.createElement('div');
        column.style.height = ""+newRow+"px"
        column.style.width = ""+newRow+"px"
        column.className ='draw';
        for(let j = 0; j < rowNum; j++)
        {
            row = document.createElement('div');
            row.style.height = ""+newRow+"px";
            row.style.width = ""+newRow+"px";
            row.className ='draw';
            row.style.background = 'cyan';
            column.appendChild(row);
        }
        grid.appendChild(column);
    }
    grid.style.display = "flex";
    grid.style.justifyContent= "center";
}

grid.addEventListener('mouseover', (event) =>
{
    if(event.target.className === "draw")
    event.target.style.backgroundColor = "pink";
})




