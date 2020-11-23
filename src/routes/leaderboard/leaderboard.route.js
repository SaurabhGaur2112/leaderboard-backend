const express = require('express');
// leaderboard controllers
const leaderboard = require('../../controllers/leaderboard/leaderboard.controller');

const router = express.Router();

// Retrieve all leaders
router.get('/:id', leaderboard.getAll);

module.exports = router;
