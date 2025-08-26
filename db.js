import mysql from 'mysql';
import 'dotenv/config';

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log("Connected!");
});


connection.query(`CREATE TABLE IF NOT EXISTS Therapists (
            Name varchar(30) PRIMARY KEY,
            Title varchar(30) NOT NULL,
            Email varchar(50) NOT NULL,
            Location varchar(30) NOT NULL,
            YearsOfPractice int NOT NULL,
            Availability varchar(20) NOT NULL
        )`,(err, result) => {
            if(err) {
                throw err;
            }
        });



connection.query(`CREATE TABLE IF NOT EXISTS Clients (
            Name varchar(30) PRIMARY KEY,
            Email varchar(50) NOT NULL,
            Location varchar(30) NOT NULL,
            PhoneNumber varchar(10) NOT NULL,
            Regularity varchar(10) NOT NULL
        )`,(err, result) => {
            if(err) {
                throw err;
            }
        });



connection.query(`CREATE TABLE IF NOT EXISTS Sessions (
            Therapist varchar(30) NOT NULL,
            Client varchar(30) NOT NULL,
            Notes varchar(255) NOT NULL,
            SessionDate varchar(10) NOT NULL,
            Length int NOT NULL,
            CONSTRAINT FK_Therapist FOREIGN KEY(Therapist) REFERENCES Therapists(Name) 
            ON DELETE CASCADE ON UPDATE CASCADE,
            CONSTRAINT FK_Client FOREIGN KEY(Client) REFERENCES Clients(Name) 
            ON DELETE CASCADE ON UPDATE CASCADE
        )`,(err, result) => {
            if(err) {
                throw err;
            }
        });

export default connection; 