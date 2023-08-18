const CreateVideoGame = require('../controllers/createGameController')

const createGameHandler = async (req, res) => {
  try {
    const {
      name,
      descriptions,
      plataform,
      background_image,
      releaseDate,
      rating,
    } = req.body;
    const newGame = await CreateVideoGame(
      name,
      descriptions,
      plataform,
      background_image,
      releaseDate,
      rating
    );
    res.status(201).json(newGame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createGameHandler;