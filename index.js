/* All of your book objects are going to be stored in a simple array, 
so add a function to the script (not the constructor) 
that can take user’s input and store the new book objects into an array. */

const addBookBtn = document.getElementById("addBookBtn")
const submitBtn = document.getElementById("submit")
const popUp = document.getElementById("pop")
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

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const newBookEntry = new Book()
    myLibrary.push(newBookEntry)
    // push new Books into myLibrary
    console.log(myLibrary)
    closePopup()
}

