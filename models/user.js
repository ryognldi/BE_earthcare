import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
    }
  }

  Users.init(
    {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Users",
    }
  );

  return Users;
};