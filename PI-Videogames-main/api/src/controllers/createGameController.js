const { Videogame } = require("../db");

const CreateVideoGame = async (
  name,
  descriptions,
  platforms,
  background_image,
  releaseDate,
  rating
) =>
  await Videogame.create({
    name,
    descriptions,
    platforms,
    background_image,
    releaseDate,
    rating,
  });

module.exports = CreateVideoGame;
