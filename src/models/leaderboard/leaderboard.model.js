const _ = require('lodash');
// database connection
const connection = require('../../config/db.connection');

// constructor
const Leaderboard = (application) => {
  this.active = application.active;
};

Leaderboard.getAll = (id, result) => {
  connection.query('SELECT COUNT(*) FROM leaders WHERE flag = 1', (countErr, countRes) => {
    if (countErr) {
      result({
        message: countErr,
      }, null);
      return;
    }
    const countId = parseInt(id, 10) * 10;
    connection.query('SELECT id, name, score, img AS image FROM leaders WHERE flag = 1 AND id BETWEEN $1 AND $2', [countId - 9, countId], (err, res) => {
      if (err) {
        result({
          message: err,
        }, null);
        return;
      }
      const data = {
        result: _.get(res, 'rows'),
        total: _.get(countRes, 'rows[0].count'),
      };
      result(null, data);
    });
  });
};

module.exports = Leaderboard;
