import categoriesRoutes from "./categoriesRoutes";
import moviesRoutes from "./moviesRotes";
import genresRoutes from "./genreRoutes";
import authsRoutes from "./authRoutes";

export default function routes(app) {
  app.get("/", (req, res) => {
    res.send("Api server in running on port 9999");
  });
  app.use("/movies", moviesRoutes);
  app.use("/categories", categoriesRoutes);
  app.use("/genre", genresRoutes);
  app.use("/auth", authsRoutes);
}
