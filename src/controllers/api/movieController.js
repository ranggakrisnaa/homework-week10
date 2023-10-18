const { movieService } = require("../../services");

const createMovie = async (req, res) => {
  try {
    const { title, genres, year } = req.body;

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
    res.json({ movie });
  } catch (error) {}
};

module.exports = { createMovie, updateMovie };
