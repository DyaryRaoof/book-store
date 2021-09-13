const book1 = {
  title: 'book1',
  author: 'author1',
};
let books = [book1];
const form = document.querySelector('#form');
const title = form.elements[0];
const author = form.elements[1];
const addBtn = document.querySelector('#addBtn');
const bookList = document.querySelector('#book-list');

const removeBook = (i) => {
  books = books.filter((book) => book !== books[i]);
  const bookElements = document.querySelectorAll('.book-element-wrapper');
  console.log(i);
  bookList.removeChild(bookElements[i]);
  const removeBtns = document.querySelectorAll('.remove-button');
};

const appendBook = (book, i) => {
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
  bookList.appendChild(bookElement);

  rmvBtn.addEventListener('click', () => {
    removeBook(i);
  });
};

books.forEach((book, i) => {
  appendBook(book, i);
});

function Book(title, author) {
  this.title = title;
  this.author = author;
}

addBtn.addEventListener('click', () => {
  const newBook = new Book(title.value, author.value);
  books.push(newBook);
  appendBook(newBook, books.length - 1);
});
