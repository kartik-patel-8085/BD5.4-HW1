let { DataTypes, sequelize } = require('../lib');

let author = require('./author.model');
let book = require('./book.model');

let bookAuthors = sequelize.define('like', {
  authorId: {
    type: DataTypes.INTEGER,
    references: {
      model: author,
      key: 'id',
    },
  },
  bookId: {
    type: DataTypes.INTEGER,
    references: {
      model: book,
      key: 'id',
    },
  },
});

author.belongsToMany(book, { through: bookAuthors });

book.belongToMany(author, { through: bookAuthors });

module.exports = { bookAuthors };
