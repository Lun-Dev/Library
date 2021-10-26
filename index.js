/* All of your book objects are going to be stored in a simple array, 
so add a function to the script (not the constructor) 
that can take user’s input and store the new book objects into an array. */

const addBookBtn = document.getElementById("addBookBtn")
const submitBtn = document.getElementById("submit")
const popUp = document.getElementById("pop")
const title = document.getElementById("title")
const author = document.getElementById("author")
const pages = document.getElementById("pages")

let myLibrary = [];


addBookBtn.addEventListener("click", closePopup) // no need "()" for function
submitBtn.addEventListener("click", addBookToLibrary)

function closePopup() {
    if (popUp.style.display === "none") { //must be "===" cannot just "="
        popUp.style.display = "block";
    } else {
        popUp.style.display = "none";
    }
}

const book = {
    title: "",
    author: "",
    pages: 0,
    read: false
};


function addBookToLibrary() {
    const newBookEntry = Object.create(book)
    console.log(pages.textContent)
    myLibrary.push(newBookEntry)
    console.log(myLibrary)
    closePopup()
}

