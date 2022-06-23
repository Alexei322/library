let myLibrary = [];


function Book(author = '', title = '', numberOfPages = 0, isRead = false) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
};

function addBookToLibrary() {
    
};

myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formInfo = new FormData(myForm);
    const formPairs = {};
    for(const [name, value] of formInfo) {
        formPairs[name] = value;
    };
    userBook = new Book(formPairs[author], formPairs[])
})

// function outputLibrary() {
//     myLibrary.forEach(element => {
//         const bookDiv = document.createElement('div');
//         bookDiv.classList.add('book');
//     });
// };

// function addBookToLibrary() {
//     const allItems = [...document.querySelectorAll('form > input')];
//     allItems.forEach(item => console.log(item.textContent));
// };



// const submitButton = document.querySelector('button');
// submitButton.addEventListener('click', function() {
//     addBookToLibrary();
// })


// addBookToLibrary();
// const domBooks = document.querySelector('.books');
// const bookDiv = document.createElement('div');
// bookDiv.classList.add('book');
// const varjack = new Book("V", "Varjack Paw", 15, true);
// bookDiv.appendChild(document.createElement('div'));
// bookDiv.firstChild.classList.add('author');
// domBooks.appendChild(bookDiv);