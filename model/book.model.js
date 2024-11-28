let { DataTypes, sequelize } = require('../lib');

let book = sequelize.define('books', {
  title: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publicationYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { book };
