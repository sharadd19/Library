document.title = "Library"
const myLibrary = [];

function Book (title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
    dialog.close()
}

const bookGrid = document.querySelector('.book-grid');
const addBook = document.querySelector('.add-book');
const dialog = document.querySelector('dialog');
const closeButton = document.querySelector('.close');
const submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', (e) => {
    const book = getBookInformation();
    const validation = validateForm();

    while (!validation) {
        return validateForm();
    }
    if (isInLibrary(book)){
        document.querySelector('.book-exists').textContent = 'Book already exists in library!';
        e.preventDefault();
    }
    else {
        createBookCard(book);
        addBookToLibrary(book);
        e.preventDefault();
    }
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

    // Do this using prototypes?
    // Book.prototype.isRead = (checkedValue, readButton) => {
    //     if (checkedValue || readButton.textContent === "Read"){
    //         return true;
    //     }
    //     return false;

    // }
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

// Does not work!
isInLibrary = (book) => {
    console.log(book.title);
    return myLibrary.some(libraryBook => libraryBook.title == book.title);
}

// validation 
function validateForm() {
    let title = document.forms["addBookForm"]["title"].value;
    let author = document.forms["addBookForm"]["author"].value;
    let pages = document.forms["addBookForm"]["pages"].value;
    const titleError = document.querySelector('.title-error');
    const authorError = document.querySelector('.author-error');
    const pageError = document.querySelector('.pages-error');
  if (title == "") {
    return false;
  }
  else if (author == "") {
    return false;
  }
  else if (pages == ""){
    return false;
  }
  return true;
}