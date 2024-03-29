import Genre from "../models/genreModel.js";
class GenreController {
  async getAllGenres(req, res) {
    try {
      const genreList = await Genre.find();
      res.status(200).json({
        message: "get all genres successfully",
        data: genreList,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async getGenresDetail(req, res) {
    try {
      const genreList = await Genre.findById(req.params.id);
      if (!genreList) {
        return res.status(404).json({
          message: "Genre not found",
        });
      }
      res.status(200).json({
        message: "get detail genres successfully",
        data: genreList,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async createGenre(req, res) {
    try {
      const newGenre = new Genre(req.body);
      const saveGenre = await newGenre.save();
      res
        .status(201)
        .json({ message: "Create Genre successfully", data: saveGenre });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async updateGenre(req, res) {
    try {
      const genre = await Genre.findByIdAndUpdate(req.params.id, req.body);
      if (!genre) {
        return res.status(404).json({
          message: "Genre not found",
        });
      }
      const updateGenre = await Genre.findById(req.params.id);
      res.status(200).json({
        message: "Update genre successfully",
        data: updateGenre,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async deleteGenre(req, res) {
    try {
      const deleteGenre = await Genre.findByIdAndDelete(req.params.id);
      if (!deleteGenre) {
        return res.status(404).json({
          message: "Genre not found",
        });
      }
      res.status(200).json({
        message: "Delete genre successfully",
      });
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  }
}
export default GenreController;
