//importo mySQL2
const mysql = require('mysql2');

//creo la connessione al db
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

//effettuo la connesione al db
connection.connect((err) => {
    if(err) {
        console.log('Error to connect to the database:'+err);
    }
    else {
        console.log('Connected to mySQL database');
    }
});

module.exports = connection;