import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Admins extends Model {
    static associate(models) {
    }
  }

  Admins.init(
    {
        username: DataTypes.STRING,
        password: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Admins",
    }
  );

  return Admins;
};