/* All of your book objects are going to be stored in a simple array, 
so add a function to the script (not the constructor) 
that can take user’s input and store the new book objects into an array. */

let myLibrary = [];
const addBookBtn = document.getElementById("addBookBtn")
let popUp = document.getElementById("pop")

addBookBtn.addEventListener("click", closePopup) // no need "()"

function Books() {
    // something
}

function storeBooks() {
    myLibrary.push()
    boxId.innerHTML = myLibrary
}

function closePopup() {
    if (popUp.style.display === "none") { //must be "==="
        popUp.style.display = "block";
    } else {
        popUp.style.display = "none";
    }
}

