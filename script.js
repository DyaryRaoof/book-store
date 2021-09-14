class Book {
  static books = [];

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addBook(book) {
    this.books.push(book);
  }

  static rmvBook(book) {
    this.books = this.books.filter((a) => a !== book);
  }
}

const book1 = new Book('book1', 'author1');
Book.addBook(book1);

let books = [book1];
const form = document.querySelector('#form');
const title = form.elements[0];
const author = form.elements[1];
const addBtn = document.querySelector('#addBtn');
const bookList = document.querySelector('#book-list');

function saveBooksLocally() {
  localStorage.setItem('books', JSON.stringify(books));
}
const appendBook = (book, index) => {
  const bookElement = document.createElement('div');
  bookElement.classList.add('book-element-wrapper');
  const titleSpan = document.createElement('span');
  titleSpan.innerText = book.title;
  const br = document.createElement('br');
  const authorSpan = document.createElement('span');
  authorSpan.innerText = book.author;
  const br2 = document.createElement('br');
  const rmvBtn = document.createElement('button');
  rmvBtn.classList.add('remove-button');
  rmvBtn.innerText = 'remove';
  const hr = document.createElement('hr');

  bookElement.appendChild(titleSpan);
  bookElement.appendChild(br);
  bookElement.appendChild(authorSpan);
  bookElement.appendChild(br2);
  bookElement.appendChild(rmvBtn);
  bookElement.appendChild(hr);
  rmvBtn.addEventListener('click', () => {
    bookElement.remove();
    books = books.filter((a) => a !== books[index]);
    saveBooksLocally();
  });

  bookList.appendChild(bookElement);
  saveBooksLocally();
};

function appendAllBooks() {
  books.forEach((book, index) => {
    appendBook(book, index);
  });
}

window.addEventListener('load', () => {
  books = JSON.parse(localStorage.getItem('books'));
  if (books) {
    if (books.length > 0) {
      appendAllBooks();
    }
  } else {
    books = [];
  }
});

addBtn.addEventListener('click', () => {
  const newBook = new Book(title.value, author.value);
  books.push(newBook);
  appendBook(newBook, books.length - 1);
});
