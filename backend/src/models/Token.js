import { DataTypes } from "sequelize";
import { client } from "../utils/db.js";

export const Token = client.define(
  "Token",
  {
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },

  },
  {
    tableName: "tokens",
  },
);
