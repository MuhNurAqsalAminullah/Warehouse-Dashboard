'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barang_masuk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Barang_masuk.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'inputan data name barang tidak boleh kosong'
        }
      }
    },
    jumlah_stok_masuk: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Barang_masuk',
  });
  return Barang_masuk;
};