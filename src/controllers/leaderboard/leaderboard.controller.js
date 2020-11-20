const _ = require('lodash');
const Leaderboard = require('../../models/leaderboard/leaderboard.model');

// Retrieve all leaders.
exports.getAll = (req, res) => {
  Leaderboard.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        status: 'failed',
        message:
          err.message || 'Internal server error',
      });
    } else {
      res.send({
        status: 'success',
        data,
      });
    }
  });
};
