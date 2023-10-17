'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init({
    title: { type: DataTypes.STRING, allowNull: true },
    genres: { type: DataTypes.STRING, allowNull: true },
    year: { type: DataTypes.STRING, allowNull: true },
    photo: { type: DataTypes.STRING, allowNull: true }
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};