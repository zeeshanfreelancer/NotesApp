const container = document.querySelector(".container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");


createBtn.addEventListener("click",() =>{
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src = "delete.gif";
    container.appendChild(inputbox).appendChild(img);

})

container.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    
    }

})


function showNotes(){
    container.innerHTML = localStorage.getItem("notes");
}

function updateStorage(){
    localStorage.setitem("notes", container.innerHTML);
}

showNotes();