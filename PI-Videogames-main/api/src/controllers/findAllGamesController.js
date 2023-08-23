const { Videogame, Genre } = require("../db");
const { Op } = require('sequelize')
const { API_KEY } = process.env;
const axios = require("axios");

// Traigo todos los juegos de DB y API
const findAllGame = async () => {
  const dBGames = await Videogame.findAll({
    include: {
      model: Genre,
      atributes: ["name"],
      through: {
        atributes: [],
      },
    },
  });

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
      genres: game.genres.map(g => g.name)
    };
  });

  return [...dBGames, ...apiClean];
};

 // Obtengo el juego por name
const findGameByName = async (name) => {
  const dBGameByName = await Videogame.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
    include: {
        model: Genre,
        atributes: ["name"],
        through: {
          atributes: [],
        },
      },
    },
    { limit: 15 }
  );

  const apiGames = await axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}`
  );
  const resApi = apiGames.data.results;
  const resApiFiltered = resApi.map(game => {
    console.log(name);
    if (name === game.name) {
     return {
       id: game.id,
       name: game.name,
       background_image: game.background_image,
       platforms: game.platforms.map((p) => p.platform.name),
       rating: game.rating,
       genres: game.genres.map((g) => g.name)
     };
    }
  })
  // const gameByName = [...resApiFiltered, ...dBGameByName];
  // if (gameByName.name !== name) throw Error(`The video game ${name} does not exist`);
  return [...resApiFiltered, ...dBGameByName]
};

module.exports = { findAllGame, findGameByName };
