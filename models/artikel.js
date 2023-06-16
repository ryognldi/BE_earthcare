import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Artikels extends Model {
    static associate(models) {
    }
  }

  Artikels.init(
    {
        judul_artikel: DataTypes.STRING,
        deskripsi: DataTypes.STRING,
        isi_artikel: DataTypes.STRING

    },
    {
      sequelize,
      modelName: "Artikels",
    }
  );

  return Artikels;
};