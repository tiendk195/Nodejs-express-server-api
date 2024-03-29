import categoriesRoutes from "./categories.js";
import moviesRoutes from "./movies.js";
export default function routes(app) {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  app.use("/movies", moviesRoutes);
  app.use("/movies", categoriesRoutes);
}
