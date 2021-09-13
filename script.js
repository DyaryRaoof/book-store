const book1 = {
  title: 'book1',
  author: 'author1',
};
let books = [book1];
const form = document.querySelector('#form');
const title = form.elements[0];
const author = form.elements[1];
const addBtn = document.querySelector('#addBtn');
const removeBtns = document.querySelectorAll('.remove-button');
const bookList = document.querySelector('#book-list');

const appendBook = (book) => {
  let bookElement = document.createElement('div');
  let titleSpan = document.createElement('span');
  titleSpan.innerText = book.title;
  let br = document.createElement('br');
  let authorSpan = document.createElement('span');
  authorSpan.innerText = book.author;
  let br2 = document.createElement('br');
  let rmvBtn = document.createElement('button');
  rmvBtn.classList.add('remove-button');
  rmvBtn.innerText = 'remove';
  let hr = document.createElement('hr');

  bookElement.appendChild(titleSpan);
  bookElement.appendChild(br);
  bookElement.appendChild(authorSpan);
  bookElement.appendChild(br2);
  bookElement.appendChild(rmvBtn);
  bookElement.appendChild(hr);
  bookList.appendChild(bookElement);
};

books.forEach((book) => {
  appendBook(book);
});

function Book(title, author) {
  this.title = title;
  this.author = author;
}

addBtn.addEventListener('click', () => {
  const newBook = new Book(title.value, author.value);
  books.push(newBook);
  appendBook(newBook);
  //   let bookElement = document.createElement('div');
  //   console.log(newBook.title);
  //   let titleSpan = document.createElement('span');
  //   titleSpan.innerText = newBook.title;
  //   let br = document.createElement('br');
  //   let authorSpan = document.createElement('span');
  //   authorSpan.innerText = newBook.author;
  //   let br2 = document.createElement('br');
  //   let rmvBtn = document.createElement('button');
  //   rmvBtn.classList.add('remove-button');
  //   rmvBtn.innerText = 'remove';
  //   let hr = document.createElement('hr');

  //   bookElement.appendChild(titleSpan);
  //   bookElement.appendChild(br);
  //   bookElement.appendChild(authorSpan);
  //   bookElement.appendChild(br2);
  //   bookElement.appendChild(rmvBtn);
  //   bookElement.appendChild(hr);
  //   bookList.appendChild(bookElement);
});

const removeBook = (i) => {
  books = books.filter((a) => a !== books[i]);
};

for (let i = 0; i < removeBtns.length; i += 1) {
  removeBtns[i].addEventListener('click', () => {
    removeBook(i);
  });
}
