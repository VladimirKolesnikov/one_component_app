import { DataTypes } from "sequelize";
import { client } from "../utils/db.js";

export const User = client.define(
  "users",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activationToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "users",
  },
);
