import { DataSource } from "typeorm";
import "dotenv/config";
import { Image } from "./entities/images";
import { Announcement } from "./entities/announcement.entity";
import { User } from "./entities/users.entity";
import { Comment } from "./entities/comments.entity";
import { Address } from "./entities/addresses.entity";
import { createTables1677521926824 } from "./migrations/1677521926824-createTables";
// import { createTables1677343374066 } from "./migrations/1677343374066-createTables";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: true,
  entities: [Announcement, Image, User, Comment, Address],
  migrations: [
    createTables1677521926824,
  ],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

export default AppDataSource;
