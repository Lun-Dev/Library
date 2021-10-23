/* All of your book objects are going to be stored in a simple array, 
so add a function to the script (not the constructor) 
that can take user’s input and store the new book objects into an array. */

let myLibrary = [];
const boxId = document.getElementById("box")
const addBookBtn = document.getElementById("addBookBtn")

addBookBtn.addEventListener("click", () => {
    alert("I am sleepy!")
})

function Books() {
    // something
}

function storeBooks() {
    myLibrary.push()
    boxId.innerHTML = myLibrary
}

storeBooks()