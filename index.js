/* All of your book objects are going to be stored in a simple array, 
so add a function to the script (not the constructor) 
that can take user’s input and store the new book objects into an array. */

let myLibrary = [];
const addBookBtn = document.getElementById("addBookBtn")
const submitBtn = document.getElementById("submit")
let popUp = document.getElementById("pop")

addBookBtn.addEventListener("click", closePopup) // no need "()" for function
submitBtn.addEventListener("click", addBookToLibrary)

function closePopup() {
    if (popUp.style.display === "none") { //must be "===" cannot just "="
        popUp.style.display = "block";
    } else {
        popUp.style.display = "none";
    }
}

function Books() {
    // something
}

function addBookToLibrary() {
    myLibrary.push()
    closePopup()
}



