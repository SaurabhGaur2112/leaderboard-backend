const { Client } = require('pg');

const databaseUtils = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
};

const connection = new Client({
  connectionString: `postgressql://${databaseUtils.user}:${databaseUtils.password}@${databaseUtils.host}:${databaseUtils.port}/${databaseUtils.database}`,
});

connection.connect((err) => {
  if (!err) console.log('Connected');
  else {
    console.log(`Failed ${JSON.stringify(err, undefined, 2)}`);
  }
});

module.exports = connection;
