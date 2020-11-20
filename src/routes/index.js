const express = require('express');

// leaderboard router
const leaderboardRouter = require('./leaderboard/leaderboard.route');

const router = express.Router();

// leaderboard routes
router.use('/v1/leaderboard', leaderboardRouter);

module.exports = router;
