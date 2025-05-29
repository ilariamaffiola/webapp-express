//importo mySQL2
const mysql = require('mysql2');

//creo la connessione al db
const connection = mysql.createConnection({
    host:'',
    port:'',
    user: '',
    password: '',
    database: ''
})

//effettuo la connesione al db
connection.connect((err) => {
    if(err) {
        console.log('Error to connect to the database:'+err);
    }
    else {
        console.log('connecter to mySQL database');
    }
});

module.exports = connection;