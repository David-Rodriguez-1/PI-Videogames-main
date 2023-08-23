const CreateVideoGame = require('../controllers/createGameController')

const createGameHandler = async (req, res) => {
  try {
    const {
      id,
      name,
      descriptions,
      plataform,
      background_image,
      releaseDate,
      rating,
      genres,
    } = req.body;
    const newGame = await CreateVideoGame(
      name,
      descriptions,
      plataform,
      background_image,
      releaseDate,
      rating,
      genres
    );
    res.status(201).json(newGame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createGameHandler;