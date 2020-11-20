const express = require('express');
// player controllers
const player = require('../../controllers/player/player.controller');

const router = express.Router();

// Add player
router.post('/create', player.create);

module.exports = router;
