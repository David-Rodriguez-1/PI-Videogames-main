const { Videogame } = require("../db");

const CreateVideoGame = async (
  name,
  descriptions,
  platforms,
  background_image,
  releaseDate,
  rating,
  genres
) =>
  await Videogame.create({
    name,
    descriptions,
    platforms,
    background_image,
    releaseDate,
    rating,
    genres
  });

module.exports = CreateVideoGame;
