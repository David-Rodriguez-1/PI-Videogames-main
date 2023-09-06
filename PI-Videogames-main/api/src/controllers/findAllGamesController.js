const { Videogame, Genre } = require("../db");
const { Op } = require("sequelize");
const { API_KEY } = process.env;
const axios = require("axios");
const db = require("../db");

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

  const dbGamesClean = dBGames.map(vg => {
    return {
      id: vg.id,
      name: vg.name,
      description: vg.description,
      platforms: vg.platforms,
      background_image: vg.background_image,
      releaseDate: vg.releaseDate,
      rating: vg.rating,
      genres: vg.genres.map(g=>g.name)
    }
  })

  //!   ***Hacer Paginado***
  // const page1 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`).then((res) => res.data);
  // const page2 = await axios.get(`https://api.rawg.io/api/games?page=2&key=${API_KEY}`).then((res) => res.data);
  // const page3 = await axios.get(`https://api.rawg.io/api/games?page=3&key=${API_KEY}`).then((res) => res.data);

  // const resultado = Promise.all([page1, page2, page3]).then((res) => console.log(res))
  // console.log(resultado);

  const apiGames = await axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}`
  );
  const resApi = apiGames.data.results;

  const apiClean = resApi.map((game) => {
    return {
      id: game.id,
      name: game.name,
      background_image: game.background_image,
      platforms: game.platforms.map((p) => p.platform.name),
      rating: game.rating,
      genres: game.genres.map((g) => g.name),
    };
  });
  return [...dbGamesClean, ...apiClean];
};

//? Obtengo el juego por name
// Busco en DB
const findGameByName = async (search) => {
  const dBGameByName = await Videogame.findAll(
    {
      where: { name: { [Op.iLike]: `%${search}%` } },
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

  // Busco en la API
  if (search) {
    const apiGames = await axios.get(
      `https://api.rawg.io/api/games?search=${search}&key=${API_KEY}`
    );
    const countApi = apiGames.data.count;

    if (!countApi) throw Error(`Game '${search}' does not exist`);

    const gameSearchApi = apiGames.data.results.map((game) => {
      return {
        id: game.id,
        name: game.name,
        descriptions: game.descriptions,
        platforms: game.platforms.map((g) => g.platform.name),
        background_image: game.background_image,
        rating: game.rating,
        genres: game.genres.map((g) => g.name),
      };
    });
    const filterDb = dBGameByName.filter((g) =>
      g.name.toLowerCase().includes(search.toLowerCase())
    );
    const results = [...filterDb, ...gameSearchApi];
    return results.splice(0, 15);
  }
};

module.exports = { findAllGame, findGameByName };
