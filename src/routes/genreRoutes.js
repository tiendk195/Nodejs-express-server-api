import express from "express";
import GenreController from "../controllers/genreController";

const genresRoutes = express.Router();
const genreController = new GenreController();

genresRoutes.get("/", genreController.getAllGenres);
genresRoutes.get("/:id", genreController.getGenresDetail);
genresRoutes.post("/", genreController.createGenre);
genresRoutes.put("/:id", genreController.updateGenre);
genresRoutes.delete("/:id", genreController.deleteGenre);
export default genresRoutes;
