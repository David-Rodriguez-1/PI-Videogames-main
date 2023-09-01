const CreateVideoGame = require('../controllers/createGameController')

const createGameHandler = async (req, res) => {
  console.log(req.body);
  console.log('hola');
  // console.log(JSON.stringify(req.body));
  // console.log(typeof req.body);
  try {
    const {
      name,
      description,
      platforms,
      background_image,
      releaseDate,
      rating,
      genres,
    } = req.body;
    const newGame = await CreateVideoGame(
      name,
      description,
      platforms,
      background_image,
      releaseDate,
      parseInt(rating)
    );
    console.log(newGame);
    newGame.addGenre(genres)
    res.status(201).json(newGame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createGameHandler;