import categoriesRoutes from "./categoriesRoutes.js";
import moviesRoutes from "./movies.js";
import genresRoutes from "./genreRoutes.js";
export default function routes(app) {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  app.use("/movies", moviesRoutes);
  app.use("/categories", categoriesRoutes);
  app.use("/genre", genresRoutes);
}
