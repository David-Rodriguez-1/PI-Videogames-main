const genresHandler = require('../handlers/genresHandler')

const { Router } = require('express')
const genreRouter = Router();

genreRouter.get('/', genresHandler)

module.exports = genreRouter;