let { DataTypes, sequelize } = require('../lib');

let author = sequelize.define('authors', {
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  birthYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { author };
