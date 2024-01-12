'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barang_keluar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Barang_keluar.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'inputan data name barang tidak boleh kosong'
        }
      }
    },
    jumlah_stok_keluar: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Barang_keluar',
  });
  return Barang_keluar;
};