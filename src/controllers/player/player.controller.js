const _ = require('lodash');
const Player = require('../../models/player/player.model');

// add player.
exports.create = (req, res) => {
  const file = _.get(req, 'files.image');
  const fileName = `${Math.random().toString().replace('0.', '')}.pdf`;

  file.mv(`tmp/${fileName}`, (fileErr) => {
    if (fileErr) {
      res.status(500).send({
        status: 'failed',
        message:
          fileErr.message || 'Internal server error',
      });
    } else {
      const { name, credit } = req.body;
      const data = {
        name,
        score: credit,
        img: fileName,
      };
      Player.create(data, (err, result) => {
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
    }
  });
};
