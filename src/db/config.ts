import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import envpath from '../util/filePath';
dotenv.config({ path: envpath});

const config = {
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectionLimit: Number(process.env.MYSQL_CONNECTION_POOL)
}

export const pool = mysql.createPool(config);
