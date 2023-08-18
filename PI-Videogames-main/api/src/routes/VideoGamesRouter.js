const { Router } = require("express");
const videoGamesRoutes = Router();
const getVideogameByIdHandler = require("../handlers/gameDetailHandler");
const gameSearchHandler = require("../handlers/gameDetailHandler");
const createGameHandler = require('../handlers/createGameHandler')

videoGamesRoutes.use("/:idVideogame", getVideogameByIdHandler);
videoGamesRoutes.get("/", gameSearchHandler);
videoGamesRoutes.post("/", createGameHandler)

module.exports = videoGamesRoutes;