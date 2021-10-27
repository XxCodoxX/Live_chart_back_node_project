const mysql = require('mysql2');

const pool = mysql.createPool({host:'localhost', user: 'root', database: 'ass_detabase_project'});
  // now get a Promise wrapped instance of that pool
  const promisePool = pool.promise();

module.exports = promisePool ;