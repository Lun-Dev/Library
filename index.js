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

let myLibrary2 = [] // This is the base array in which it will store each book object

addBookBtn.addEventListener("click", closePopup)

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
        console.log(myLibrary2)
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
    console.log(info)
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
    lister.innerHTML = "";
    for (let i = 0; i < myLibrary2.length; i++) { 
        lister.innerHTML += `<center>
                             <div class="element">Title: ${myLibrary2[i]['title']}</div>
                             <div class="element">Author: ${myLibrary2[i]['author']}</div>
                             <div class="element">Pages: ${myLibrary2[i]['pages']}</div> 
                             <button type="button" class="reading" onclick='read("${i}")'>${myLibrary2[i]['read'] ? 'Read' : "Not Read"}</button>
                             <button type='button' class='del' onclick='delDel("${i}")'>Delete</button>
                             </div>
                             </center>`
    }
}

function read(index) {
    if(myLibrary2[index]['read']) {
        myLibrary2[index]['read'] = false
        console.log(myLibrary2[index]['read'])
    } else {
        myLibrary2[index]['read'] = true
        console.log(myLibrary2[index]['read'])
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

let myLibrary = [] // Empty local array as the base

// window.onload = () => { 
//     if (storageExist) {
//         loadBook()
//         showBooks() // renders all objects within localStorage
//         parentRemover()
//     }
// }

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
        <button type="button" class="read">Read</button>
        <button type="button" class="remove">Delete</button>
        </div>`;
        i++;  
        } bookShelf.innerHTML = display;
    }

// addBookBtn.addEventListener("click", closePopup) // no need "()" for function
// submitBtn.addEventListener("click", addBookToLibrary)

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

function localLoader() {
    let display = ""
    for (let i = 0; i < myLibrary.length; i++) {
        display+= `<div id="book-shelf-item">
                        <div class="box">Title: ${myLibrary[i]['title']}</div>
                        <div class="box">Author: ${myLibrary[i]['author']}</div>
                        <div class="box">Pages: ${myLibrary[i]['pages']}</div>
                        <button type="button" class="read">Read</button>
                        <button type="button" class="remove">Delete</button>
                    </div>`
        }
        bookShelf.innerHTML = display;
    parentRemover()
}

function parentRemover() {
    Array.from(removeBtn).forEach((removeButton) => {
        removeButton.addEventListener('click', () => {
        removeButton.parentNode.remove();
        });
    });
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

