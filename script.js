const myLibrary = [];

function Book (title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J R R Tolkien", "700", 'true');
const insmonia = new Book("Insomnia", "Stephen King", "760", 'false');

myLibrary.push(theHobbit, insmonia);

displayBook = () => {
    if (myLibrary.length > 0)
    {
        // Add the book information to the cards in the html
        myLibrary.forEach(book => {
            createBookCard(book);
        })

        // Hide buttons if there are no books in the library
        
    }
    
}

const bookGrid = document.querySelector('.book-grid');
const addBook = document.querySelector('.add-book');
const dialog = document.querySelector('dialog');
const closeButton = document.querySelector('.close');

addBook.addEventListener('click', () => {
    dialog.showModal();

})

closeButton.addEventListener('click', () => {
    dialog.close();
})
createBookCard = (book) => {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readButton = document.createElement('button');
    const removeButton = document.createElement('button');

    bookCard.classList.add('book-card');
    title.classList.add('book-title');
    author.classList.add('book-author');
    pages.classList.add('book-pages');
    readButton.classList.add('read-button')
    removeButton.classList.add('remove-button')

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    removeButton.textContent = 'Remove';

    if (book.isRead){
        readButton.textContent = 'Read';
        readButton.classList.add('read')
    } else {
        readButton.textContent = 'Not read';
        readButton.classList.add('not-read')
    }

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookGrid.appendChild(bookCard);
    bookCard.appendChild(readButton);
    bookCard.appendChild(removeButton);
}


displayBook();