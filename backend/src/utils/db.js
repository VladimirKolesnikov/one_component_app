import dotenv from "dotenv";
dotenv.config({ path: "./backend/.env" });
import Sequelize from "sequelize";

// console.log(process.env.DB_PASSWORD, 'db password', process.cwd())

export const client = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  // database: 'postgres',
  dialect: "postgres",
});
