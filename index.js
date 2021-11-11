const submitBtn = document.getElementById("submit")
const popUp = document.getElementById("pop")
const greyOut = document.querySelector('.overlay')
const closeBtn = document.getElementById("addBookBtn")

const bookShelf = document.querySelector("#book-shelf")

const checker = localStorage.getItem("myLibrary")
const storageExist = JSON.parse(localStorage.getItem("myLibrary"))
const lengthCheck = JSON.parse(checker)

const deleter = document.getElementsByClassName('delete')
const removeBtn = document.getElementsByClassName('remove')

const addBookBtn = document.querySelector('.fab')
const selector = document.querySelector('.title2')
const selector2 = document.querySelector('.author2')
const selector3 = document.querySelector('.pages2')
const lister = document.querySelector('.list')
const closingBtn = document.querySelector('.close-btn')

let myLibrary2 = [] // This is the base array in which it will store each book object

addBookBtn.addEventListener("click", closePopup)
closingBtn.addEventListener("click", closePopup)

function closePopup() {
    if (popUp.style.display === "none") { //must be "===" cannot just "="
        popUp.style.display = "block";
            greyOut.style.display = "block";
    } else {
        popUp.style.display = "none";
            greyOut.style.display = "none";
    }
}

function clearInput() {
    selector.value = ""
    selector2.value = ""
    selector3.value = ""
    checkbox.checked = false;
}

window.onload = function() {
    if(JSON.parse(localStorage.getItem("myNewLibrary") != null)) { // if localstorage's array is not null
        myLibrary2 = JSON.parse(localStorage.getItem("myNewLibrary")); // then local array equals to the value within localstorage
        display();
    }
}

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
                newBookEntry.pages = parseInt(item.value)
        }
    })
    if (checkbox.checked) {
        newBookEntry.read = true
    } else {
        newBookEntry.read = false
    }
    addElement(newBookEntry)
    clearInput()
    closePopup()
}

function addElement(newBookEntry) {
    if(selector.value.trim() != "" && selector2.value.trim() != "" && selector3.value.trim() != "") {
        myLibrary2.push(newBookEntry)
        if(localStorage.getItem("myNewLibrary") == null) {
            "myNewLibrary", JSON.stringify(myLibrary2)
        } else {
            localStorage.setItem("myNewLibrary", JSON.stringify(myLibrary2))
        }
        display();
    }
}

function display() {
    bookShelf.innerHTML = "";
    for (let i = 0; i < myLibrary2.length; i++) { 
        bookShelf.innerHTML += `<div id="book-shelf-item">
                                    <div class="element">Title: ${myLibrary2[i]['title']}</div>
                                    <div class="element">Author: ${myLibrary2[i]['author']}</div>
                                    <div class="element">Pages: ${myLibrary2[i]['pages']}</div> 
                                    <button type="button" class="reading" onclick='read("${i}")'>${myLibrary2[i]['read'] ? 'Read' : "Not Read"}</button>
                                    <button type='button' class='del' onclick='delDel("${i}")'>Delete</button>
                                </div>`
    }
}

function read(index) {
    if(myLibrary2[index]['read']) {
        myLibrary2[index]['read'] = false
    } else {
        myLibrary2[index]['read'] = true
    }
    if(localStorage.getItem("myNewLibrary") == null) {
        localStorage.setItem("myNewLibrary", JSON.stringify(myLibrary2))
    } else {
        localStorage.setItem("myNewLibrary", JSON.stringify(myLibrary2))
    }
    display()
}

function delDel(index) {
    myLibrary2.splice(index, 1)
    if(localStorage.getItem("myNewLibrary") == null) {
        localStorage.setItem("myNewLibrary", JSON.stringify(myLibrary2))
    } else {
        localStorage.setItem("myNewLibrary", JSON.stringify(myLibrary2))
    }
    display()
}