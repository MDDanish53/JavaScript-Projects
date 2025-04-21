const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("data");
}

showNotes();

function updateStorage() {
    localStorage.setItem("data", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if(e.targer.tagName === "P") {
        notes = document.querySelector(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() { //it will update storage when we will start typing, editing in <p> tag
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if(event.key === "Enter") {
        document.execCommand("insertLineBreak"); //add line break in <P> tag
        event.preventDefault(); //prevent default feature of enter key
        updateStorage();
    }
})

