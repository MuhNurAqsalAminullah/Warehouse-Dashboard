'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Barang.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'nama kategori sudah ada, disilahkan memasukkan kategori lain'
      },
      validate: {
        notNull: {
          msg: 'inputan data name kategori tidak boleh kosong'
        }
      }
    },
    kuantitas: DataTypes.INTEGER
  }, {
    hooks: {
      afterValidate: (barang, options) => {
        if (barang.name) {
          barang.name = barang.name.toLowerCase();
        }
      }
    },
    sequelize,
    modelName: 'Barang',
  });
  return Barang;
};