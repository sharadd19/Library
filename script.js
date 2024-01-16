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

const bookGrid = document.querySelector('.book-grid');
const addBook = document.querySelector('.add-book');
const dialog = document.querySelector('dialog');
const closeButton = document.querySelector('.close');
const submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', (e) => {
    const book = getBookInformation();
    createBookCard(book);
    console.log(book);
    // Check to see if book is in the library already
    if (isInLibrary(book)) {
        // error
        console.log('asdfasdf');    
        document.querySelector('.book-exists').textContent = 'Book already exists in library!';
    }
    addBookToLibrary(book);
    dialog.close();
    e.preventDefault();

})

addBook.addEventListener('click', () => {
    //Clear all the information out 
    dialogForm.reset();
    dialog.showModal();

})

closeButton.addEventListener('click', (e) => {
    e.preventDefault();
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
    readButton.classList.add('read-button');
    removeButton.classList.add('remove')

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
    bookCard.appendChild(readButton);
    bookCard.appendChild(removeButton)
    bookGrid.appendChild(bookCard);

    removeButton.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    })

    readButton.addEventListener('click', (e) => {
        var parent = e.target.parentElement;
        var isRead = parent.querySelector('.read-button').textContent;
        console.log(isRead);
        if (isRead === "Read") {
            readButton.textContent = "Not read"
            readButton.classList.remove('read')
            readButton.classList.add('not-read')

        }
        else if (isRead === "Not read"){
            readButton.textContent = "Read"
            readButton.classList.remove('not-read')
            readButton.classList.add('read')

        }
     })
   
}

getBookInformation = () => {
    const newBookTitle = document.getElementById('input-title').value;
    const newBookAuthor = document.getElementById('input-author').value;
    const newBookPages = document.getElementById('input-pages').value;
    const newBookRead = document.getElementById('input-is-read').checked;

    return new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead);

}

isInLibrary = (book) => {
    if (myLibrary.length !== 0) {
        myLibrary.some(libraryBook => {
            return libraryBook.title === book.title;
        })
    };
}

