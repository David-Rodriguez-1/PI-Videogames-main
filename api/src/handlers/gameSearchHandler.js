const {findGameByName, findAllGame} = require('../controllers/findAllGamesController')
const regexCaracters = /[A-Za-z]{2-254}/
const gameSearchHandler = async (req, res) => {
  const { search } = req.query;
  if (search.includes(regexCaracters.test(search)))
  try {
    const results = search ? await findGameByName(search) : await findAllGame();
    
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = gameSearchHandler
