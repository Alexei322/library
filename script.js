let myLibrary = [];


function Book(author = '', title = '', numberOfPages = 0, isRead = false) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
};

function addBookToLibrary() {
    const formInfo = new FormData(myForm);
    const formPairs = {};
    for(const [name, value] of formInfo) {
        formPairs[name] = value;
    };
    userBook = new Book(formPairs.author, formPairs.title, formPairs.numberofpages, formPairs.hasread);
    myLibrary.push(userBook);
    clearChildren();
    myLibrary.forEach(item => displayNewBook(item));
};

function displayNewBook(aBook) {
    const books = document.querySelector('.books')
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    const authorDiv = document.createElement('div');
    authorDiv.classList.add('bookauthor');
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('booktitle');
    const pagesDiv = document.createElement('div');
    pagesDiv.classList.add('booknumberofpages');
    const readDiv = document.createElement('div');
    readDiv.classList.add('bookhasread');
    authorDiv.textContent = `Author: ${aBook.author}`;
    titleDiv.textContent = `Title: ${aBook.title}`;
    pagesDiv.textContent = `Number of pages: ${aBook.numberOfPages}`;
    isOrNotRead = aBook.isRead === 'true' ? 'Read' : 'Not Read';
    readDiv.textContent = `Is the book read?: ${isOrNotRead}`;
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(pagesDiv);
    bookDiv.appendChild(readDiv);
    books.appendChild(bookDiv);
};

function clearChildren() {
    const books = document.querySelector('.books');
    while(books.firstChild) {
        books.removeChild(books.lastChild);
    }
};

overlaySelect = document.querySelector('.overlay');
cancelButton = document.querySelector('.form > .cancelAdd');
formSelector = document.querySelector('.form');
loadFormButtonSelect = document.querySelector('.loadformbutton')
loadFormButtonSelect.addEventListener('click', function(e) {
    formSelector.style.display = 'flex';
    loadFormButtonSelect.style.display = 'none';
    overlaySelect.style.display = 'block';
});

function resetForm() {
    formSelector.style.display = 'none'; 
    formSelector.reset();
    loadFormButtonSelect.style.display = 'block';
    overlaySelect.style.display = 'none';
}

cancelButton.addEventListener('click', () => {
    resetForm();
});

myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addBookToLibrary();
    resetForm();
});