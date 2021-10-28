/* All of your book objects are going to be stored in a simple array, 
so add a function to the script (not the constructor) 
that can take user’s input and store the new book objects into an array. */

const addBookBtn = document.getElementById("addBookBtn")
const submitBtn = document.getElementById("submit")
const popUp = document.getElementById("pop")
const closeBtn = document.getElementById("addBookBtn")
const bookShelf = document.querySelector("#book-shelf")

let myLibrary = [];

addBookBtn.addEventListener("click", closePopup) // no need "()" for function
submitBtn.addEventListener("click", addBookToLibrary)

const book = { // Prototype Object
    title: "", // Title of book
    author: "", // Author of book
    pages: "", // Pages of book
    read: false // Read or not?
};

function closePopup() {
    if (popUp.style.display === "none") { //must be "===" cannot just "="
        popUp.style.display = "block";
    } else {
        popUp.style.display = "none";
    }
}


function clearInput() {
    title.value = ""
    author.value = ""
    pages.value = ""
    checkbox.checked = false;
}

function addBookToLibrary() {
    const newBookEntry = Object.create(book)
    const info = document.querySelectorAll('[data-cate]')
    const checkbox = document.getElementById('checkbox')
    info.forEach(item => {
        switch (item.dataset.cate) {
            case "title":
                newBookEntry.title = item.value;
            case "author":
                newBookEntry.author = item.value;
            case "pages":
                newBookEntry.pages = parseInt(pages.value)
        }
    })
    if (checkbox.checked) {
        newBookEntry.read = true
    }
    myLibrary.push(newBookEntry)
    console.log(myLibrary)
    displayBook()
    clearInput()
    closePopup()
}

function displayBook() {
    bookShelf.innerHTML = JSON.stringify(myLibrary);
}


// if (item.dataset.cate === "title") {
//     newBookEntry.title = item.value;
// } 
// else if (item.dataset.cate === "author") {
//     newBookEntry.author = author.value
// }
// else if (item.dataset.cate === "pages") {
//     newBookEntry.pages = parseInt(pages.value)
// }

// newBookEntry.title = title.value
// newBookEntry.author = author.value
// newBookEntry.pages = parseInt(pages.value)

// const title = document.getElementById("title")
// const author = document.getElementById("author")
// const pages = document.getElementById("pages")