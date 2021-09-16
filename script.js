// import { DateTime } from './luxon.js';
const { DateTime } = window.luxon;
class Book {
  static books = [];

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addBook(book) {
    this.books.push(book);
  }

  static rmvBook(rmvBook) {
    this.books = this.books.filter((book) => book !== rmvBook);
  }
}

const form = document.querySelector('#form');
const title = form.elements[0];
const author = form.elements[1];
const addBtn = document.querySelector('#add-btn');
const bookList = document.querySelector('#book-list');
const listNav = document.querySelector('#list-nav-item');
const addNav = document.querySelector('#add-nav-item');
const contactNav = document.querySelector('#contact-nav-item');
const listSection = document.querySelector('#list-section');
const addSection = document.querySelector('#add-section');
const contactSection = document.querySelector('#contact-section');
const date = document.querySelector('#date');

function saveBooksLocally() {
  localStorage.setItem('books', JSON.stringify(Book.books));
}

const appendBook = (book, index) => {
  const bookElement = document.createElement('tr');
  const td = document.createElement('td');
  td.classList.add('border-0', 'd-flex', 'justify-content-end');
  const rmvBtn = document.createElement('button');
  rmvBtn.classList.add('remove-button', 'btn', 'btn-danger');
  rmvBtn.innerText = 'Remove';

  td.appendChild(rmvBtn);

  bookElement.innerHTML = `<td class="align-middle border-0">"${book.title}" by ${book.author}</td>`;
  bookElement.appendChild(td);

  bookList.appendChild(bookElement);
  saveBooksLocally();

  const rmvBook = Book.books[index];
  rmvBtn.addEventListener('click', () => {
    bookElement.remove();
    Book.rmvBook(rmvBook);
    saveBooksLocally();
  });
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

listNav.addEventListener('click', () => {
  listSection.classList.remove('d-none');
  addSection.classList.add('d-none');
  contactSection.classList.add('d-none');
  contactNav.classList.remove('active');
  listNav.classList.add('active');
  addNav.classList.remove('active');
});

addNav.addEventListener('click', () => {
  listSection.classList.add('d-none');
  addSection.classList.remove('d-none');
  contactSection.classList.add('d-none');
  listNav.classList.remove('active');
  contactNav.classList.remove('active');
  addNav.classList.add('active');
});

contactNav.addEventListener('click', () => {
  listSection.classList.add('d-none');
  addSection.classList.add('d-none');
  contactSection.classList.remove('d-none');
  contactNav.classList.add('active');
  listNav.classList.remove('active');
  addNav.classList.remove('active');
});

date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

setInterval(() => {
  date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
}, 1000);
