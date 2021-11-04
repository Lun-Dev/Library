/* All of your book objects are going to be stored in a simple array, 
so add a function to the script (not the constructor) 
that can take user’s input and store the new book objects into an array. */

const addBookBtn = document.getElementById("addBookBtn")
const submitBtn = document.getElementById("submit")
const popUp = document.getElementById("pop")
const closeBtn = document.getElementById("addBookBtn")
const bookShelf = document.querySelector("#book-shelf")
const storageExist = JSON.parse(localStorage.getItem("myLibrary"))
const checker = localStorage.getItem("myLibrary")
const lengthCheck = JSON.parse(checker)

let myLibrary = [] // Empty local array as the base

window.onload = () => { 
    if (storageExist) {
        loadBook()
        showBooks() // renders all objects within localStorage
    }
}

// Grabs localstorage array of objects and make local array equals to it
function loadBook() {
    if (storageExist) { // On load, check if there is existing key
        myLibrary = storageExist // If exist, the empty local array equals to existing localStorage
  }
}

// Show all books
function showBooks() {
    let i = 0;
    let display = "";
    while (i < storageExist.length) {
        display += 
        `<div id="book-shelf-item">
        <div class="box">Title: ${storageExist[i]['title']}</div>
        <div class="box">Author: ${storageExist[i]['author']}</div>
        <div class="box">Pages: ${storageExist[i]['pages']}</div>
        <button type="button">Read</button>
        <button type="button">Delete</button>
        </div>`;
        i++;  
        } bookShelf.innerHTML = display;
    }

addBookBtn.addEventListener("click", closePopup) // no need "()" for function
submitBtn.addEventListener("click", addBookToLibrary)

const book = { // Prototype Object
    title: "", // Title of book
    author: "", // Author of book
    pages: "", // Pages of book
    read: false // Read or not?
};

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
    } else {
        newBookEntry.read = false
    }
    dataChecker(newBookEntry)
    localLoader()
    clearInput()
    closePopup()
}

function dataChecker(newBookEntry) {
    if (storageExist) { // If there is "myLibrary" key in local storage, grab the JSON data and replace the empty array
        myLibrary = storageExist
        myLibrary.push(newBookEntry)
        localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    } else { // Othewise, myLibrary is an empty array, push newBookEntry into the empty array
        myLibrary.push(newBookEntry)
        localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    }
    }

function clearInput() {
    title.value = ""
    author.value = ""
    pages.value = ""
    checkbox.checked = false;
}

function closePopup() {
    if (popUp.style.display === "none") { //must be "===" cannot just "="
        popUp.style.display = "block";
    } else {
        popUp.style.display = "none";
    }
}

function localLoader() {
    let display = ""
    for (let i = 0; i < myLibrary.length; i++) {
        display+= `<div id="book-shelf-item">
                    <div class="box">Title: ${myLibrary[i]['title']}</div>
                    <div class="box">Author: ${myLibrary[i]['author']}</div>
                    <div class="box">Pages: ${myLibrary[i]['pages']}</div>
                    <button type="button">Read</button>
                    <button type="button">Delete</button>
                    </div>`
        }
        bookShelf.innerHTML = display;
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

// div class="box">${JSON.stringify(storageExist[i], (key,value) => {
//     switch (true) {
//         case (key === "title"):
//             return `${key}: ${value}<br>`;
//         case (key === "author"):
//             return `${key}: ${value}<br>`;
//         case (key === "pages"):
//             return `${key}: ${value}<br>`;
//         case (key === "read"):
//             return undefined;
//     }
//         return value;
// })}
/* function showBook() {
if (storageExist !== null) {
    let i = 0;
    let display = "";
    while (i < lengthCheck.length) {
        display += 
               `<div id="book-shelf-item">
                <div class="box">Title: ${lengthCheck[i]['title']}</div>
                <div class="box">Author: ${lengthCheck[i]['author']}</div>
                <div class="box">Pages: ${lengthCheck[i]['pages']}</div>
                <button type="button">Read</button>
                <button type="button">Delete</button>
                </div>`;
    i++;
    } bookShelf.innerHTML = display;
} else {
    bookShelf.innerHTML = ""
}
} */
// function displayBook() {
//     let display = ""
//     for (let i = 0; i < myLibrary.length; i++) {
//         const htmlOutput = JSON.stringify(myLibrary[i], (key, value) => {
//             if (key === "read") { // hide the propery with the key "read"
//                 return undefined;
//             }
//                 return value;
//         });

//     display+= `<div id="book-shelf-item">
//                 <div class="box">Title: ${htmlOutput}</div>
//                 <div class="box">Author: ${htmlOutput}</div>
//                 <div class="box">Pages: ${htmlOutput}</div>
//                 <button type="button">Read</button>
//                 <button type="button">Delete</button>
//                 </div>`
//     }
//     bookShelf.innerHTML = display;
// }

