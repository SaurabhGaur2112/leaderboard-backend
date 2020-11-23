const Leaderboard = require('../../models/leaderboard/leaderboard.model');

// Retrieve all leaders.
exports.getAll = (req, res) => {
  Leaderboard.getAll(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send({
        status: 'failed',
        message:
          err.message || 'Internal server error',
      });
    } else {
      const dataValue = {
        data: data.result,
        total: data.total,
      };
      res.send({
        status: 'success',
        ...dataValue,
      });
    }
  });
};
