const { Videogame } = require("../db");
const { API_KEY } = process.env;
const axios = require("axios");

// Traigo todos los juegos de DB y API
const findAllGame = async () => {
  const dBGames = await Videogame.findAll();

  const apiGames = await axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}`
  );
  const resApi = apiGames.data.results;

  const apiClean = resApi.map((game) => {
    return {
      id: game.id,
      name: game.name,
      background_image: game.background_image,
      platforms: game.platforms.map(p => p.platform.name),
      rating: game.rating,
    };
  });

  return [...dBGames, ...apiClean];
};

 // Obtengo el juego por name
const findGameByName = async (name) => {
  const dBGameByName = await Videogame.findAll({ where: { name: name } });

  const apiGames = await axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}`
  );
  const resApi = apiGames.data.results;
  const resApiFiltered = resApi.filter(game => {
    return name === game.name
    // if (game.name === name) {
    //   return 
    // } else {
    //   throw Error(`${name} no se ah encontrado`)
    // }
  })
  return [...resApiFiltered, ...dBGameByName];
};

module.exports = { findAllGame, findGameByName };
