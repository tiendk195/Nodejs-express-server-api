import express from "express";
import MoviesController from "../controllers/movies";
const moviesRoutes = express.Router();
const moviesController = new MoviesController();

moviesRoutes.get("/", moviesController.getAllMovies);
moviesRoutes.post("/", moviesController.createMovies);
moviesRoutes.get("/:id", moviesController.getMoviesDetail);
moviesRoutes.put("/:id", moviesController.updateMovies);
moviesRoutes.delete("/:id", moviesController.deleteMovies);

export default moviesRoutes;
