import mysql from 'mysql2';
import 'dotenv/config';

const connection = mysql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 20,
    acquireTimeout: 30000,
    connectTimeout: 30000
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
            ID int PRIMARY KEY AUTO_INCREMENT,
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