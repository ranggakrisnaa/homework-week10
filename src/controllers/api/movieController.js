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

module.exports = { createMovie };
