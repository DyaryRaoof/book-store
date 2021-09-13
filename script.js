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

function Book(title, author) {
  this.title = title;
  this.author = author;
}

addBtn.addEventListener('click', () => {
  const newBook = new Book(title.value, author.value);
  books.push(newBook);
});

const removeBook = (i) => {
  books = books.filter((a) => a.title !== books[i].title);
};

for (let i = 0; i < removeBtns.length; i += 1) {
  removeBtns[i].addEventListener('click', () => {
    removeBook(i);
  });
}
