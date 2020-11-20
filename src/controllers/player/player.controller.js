const Player = require('../../models/player/player.model');

// add player.
exports.create = (req, res) => {
  console.log('query body', req);
  Player.create(req.body, (err, result) => {
    if (err) {
      res.status(500).send({
        status: 'failed',
        message:
          err.message || 'Internal server error',
      });
    } else {
      res.send({
        status: 'success',
        message: result.message,
        data: result.data,
      });
    }
  });
};
