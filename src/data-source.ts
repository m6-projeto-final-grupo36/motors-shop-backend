import { DataSource } from "typeorm";
import "dotenv/config";
import { Image } from "./entities/images";
import { Announcement } from "./entities/announcement.entity";
import { User } from "./entities/users.entity";
import { Comment } from "./entities/comments.entity";
import { Address } from "./entities/addresses.entity";
import { createTables1677704933463 } from "./migrations/1677704933463-createTables";
// import { createTables1677532462005 } from "./migrations/1677532462005-createTables";

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
    createTables1677704933463,
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
