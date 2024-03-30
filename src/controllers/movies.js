import Movie from "../models/MovieModel";
class MoviesController {
  //GET  /movies
  async getAllMovies(req, res) {
    try {
      const movies = await Movie.find().populate(["category", "genre"]);
      res.status(200).json({
        message: "get movies successfully",
        data: movies,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  //GET  /movies/:id
  async getMoviesDetail(req, res) {
    try {
      const movie = await Movie.findById(req.params.id).populate([
        "category",
        "genre",
      ]);

      if (!movie) {
        return res.status(404).json({
          message: "Movie not found",
        });
      }
      res.status(200).json({
        message: "get movies Detailsuccessfully",
        data: movie,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  //POST  /movies
  async createMovies(req, res) {
    // Movie.create({
    //   name: "One Piece",
    //   poster:
    //     "https://i0.wp.com/www.ghibli.jp/wordpress/wp-content/uploads/2022/06/one_piece_1.jpg",
    //   director: "Eiichiro Oda",
    //   cast: "Monkey D. Luffy, Roronoa Zoro, Nami, Usopp, Sanji, Tony-Tony Chopper, Nico Robin, Franky, Shanks",
    //   genre: "Action, Adventure, Comedy",
    //   runningTime: "24",
    //   language: "Japanese",
    //   rated: "13",
    //   trailer: "https://www.youtube.com/watch?v=0gBkXnqUwXo",
    // });
    const newMovie = new Movie(req.body);
    const saveMovie = await newMovie.save();
    res
      .status(201)
      .json({ message: "Create Movie successfully", data: saveMovie });
  }
  //PUT  /movies/:id
  async updateMovies(req, res) {
    try {
      const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
      if (!movies) {
        return res.status(404).json({
          message: "Movie not found",
          data: movie,
        });
      }
      const updateMovie = Movie.findById(req.params.id);
      res.status(200).json({
        message: "Update movies successfully",
        data: updateMovie,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  //DELETE  /movies/:id
  async deleteMovies(req, res) {
    try {
      const movies = await Movie.findByIdAndDelete(req.params.id).exec();
      if (!movies) {
        res.status(404).json({
          message: "Cannot deleted,Movie not found",
        });
      }
      res.status(200).json({
        message: "Deleted movies successfully",
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}
export default MoviesController;
