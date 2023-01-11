import express from "express"
const {defaultCity, searchCity} = require("../controller/city")

require('dotenv').config()
const cityRouter = express.Router();

/*
 * Showing default City Router
 */
cityRouter.get('/', defaultCity)

/*
 * Showing entered City Router
 */
cityRouter.get('/:city', searchCity)

export default cityRouter