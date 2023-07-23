let row;
let column;
const container = document.getElementsByClassName("container")[0];


for(let i = 0; i < 16; i++)
{
    column = document.createElement('div');
    column.style.height = "16px";
    column.style.width = "16px";
    column.className ='draw';
    for(let j = 0; j < 16; j++)
    {
        row = document.createElement('div');
        row.style.height = "16px";
        row.style.width = "16px";
        row.style.border = "thin solid #0000FF";
        row.className ='draw';
        column.appendChild(row);
    }
    container.appendChild(column);
}
container.style.display = "flex";
container.style.justifyContent= "center";

{
container.addEventListener('mouseover', (event) =>
{
    if(event.target.className === "draw")
    event.target.style.backgroundColor = "pink";
})
}



