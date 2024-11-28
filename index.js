let express = require('express');
let { sequelize } = require('./lib/index');
const { author } = require('./model/author.model.js');
const { book } = require('./model/book.model');

let app = express();
app.use(express.json());

// books
let books = [
  {
    title: 'Harry Potter and the Philosophers Stone',
    genre: 'Fantasy',
    publicationYear: 1997,
  },
  { title: 'A Game of Thrones', genre: 'Fantasy', publicationYear: 1996 },
  { title: 'The Hobbit', genre: 'Fantasy', publicationYear: 1937 },
];

// authors
let authors = [{ name: 'J.K Rowling', birthYear: 1965 }];

app.get('/seed_db', async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    await book.bulkCreate(books);
    await author.bulkCreate(authors);
    res.status(200).json({ message: 'Database Seeding Successful' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error seeding database', error: error.message });
  }
});

// Exercise 1: Create New Author

async function addnewAuthor(authorData) {
  let newAuthor = await track.create(authorData);
  return { newAuthor };
}
app.post('/authors/new', async (req, res) => {
  try {
    let newAuthor = req.body.newAuthor;
    let response = await addnewAuthor(newAuthor);

    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
