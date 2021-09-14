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

const form = document.querySelector('#form');
const title = form.elements[0];
const author = form.elements[1];
const addBtn = document.querySelector('#addBtn');
const bookList = document.querySelector('#book-list');

function saveBooksLocally() {
  localStorage.setItem('books', JSON.stringify(Book.books));
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
    Book.rmvBook(Book.books[index]);
    saveBooksLocally();
  });

  bookList.appendChild(bookElement);
  saveBooksLocally();
};

function appendAllBooks() {
  Book.books.forEach((book, index) => {
    appendBook(book, index);
  });
}

window.addEventListener('load', () => {
  Book.books = JSON.parse(localStorage.getItem('books'));
  if (Book.books) {
    appendAllBooks();
  } else {
    Book.books = [];
  }
});

addBtn.addEventListener('click', () => {
  const newBook = new Book(title.value, author.value);
  Book.addBook(newBook);
  appendBook(newBook, Book.books.length - 1);
});
