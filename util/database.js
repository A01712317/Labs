const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'personajes',
    password: ''
});

module.exports = pool.promise();