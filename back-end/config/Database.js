import { Sequelize } from "sequelize";

const db = new Sequelize("news_toplearn", "enzo360", "29693430", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
