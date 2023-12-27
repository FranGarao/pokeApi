const express = require("express");
const router = express.Router();
const controller = require("../controllers/pokeController");

router.get("/pokedex", controller.getPokemons);

module.exports = router;
