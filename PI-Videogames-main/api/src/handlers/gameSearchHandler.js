const {findGameByName} = require('../controllers/findAllGames')

const gameSearchHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const results = name ? await findGameByName(name) : await findAllGame();
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = gameSearchHandler
