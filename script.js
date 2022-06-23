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
    authorDiv.textContent = aBook.author;
    titleDiv.textContent = aBook.title;
    pagesDiv.textContent = aBook.numberOfPages;
    readDiv.textContent = aBook.numberOfPages;
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

myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addBookToLibrary();
});





// addBookToLibrary();
// const domBooks = document.querySelector('.books');
// const bookDiv = document.createElement('div');
// bookDiv.classList.add('book');
// bookDiv.appendChild(document.createElement('div'));
// bookDiv.firstChild.classList.add('author');
// domBooks.appendChild(bookDiv);