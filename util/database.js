const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'labo',
    password: 'a'
});

module.exports = pool.promise();