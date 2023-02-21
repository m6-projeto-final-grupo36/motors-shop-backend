import { app } from "./app";
import AppDataSource from "./data-source";

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

  // mudei para não conflitar com o front
  app.listen(3333, () => {
    console.log("Servidor executando");
  });
})();