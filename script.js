const book1 = {
  title: 'book1',
  author: 'author1',
};

const books = [book1];

const form = document.querySelector('#form');
const title = form.elements[0];
const author = form.elements[1];
const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', () => {
  let newBook = new Book(title.value, author.value);
  books.push(newBook);
});

function Book(title, author) {
  this.title = title;
  this.author = author;
}
