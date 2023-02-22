import { DataSource } from "typeorm";
import "dotenv/config";
import { createTableAnnouncements1676993900217 } from "./migrations/1676993900217-createTableAnnouncements";
import { Announcement } from "./entities/announcement.entity";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: true,
  entities: [Announcement],
  migrations: [createTableAnnouncements1676993900217],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

export default AppDataSource;
