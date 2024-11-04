//creating divs for the container
function creatingboxes(){
    let grid_container = document.getElementById("container");

    let grid_size= document.getElementById("select1");
    let grid_size_value= parseInt(grid_size.value)
    grid_container.innerHTML=""

    let grid_dimension = Math.sqrt(grid_size_value);
    grid_container.style.gridTemplateColumns = `repeat(${grid_dimension}, 1fr)`;
    grid_container.style.gridTemplateRows = `repeat(${grid_dimension}, 1fr)`;


for(let i=1;i<=grid_size_value;i++){
let grid_box = document.createElement("div");
grid_box.classList.add("grid-item");

grid_box.addEventListener("mouseover",function(){
    let grid_color=document.getElementById("select2")
    let grid_color_value= grid_color.value
    grid_box.style.backgroundColor= grid_color_value;
})

grid_container.appendChild(grid_box)
}

}
 window.onload= creatingboxes
document.getElementById("select1").addEventListener("change", creatingboxes);

