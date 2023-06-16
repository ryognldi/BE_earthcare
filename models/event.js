import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Events extends Model {
    static associate(models) {
    }
  }

  Events.init(
    {
        nama_event: DataTypes.STRING,
        deskripsi: DataTypes.STRING,
        lokasi: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Events",
    }
  );

  return Events;
};