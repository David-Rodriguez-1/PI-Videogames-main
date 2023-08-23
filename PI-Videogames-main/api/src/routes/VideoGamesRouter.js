const { Router } = require("express");
const videoGamesRoutes = Router();
const getVideogameByIdHandler = require("../handlers/gameDetailHandler");
const gameSearchHandler = require("../handlers/gameSearchHandler");
const createGameHandler = require('../handlers/createGameHandler')

videoGamesRoutes.get("/:idVideogame", getVideogameByIdHandler);
// videoGamesRoutes.get("/", getAllGames);
videoGamesRoutes.get("/search", gameSearchHandler);
videoGamesRoutes.post("/", createGameHandler)

module.exports = videoGamesRoutes;