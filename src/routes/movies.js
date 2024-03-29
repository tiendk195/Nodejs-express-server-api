import express from "express";
import MoviesController from "../controllers/movies.js";
const moviesRoutes = express.Router();
const moviesController = new MoviesController();

moviesRoutes.get("/", moviesController.getAllMovies);
moviesRoutes.post("/", moviesController.createMovies);
moviesRoutes.get("/:id", moviesController.getMoviesDetail);
moviesRoutes.put("/:id", moviesController.updateMovies);
moviesRoutes.delete("/:id", moviesController.deleteMovies);
moviesRoutes.get("/", (req, res) => {
  res.send("Moives News!");
});

moviesRoutes.get("/:id", (req, res) => {
  res.send("Moives News!");
});

moviesRoutes.post("/", (req, res) => {
  res.send("Moives News!");
});

moviesRoutes.put("/:id", (req, res) => {
  res.send("Moives News!");
});

moviesRoutes.delete("/:id", (req, res) => {
  res.send("Moives News!");
});

export default moviesRoutes;
