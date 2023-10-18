const { movieService } = require("../../services");

const createMovie = async (req, res) => {
  try {
    const { title, genres, year } = req.body;
    const { avatar } = req.file;
    console.log(avatar);
    await movieService.createMovie({ title, genres, year });
    res.json({ message: "data successfully created" });
  } catch (error) {
    res.json({ error: error });
  }
};

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, genres, year } = req.body;

    const updatedData = {
      title,
      genres,
      year,
    };

    const movie = await movieService.getMovieId(id);
    if (movie) {
      const data = await movieService.updateMovie(updatedData, id);
    } else {
      res.json({ message: "Movie not found" });
    }
    res.json({ message: "success" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { createMovie, updateMovie };
