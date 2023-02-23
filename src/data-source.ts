import { DataSource } from "typeorm";
import "dotenv/config";
import { createTableAnnouncements1676993900217 } from "./migrations/1676993900217-createTableAnnouncements";
import { alterTableAnnouncementsAndCreateTableImage1677150628817 } from "./migrations/1677150628817-alterTableAnnouncementsAndCreateTableImage";
import { Image } from "./entities/images";
import { Announcement } from "./entities/announcement.entity";
import { updateAnnouncementTypeVehicleType1677157135446 } from "./migrations/1677157135446-updateAnnouncementType_vehicleType";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: true,
  entities: [Announcement, Image],
  migrations: [
    createTableAnnouncements1676993900217,
    alterTableAnnouncementsAndCreateTableImage1677150628817,
    updateAnnouncementTypeVehicleType1677157135446,
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
