const express = require('express');

// leaderboard router
const leaderboardRouter = require('./leaderboard/leaderboard.route');
// player router
const playerRouter = require('./player/player.route');

const router = express.Router();

// leaderboard routes
router.use('/v1/leaderboard', leaderboardRouter);
// player routes
router.use('/v1/player', playerRouter);

module.exports = router;
