// database connection
const connection = require('../../config/db.connection');

// constructor
const Player = (application) => {
  this.active = application.active;
};

Player.create = (data, result) => {
  connection.query(`INSERT INTO leaders (name, score, img) VALUES ('${data.name}', '${data.score}', '${data.img}')`, (err) => {
    if (err) {
      result({
        message: 'Leader creation failed',
      }, null);
      return;
    }
    result(null, {
      message: 'Leader successfully created',
    });
  });
};

module.exports = Player;
